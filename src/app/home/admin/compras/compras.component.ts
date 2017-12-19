import { Component, OnInit } from '@angular/core';
import { ComprasService } from "./../_services/compras.service";

import { NotificationsService } from 'angular2-notifications';

declare var $: any

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  title:string="Compras"
  Table:any
  selectedData:any
  idRol=+localStorage.getItem('currentRolId');
  Agregar = +localStorage.getItem('permisoAgregar')
  Modificar = +localStorage.getItem('permisoModificar')
  Eliminar = +localStorage.getItem('permisoEliminar')
  Mostrar = +localStorage.getItem('permisoMostrar')
  public rowsOnPage = 5;
  public search:any
  constructor(
    private _service: NotificationsService,
    private mainService: ComprasService
  ) { }

  ngOnInit() {
    this.cargarAll()
    this.colapsse()
  }
  colapsse(){
    if($('.page-container').hasClass('page-navigation-toggled')){
      $('.page-container').removeClass('page-navigation-toggled page-container-wide')
      $('#navigations').removeClass('x-navigation-minimized')
      $('.fa-indent').addClass('fa-dedent')
      $('.fa-dedent').removeClass('fa-indent')
    }
  }
  cargarAll(){
    $('#Loading').css('display','block')
    $('#Loading').addClass('in')
    this.mainService.getAll()
                      .then(response => {
                        this.Table = response
                        // console.log(response);
                        $("#editModal .close").click();
                        $("#insertModal .close").click();
                        $('#Loading').css('display','none')
                        console.clear
                      }).catch(error => {
                        console.clear
                        this.createError(error)
                      })
  }

  insert(formValue:any){
    $('#Loading').css('display','block')
    $('#Loading').addClass('in')
    this.mainService.create(formValue)
                      .then(response => {
                        this.cargarAll()
                        console.clear
                        this.create('Sucursal Ingresado')
                        $('#Loading').css('display','none')
                        $('#insert-form')[0].reset()
                      }).catch(error => {
                        console.clear
                        this.createError(error)
                        $('#Loading').css('display','none')
                      })


  }

  cargarSingle(id:number){
    this.mainService.getSingle(id)
                      .then(response => {
                        console.log(response);
                        this.selectedData = response;
                      }).catch(error => {
                        console.clear
                        this.createError(error)
                      })
  }

  update(formValue:any){
    $('#Loading').css('display','block')
    $('#Loading').addClass('in')
    //console.log(data)
    formValue = {
      estado:0,
      id:formValue
    }
    if(confirm("¿Desea Anular la Compra?")){
      this.mainService.update(formValue)
                        .then(response => {
                          this.cargarAll()
                          console.clear
                          this.create('Compra Anulada Exitosamente')
                          $('#Loading').css('display','none')
                        }).catch(error => {
                          console.clear
                          $('#Loading').css('display','none')
                          if(error.status==402){
                            this.createError(error._body.substring(25,53))
                          }else{
                            this.createError(error)
                          }
                        })
    }else{
      $('#Loading').css('display','none')
    }

  }

  delete(id:string){
    $('#Loading').css('display','block')
    $('#Loading').addClass('in')
    if(confirm("¿Desea eliminar el Sucursal?")){
      this.mainService.delete(id)
                        .then(response => {
                          this.cargarAll()
                          console.clear
                          this.create('Sucursal Eliminado exitosamente')
                          $('#Loading').css('display','none')
                        }).catch(error => {
                          console.clear
                          this.createError(error)
                          $('#Loading').css('display','none')
                        })
    }else{
      $('#Loading').css('display','none')
    }

  }

  public options = {
    position: ["bottom", "right"],
    timeOut: 2000,
    lastOnBottom: false,
    animate: "fromLeft",
    showProgressBar: false,
    pauseOnHover: true,
    clickToClose: true,
    maxLength: 200
  };

  create(success) {
      this._service.success('¡Éxito!',success)

  }
  createError(error) {
      this._service.error('¡Error!',error)

  }
}

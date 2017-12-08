import { Component, OnInit } from '@angular/core';
import { SucursalesService } from "./../_services/sucursales.service";

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
  public rowsOnPage = 5;
  public search:any
  constructor(
    private _service: NotificationsService,
    private mainService: SucursalesService
  ) { }

  ngOnInit() {
    this.cargarAll()
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
    this.mainService.update(formValue)
                      .then(response => {
                        this.cargarAll()
                        console.clear
                        this.create('Sucursal Actualizado exitosamente')
                        $('#Loading').css('display','none')
                      }).catch(error => {
                        console.clear
                        this.createError(error)
                        $('#Loading').css('display','none')
                      })

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

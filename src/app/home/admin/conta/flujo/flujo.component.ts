import { Component, OnInit } from '@angular/core';
import { UsersService } from "./../../_services/users.service";

import { NotificationsService } from 'angular2-notifications';

declare var $: any

import { path } from "../../../../config.module";

@Component({
  selector: 'app-flujo',
  templateUrl: './flujo.component.html',
  styleUrls: ['./flujo.component.css']
})
export class FlujoComponent implements OnInit {
  title:string="Flujo de Efectivo"
  Table:any
  selectedData:any
  idRol     = +localStorage.getItem('currentRolId');
  Agregar   = +localStorage.getItem('permisoAgregar');
  Modificar = +localStorage.getItem('permisoModificar');
  Eliminar  = +localStorage.getItem('permisoEliminar');
  Mostrar   = +localStorage.getItem('permisoMostrar');
  public rowsOnPage = 5;
  public search:any
  private basePath:string = path.path
  constructor(
    private _service: NotificationsService,
    private mainService: UsersService
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
                        $('#Loading').css('display','none')
                        console.clear
                      }).catch(error => {
                        console.clear
                        this.createError(error)
                        $('#Loading').css('display','none')
                      })
  }

  insert(formValue:any){
    $('#Loading').css('display','block')
    $('#Loading').addClass('in')
    this.mainService.create(formValue)
                      .then(response => {
                        this.cargarAll()
                        console.clear
                        this.create('Partida Ingresada')
                        $('#Loading').css('display','none')
                        $("#insertModal .close").click();
                        $('#insert-form')[0].reset()
                      }).catch(error => {
                        console.clear
                        this.createError(error)
                        $('#Loading').css('display','none')
                      })


  }

  cargarSingle(id:number){
    $('#Loading').css('display','block')
    $('#Loading').addClass('in')
    this.mainService.getSingle(id)
                      .then(response => {
                        this.selectedData = response;
                        $('#Loading').css('display','none')
                      }).catch(error => {
                        console.clear
                        $('#Loading').css('display','none')
                        this.createError(error)
                      })
  }
  update(formValue:any){
    $('#Loading').css('display','block')
    $('#Loading').addClass('in')
    this.mainService.update(formValue)
                      .then(response => {
                        this.cargarAll()
                        console.clear
                        this.create('Partida Actualizada Exitosamente')
                        $('#Loading').css('display','none')
                        $("#editModal .close").click();
                      }).catch(error => {
                        console.clear
                        this.createError(error)
                        $('#Loading').css('display','none')
                      })

  }

  delete(id:string){
    $('#Loading').css('display','block')
    $('#Loading').addClass('in')
    if(confirm("¿Desea eliminar la Partida?")){
      this.mainService.delete(id)
                        .then(response => {
                          this.cargarAll()
                          console.clear
                          this.create('Partida Eliminado Exitosamente')
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

  generar(longitud)
  {
    let i:number
    var caracteres = "123456789+/-*abcdefghijkmnpqrtuvwxyz123456789+/-*ABCDEFGHIJKLMNPQRTUVWXYZ12346789+/-*";
    var contraseña = "";
    for (i=0; i<longitud; i++) contraseña += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
    return contraseña;
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

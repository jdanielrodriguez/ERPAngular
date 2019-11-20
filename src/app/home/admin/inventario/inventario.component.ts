import { Component, OnInit } from '@angular/core';
import { InventarioService } from "./../_services/inventario.service";

import { NotificationsService } from 'angular2-notifications';

declare var $: any

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  title:string="Inventario"
  Table:any = []
  idRol=+localStorage.getItem('currentRolId');
  Agregar = +localStorage.getItem('permisoAgregar')
  Modificar = +localStorage.getItem('permisoModificar')
  Eliminar = +localStorage.getItem('permisoEliminar')
  Mostrar = +localStorage.getItem('permisoMostrar')
  selectedData:any
  public rowsOnPage = 5;
  public search:any
  constructor(
    private _service: NotificationsService,
    private mainService: InventarioService
  ) { }

  ngOnInit() {
    this.cargarAll()
    this.colapsse()
  }
  colapsse(){
    if($('.page-container').hasClass('page-navigation-toggled')){
      $('.page-container').removeClass('page-navigation-toggled page-container-wide')
      $('#navigations').removeClass('x-navigation-minimized')
      $('#nav-bar-menu').css('display','')
    }
  }

  cargarAll(){
    $('#Loading').css('display','block')
    $('#Loading').addClass('in')
    let sucursal = localStorage.getItem('currentSucursal')
    console.log(this.idRol);

    if(this.idRol>2){
      if(sucursal && sucursal!=''){
          let data = {
            id:0,
            state:sucursal,
            filter:'sucursal'
          }
          this.mainService.getAllFilter(data)
                                .then(response => {
                                  this.Table.length = 0
                                  let num:number=0
                                  response.forEach(element => {
                                    num++
                                    element.correl = num
                                    this.Table.push(element)
                                  });
                                  $("#editModal .close").click();
                                  $("#insertModal .close").click();
                                  $('#Loading').css('display','none')
                                  console.clear
                                }).catch(error => {
                                  console.clear
                                  this.createError(error)
                                  $('#Loading').css('display','none')
                                })
      }else{
        this.mainService.getAll()
                      .then(response => {
                        this.Table.length = 0
                        let num:number=0
                        response.forEach(element => {
                          num++
                          element.correl = num
                          this.Table.push(element)
                        });
                        $("#editModal .close").click();
                        $("#insertModal .close").click();
                        $('#Loading').css('display','none')
                        console.clear
                      }).catch(error => {
                        console.clear
                        this.createError(error)
                        $('#Loading').css('display','none')
                      })
      }
    }else{
      this.mainService.getAll()
                      .then(response => {
                        console.log(response);

                        this.Table.length = 0
                        let num:number=0
                        response.forEach(element => {
                          num++
                          element.correl = num
                          this.Table.push(element)
                        });
                        $("#editModal .close").click();
                        $("#insertModal .close").click();
                        $('#Loading').css('display','none')
                        console.clear
                      }).catch(error => {
                        console.clear
                        this.createError(error)
                        $('#Loading').css('display','none')
                      })
    }

  }

  insert(formValue:any){
    $('#Loading').css('display','block')
    $('#Loading').addClass('in')
    this.mainService.create(formValue)
                      .then(response => {
                        this.cargarAll()
                        console.clear
                        this.create('Rol Ingresado')
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
                        this.create('Rol Actualizado exitosamente')
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
    if(confirm("¿Desea eliminar el Rol?")){
      this.mainService.delete(id)
                        .then(response => {
                          this.cargarAll()
                          console.clear
                          this.create('Rol Eliminado exitosamente')
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

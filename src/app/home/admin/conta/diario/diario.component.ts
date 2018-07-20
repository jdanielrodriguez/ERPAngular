import { Component, OnInit } from '@angular/core';
import { UsersService } from "./../../_services/users.service";

import { NotificationsService } from 'angular2-notifications';

declare var $: any

import { path } from "../../../../config.module";

@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
  styleUrls: ['./diario.component.css']
})
export class DiarioComponent implements OnInit {
  title:string="Libro de Diario"
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
  fechaHoy:any
  fechaMes:any
  constructor(
    private _service: NotificationsService,
    private mainService: UsersService
  ) { }

  ngOnInit() {
    this.getDate();
    this.cargarAll()
  }
  getDate(){
    let date = new Date();
    let month = date.getMonth()+1;
    let month2;
    let monthB = date.getMonth()+1;
    let monthB2;
    let dia= date.getDate();
    let dia2;
    if(month<10){
      month2='0'+month;
    }else{
      month2=month
    }
    if(monthB<10){
      monthB2='0'+monthB;
    }else{
      monthB2=monthB
    }
    if(dia<10){
      dia2='0'+dia;
    }else{
      dia2=dia
    }
    this.fechaHoy= date.getFullYear()+'-'+month2+'-'+dia2
    this.fechaMes= date.getFullYear()+'-'+month2+'-01'
  }
  cargarAll(){
    $('#Loading').css('display','block')
    $('#Loading').addClass('in')
    this.Table = [
      {
        fecha: '01/01/2013',
        explicacion: 'Regularizacion saldos de Aprtura',
        poliza: 'POLIZA-0000000000000',
        totalDebito:44283891.32,
        totalCredito:44283891.32,
        detalle:[
          {
            idCuenta:'1.1.01.01.01.00',
            cuenta:'Caja',
            debito: 685600.11,
            credito:0
          },
          {
            idCuenta:'1.1.02.01.02.00',
            cuenta:'Clientes de Agencia',
            debito: 4990409.150,
            credito:0
          },
          {
            idCuenta:'1.2.01.01.01.00',
            cuenta:'Mobiliario y esquipos',
            debito: 179439.58,
            credito:0
          },
          {
            idCuenta:'1.1.01.01.01.00',
            cuenta:'Equipo de computo',
            debito: 150053.80,
            credito:0
          },
          {
            idCuenta:'1.1.01.01.01.00',
            cuenta:'Vehiculos',
            debito: 878417,
            credito:0
          },
          {
            idCuenta:'1.1.01.01.01.00',
            cuenta:'Herramientas',
            debito: 157129.44,
            credito:0
          },
          {
            idCuenta:'1.1.01.01.01.00',
            cuenta:'Maquinaria',
            debito: 7517373.22,
            credito:0
          },
          {
            idCuenta:'1.1.01.01.01.00',
            cuenta:'Infraestructura',
            debito: 23995299,
            credito:0
          },
          {
            idCuenta:'1.1.01.01.01.00',
            cuenta:'Inventario',
            debito: 4477956.44,
            credito:0
          },
          {
            idCuenta:'1.1.01.01.01.00',
            cuenta:'Gastos de Organizacion',
            debito: 803531.42,
            credito:0
          },
          {
            idCuenta:'1.1.01.01.01.00',
            cuenta:'Mejoras a Propiedad',
            debito: 448780.81,
            credito:0
          },
          {
            idCuenta:'1.1.01.01.01.00',
            cuenta:'(-)Deprec. Acum. Mob. y Equipo',
            debito: 0,
            credito:35887.92
          },
          {
            idCuenta:'1.1.01.01.01.00',
            cuenta:'(-)Deprec. Acum. Equipo',
            debito: 0,
            credito:50012.93
          },
          {
            idCuenta:'1.1.01.01.01.00',
            cuenta:'(-)Deprec. Acum. Vehiculos',
            debito: 0,
            credito:853168.96
          },
          {
            idCuenta:'1.1.01.01.01.00',
            cuenta:'(-)Deprec. Acum. Herramientas',
            debito: 0,
            credito:39282.36
          },
          {
            idCuenta:'1.1.01.01.01.00',
            cuenta:'(-)Deprec. Acum. Maquinaria',
            debito: 0,
            credito:2698129.13
          }

        ]
      },
      {
        fecha: '01/01/2013',
        poliza: 'BAN-DEP-001-000000',
        explicacion: 'Regularizacion saldos de Aprtura',
        totalDebito:19548.32,
        totalCredito:19548.32,
        detalle:[
          {
            idCuenta:'1.1.01.02.01.00',
            cuenta:'Banco Industrial ######',
            debito: 19548.32,
            credito:0
          },
          {
            idCuenta:'1.1.01.01.01.00',
            cuenta:'Caja',
            credito: 19548.32,
            debito:0
          }
        ]
      },
      {
        fecha: '01/01/2013',
        explicacion: 'Renta UCH enero 2013',
        poliza: 'CXP-CONT-001-0000000',
        totalDebito:4154.36,
        totalCredito:4154.36,
        detalle:[
          {
            idCuenta:'1.1.03.01.01.00',
            cuenta:'Iva Credito',
            debito: 445.11,
            credito:0
          },
          {
            idCuenta:'5.1.02.02.01.00',
            cuenta:'Arrendamiento',
            debito: 3709.25,
            credito:0
          },
          {
            idCuenta:'2.1.01.01.01.00',
            cuenta:'Proveedores locales',
            debito: 0,
            credito:3931.81
          },
          {
            idCuenta:'2.1.01.04.02.00',
            cuenta:'ISR RETENCION DEF',
            debito: 0,
            credito:222.55
          }
        ]
      }
    ]
    // this.mainService.getAll()
    //                   .then(response => {
    //                     this.Table = response
    //                     $('#Loading').css('display','none')
    //                     console.clear
    //                   }).catch(error => {
    //                     console.clear
    //                     this.createError(error)
    //                     $('#Loading').css('display','none')
    //                   })
                        $('#Loading').css('display','none')

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

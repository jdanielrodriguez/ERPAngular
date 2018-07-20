import { Component, OnInit } from '@angular/core';
import { UsersService } from "./../../_services/users.service";

import { NotificationsService } from 'angular2-notifications';

declare var $: any

import { path } from "../../../../config.module";

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  title:string="Balance General"
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
    this.getDate()
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
        total:31718769.58,
        detalle:[
          {
            idCuenta:'1.0.00.0.0.0.',
            cuenta:'Activo',
            padding:0,
            tipo:1,
            nivel5:0,
            nivel4:0,
            nivel3:0,
            nivel2:0,
            nivel1:31718769.58
          },
          {
            idCuenta:'1.1.00.0.0.0.',
            cuenta:'Activo Corriente',
            padding:1,
            tipo:1,
            nivel5:0,
            nivel4:0,
            nivel3:0,
            nivel2:31014522.13,
            nivel1:0
          },
          {
            idCuenta:'1.1.01.0.0.0.',
            cuenta:'Caja y Bancos',
            padding:2,
            tipo:1,
            nivel5:0,
            nivel4:0,
            nivel3:1059841.23,
            nivel2:0,
            nivel1:0
          },
          {
            idCuenta:'1.1.01.01.0.0.',
            cuenta:'Caja General',
            padding:3,
            tipo:1,
            nivel5:0,
            nivel4:9128.98,
            nivel3:0,
            nivel2:0,
            nivel1:0
          },
          {
            idCuenta:'1.1.01.01.01.0.',
            cuenta:'Caja',
            padding:4,
            tipo:0,
            nivel5:7628.98,
            nivel4:0,
            nivel3:0,
            nivel2:0,
            nivel1:0
          },
          {
            idCuenta:'1.1.01.01.02.01.',
            cuenta:'Caja Chica',
            padding:4,
            tipo:1,
            nivel5:1500.00,
            nivel4:0,
            nivel3:0,
            nivel2:0,
            nivel1:0
          },
          {
            idCuenta:'1.1.01.01.02.01.',
            cuenta:'caja Chica Administracion',
            padding:5,
            tipo:0,
            nivel5:1500.00,
            nivel4:0,
            nivel3:0,
            nivel2:0,
            nivel1:0
          },
          {
            idCuenta:'1.1.01.02.00.0.',
            cuenta:'Bancos',
            padding:3,
            tipo:1,
            nivel5:0,
            nivel4:1050712.25,
            nivel3:0,
            nivel2:0,
            nivel1:0
          },
          {
            idCuenta:'1.1.01.02.01.0.',
            cuenta:'banco industrial 027-002152-0',
            padding:4,
            tipo:0,
            nivel5:70181.49,
            nivel4:0,
            nivel3:0,
            nivel2:0,
            nivel1:0
          },
          {
            idCuenta:'1.1.01.02.02.0.',
            cuenta:'banco industrial 027-002153-8',
            padding:4,
            tipo:0,
            nivel5:683408.36,
            nivel4:0,
            nivel3:0,
            nivel2:0,
            nivel1:0
          },
          {
            idCuenta:'1.1.01.02.03.0.',
            cuenta:'tc 159632027 (dolares)',
            padding:4,
            tipo:0,
            nivel5:365425.97,
            nivel4:0,
            nivel3:0,
            nivel2:0,
            nivel1:0
          },
          {
            idCuenta:'1.1.01.02.07.0.',
            cuenta:'transferencias por aplicar',
            padding:4,
            tipo:0,
            nivel5:-68303.57,
            nivel4:0,
            nivel3:0,
            nivel2:0,
            nivel1:0
          },
          {
            idCuenta:'1.1.02.00.00.0.',
            cuenta:'CUENTAS POR COBRAR',
            padding:2,
            tipo:1,
            nivel5:0,
            nivel4:0,
            nivel3:22446544.88,
            nivel2:0,
            nivel1:0
          },
          {
            idCuenta:'1.1.02.01.00.0.',
            cuenta:'CLIENTES',
            padding:3,
            tipo:1,
            nivel5:0,
            nivel4:1900816.85,
            nivel3:0,
            nivel2:0,
            nivel1:0
          },
          {
            idCuenta:'1.1.02.01.01.0.',
            cuenta:'clientes directos',
            padding:4,
            tipo:0,
            nivel5:472530.39,
            nivel4:0,
            nivel3:0,
            nivel2:0,
            nivel1:0
          },
          {
            idCuenta:'1.1.02.01.02.0.',
            cuenta:'clientes de agencia',
            padding:4,
            tipo:0,
            nivel5:1428286.46,
            nivel4:0,
            nivel3:0,
            nivel2:0,
            nivel1:0
          },
          {
            idCuenta:'1.1.02.02.00.0.',
            cuenta:'CUENTAS POR COBRAR',
            padding:3,
            tipo:1,
            nivel5:0,
            nivel4:20545728.03,
            nivel3:0,
            nivel2:0,
            nivel1:0
          },
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

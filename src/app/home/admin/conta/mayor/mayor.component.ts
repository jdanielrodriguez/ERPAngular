import { Component, OnInit } from '@angular/core';
import { UsersService } from "./../../_services/users.service";

import { NotificationsService } from 'angular2-notifications';

declare var $: any

import { path } from "../../../../config.module";

@Component({
  selector: 'app-mayor',
  templateUrl: './mayor.component.html',
  styleUrls: ['./mayor.component.css']
})
export class MayorComponent implements OnInit {
  title:string="Libro Mayor"
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
        idCuenta:'1.1.01.01.01.00',
        cuenta:'Caja',
        totalDebito:685600.11,
        totalCredito:10861.59,
        totalSaldo:674738.51,
        detalle:[
          {
            fecha:'01/01/2013',
            poliza:'Poliza-00101010100101',
            explicacion:'Registro de la partida de apertura',
            debito:685600.11,
            credito:0,
            saldo:685600.11
          },
          {
            fecha:'01/01/2013',
            poliza:'Ban-DEP-0001-000011',
            explicacion:'Regularizacion saldos de apertura',
            debito:0,
            credito:10861.59,
            saldo:674738.51
          }
        ]
      },
      {
        idCuenta:'1.1.01.01.01.00',
        cuenta:'Banco Industrial',
        totalDebito:10861.59,
        totalCredito:2468.14,
        totalSaldo:8393.45,
        detalle:[
          {
            fecha:'01/01/2013',
            poliza:'BAN-DEP-0001-00000000001',
            explicacion:'REGULARIZACION SALDOS DE APERTURA',
            debito:10861.59,
            credito:0,
            saldo:10861.59
          },
          {
            fecha:'01/01/2013',
            poliza:'CXP-CONT-0001007-C-758',
            explicacion:'0001007 MANGOMEDIA, S.A. fact. 2012',
            debito:0,
            credito:2468.14,
            saldo:8393.45
          }
        ]
      },
      {
        idCuenta:'1.1.02.01.02.00',
        cuenta:'CLIENTES DE AGENCIA',
        totalDebito:4990409.50,
        totalCredito:0,
        totalSaldo:4990409.50,
        detalle:[
          {
            fecha:'01/01/2013',
            poliza:'POLIZA-00000002013010',
            explicacion:'REGISTRO DE LA PARTIDA DE APERTURA, EFS AUDITADOS ',
            debito:4990409.50,
            credito:0,
            saldo:4990409.50
          }
        ]
      },
      {
        idCuenta:'1.1.03.01.01.00',
        cuenta:'IVA CREDITO',
        totalDebito:1035.68,
        totalCredito:0,
        totalSaldo:1035.68,
        detalle:[
          {
            fecha:'01/01/2013',
            poliza:'CXP-CONT-0000611-356',
            explicacion:'0000611 PRALUN, S.A. RENTA UCH-003 ENERO 2013',
            debito:445.11,
            credito:0,
            saldo:445.11
          },
          {
            fecha:'01/01/2013',
            poliza:'CXP-CONT-0001429-A-6',
            explicacion:'0001429 GABRIELA VICTORIA ROJAS HERRERA HONORARIOS',
            debito:590.57,
            credito:0,
            saldo:1035.68
          }
        ]
      },
      {
        idCuenta:'1.1.06.01.01.00',
        cuenta:'INVENTARIO MATERIALES',
        totalDebito:4477956.44,
        totalCredito:0,
        totalSaldo:4477956.44,
        detalle:[
          {
            fecha:'01/01/2013',
            poliza:'Poliza-00101010100101',
            explicacion:'REGISTRO DE LA PARTIDA DE APERTURA, EFS AUDITADOS 2012',
            debito:4477956.44,
            credito:0,
            saldo:4477956.44
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

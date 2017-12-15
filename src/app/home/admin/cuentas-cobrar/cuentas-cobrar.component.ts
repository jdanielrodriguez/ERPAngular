import { Component, OnInit } from '@angular/core';
import { CuentasCobrarService } from "./../_services/cuentas-cobrar.service";
import { MovimientosCobrarService } from "./../_services/movimientos-cobrar.service";

import { NotificationsService } from 'angular2-notifications';

declare var $: any

@Component({
  selector: 'app-cuentas-cobrar',
  templateUrl: './cuentas-cobrar.component.html',
  styleUrls: ['./cuentas-cobrar.component.css']
})
export class CuentasCobrarComponent implements OnInit {
  title:string="Cuentas Cobrar"
  Table:any = []
  selectedData:any
  idRol=+localStorage.getItem('currentRolId');
  Agregar = +localStorage.getItem('permisoAgregar')
  Modificar = +localStorage.getItem('permisoModificar')
  Eliminar = +localStorage.getItem('permisoEliminar')
  Mostrar = +localStorage.getItem('permisoMostrar')
  public rowsOnPage = 5;
  public search:any
  fechaHoy:any
  montoTotal:number
  constructor(
    private _service: NotificationsService,
    private mainService: CuentasCobrarService,
    private childService: MovimientosCobrarService
  ) { }

  ngOnInit() {
    this.getDate()
    this.cargarAll()
  }
  getDate(){
    let date = new Date();
    let month = date.getMonth()+1;
    let month2;
    let dia= date.getDate();
    let dia2;
    if(month<10){
      month2='0'+month;
    }else{
      month2=month
    }
    if(dia<10){
      dia2='0'+dia;
    }else{
      dia2=dia
    }
    this.fechaHoy= date.getFullYear()+'-'+month2+'-'+dia2
  }
  cargarAll(){
    $('#Loading').css('display','block')
    $('#Loading').addClass('in')
    this.mainService.getAll()
                      .then(response => {
                        this.Table.length=0
                        response.forEach(element => {
                          element.fecha = element.fecha.substring(0,10)
                          element.diasTrans = this.fechaHoy
                          var fechaInicio = new Date(element.fecha).getTime();
                          var fechaFin    = new Date(this.fechaHoy).getTime();

                          var diff = fechaFin - fechaInicio;
                          element.diasTrans = (diff/(1000*60*60*24))
                          this.Table.push(element)
                      });
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

  insertMov(formValue:any){
    formValue.saldo = formValue.credito-formValue.monto
    formValue.abono = formValue.monto
    // console.log(formValue);

    $('#Loading').css('display','block')
    $('#Loading').addClass('in')
    this.childService.create(formValue)
                      .then(response => {
                        // console.log(response);
                        this.selectedData = response;
                        // this.cargarSingle(response.cuentapagar)
                        console.clear
                        this.create('Sucursal Ingresado')
                        $('#Loading').css('display','none')
                        $('#movimiento-form')[0].reset()
                        this.getDate()
                        this.cargarAll()
                      }).catch(error => {
                        console.clear
                        this.createError(error)
                        $('#Loading').css('display','none')
                      })
  }

  cargarSingle(id:number){
    this.mainService.getSingle(id)
                      .then(response => {
                        // console.log(response);
                        this.selectedData = response;
                        this.selectedData.ventas.clientes.nombre = response.ventas.clientes.nombre+' '+response.ventas.clientes.apellido;
                        this.getDate()
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
    if(confirm("¿Desea Anular la Venta?")){
      this.mainService.update(formValue)
                        .then(response => {
                          this.cargarAll()
                          console.clear
                          this.create('Venta Anulada Exitosamente')
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

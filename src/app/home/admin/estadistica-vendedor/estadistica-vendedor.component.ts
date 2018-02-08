import { Component, OnInit } from '@angular/core';
import { EstadisticasService } from "./../_services/estadisticas.service";

import { NotificationsService } from 'angular2-notifications';

declare var $: any

@Component({
  selector: 'app-estadistica-vendedor',
  templateUrl: './estadistica-vendedor.component.html',
  styleUrls: ['./estadistica-vendedor.component.css']
})
export class EstadisticaVendedorComponent implements OnInit {
  title:string="Estadistica Vendedores"
  Table:any
  idRol=+localStorage.getItem('currentRolId');
  Agregar = +localStorage.getItem('permisoAgregar')
  Modificar = +localStorage.getItem('permisoModificar')
  Eliminar = +localStorage.getItem('permisoEliminar')
  Mostrar = +localStorage.getItem('permisoMostrar')
  selectedData:any
  public rowsOnPage = 5;
  public search:any
  fechaHoy:any
  fechaMes:any
  constructor(
    private _service: NotificationsService,
    private mainService: EstadisticasService
  ) { }
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartLabels:string[] = [];

  public barChartData:any[] = [
    {data:[],label:'Vacio'}
  ];

   public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
   public pieChartData:number[] = [300, 500, 100];
   public pieChartType:string = 'pie';

  ngOnInit() {
    this.getDate();
    this.cargarDias()
    this.cargarAll()
  }
  cargarDias(){
    let dias;
    let array:any = []
    this.barChartLabels.length = 0
    dias = this.fechaMes
    let fechaInicio = new Date(dias).getTime();
    let fechaFin    = new Date(this.fechaHoy).getTime();
    this.barChartLabels.length=0;
    let diff = fechaFin - fechaInicio;
    dias = (diff/(1000*60*60*24))
    var hoy = new Date(this.fechaMes);
    for(let i=1;i<=(dias+2);i++){
      var calculado = new Date(this.fechaMes);
      calculado.setDate(
        (hoy.getDate()) + i
      );
      let fecha = calculado.getFullYear() + '-' +(((calculado.getMonth() + 1)<10)?'0'+(calculado.getMonth() + 1):(calculado.getMonth() + 1)) + '-' + ((calculado.getDate()<10)?'0'+calculado.getDate():calculado.getDate());
      array.push(fecha)
    }

    this.barChartLabels = array

  }
  getDate(){
    let date = new Date();
    let month = date.getMonth()+1;
    let month2;
    let monthB = date.getMonth();
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
    this.fechaMes= date.getFullYear()+'-'+monthB2+'-'+dia2
  }
  cargarAll(){
    $('#Loading').css('display','block')
    $('#Loading').addClass('in')
    let data = {
      fechaInicio: this.fechaMes,
      fechaFin: this.fechaHoy
    }
    this.mainService.getBarVendedores(data)
                      .then(response => {
                        if(response){
                          response.forEach(element => {
                              let dat = []
                              this.barChartLabels.forEach(element2 => {
                                if(element2==element.fecha){
                                  dat.push(element.total)
                                }else{
                                  dat.push(0)
                                }
                              })
                            let clone = JSON.parse(JSON.stringify(this.barChartData));
                            clone[0].data=dat
                            clone[0].label = element.username
                            // clone.push({
                            //   data: dat,
                            //   label: element.username
                            // })
                            this.barChartData = clone;

                          });
                        }
                        console.log(this.barChartLabels);
                        console.log(this.barChartData)

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
                        this.create('Pago Ingresado')
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
                        this.create('Pago Actualizado exitosamente')
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
    if(confirm("¿Desea eliminar el Pago?")){
      this.mainService.delete(id)
                        .then(response => {
                          this.cargarAll()
                          console.clear
                          this.create('Pago Eliminado exitosamente')
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

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
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

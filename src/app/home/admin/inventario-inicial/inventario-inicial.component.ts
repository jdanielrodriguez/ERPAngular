import { Component, OnInit } from '@angular/core';
import { ProductosService } from "./../_services/productos.service";
import { InventarioService } from "./../_services/inventario.service";
import { TiposProductoService } from "./../_services/tipos-producto.service";
import { SucursalesService } from "./../_services/sucursales.service";

import { NotificationsService } from 'angular2-notifications';

declare var $: any
let prods = []
@Component({
  selector: 'app-inventario-inicial',
  templateUrl: './inventario-inicial.component.html',
  styleUrls: ['./inventario-inicial.component.css']
})
export class InventarioInicialComponent implements OnInit {
  title:string="Inventario Inicial"
  Table:any = []
  comboTiposProducto:any
  comboSucursalesProducto:any
  idRol=+localStorage.getItem('currentRolId');
  Agregar = +localStorage.getItem('permisoAgregar')
  Modificar = +localStorage.getItem('permisoModificar')
  Eliminar = +localStorage.getItem('permisoEliminar')
  Mostrar = +localStorage.getItem('permisoMostrar')
  precioClienteEs1:number
  precioDistribuidor1:number
  selectedData:any
  productos:any
  prod:any = {
    codigo:"",
    id:0,
    descripcion:"",
    nombre:"",
    tipo:'',
    marcaDes:''
  }
  public rowsOnPage = 5;
  public searchterm:any
  public search:any
  constructor(
    private _service: NotificationsService,
    private subParentService: SucursalesService,
    private ProductosService: ProductosService,
    private mainService: InventarioService,
    private parentService: TiposProductoService
  ) { }

  ngOnInit() {
    this.getProductos();
    this.cargarAll()
    this.cargarCombos()
    this.colapsse()
  }
  colapsse(){
    if($('.page-container').hasClass('page-navigation-toggled')){

    }else{
      $('.page-container').addClass('page-navigation-toggled page-container-wide')
      $('#navigations').addClass('x-navigation-minimized')
      $('#nav-bar-menu').css('display','none')
      $('.xn-openable').removeClass("active");
    }
  }
  async getProductos() {
    await this.ProductosService.getAll()
                        .then(element =>{
                          this.productos = element;
                        }).catch(error => {
                          console.log("Error adquirido");

                        })
  }
  seleccionarProd(data){
    this.prod=data
    this.prod.inventario.cantidad = 0
    this.searchterm=data.codigo
  }
  cargarAll(){
    $('#Loading').css('display','block')
    $('#Loading').addClass('in')
    this.mainService.getAll()
                      .then(response => {
                        this.Table.length = 0
                        let num:number=0
                        response.forEach(element => {
                          num++
                          element.correl = num
                          this.Table.push(element)
                        });
                        // console.log(this.Table);
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

  insert(formValue:any){
    $('#Loading').css('display','block')
    $('#Loading').addClass('in')
    console.log(formValue);
    formValue.id =this.prod.id
    {
    this.mainService.create(formValue)
                      .then(response => {
                        this.cargarAll()
                        console.clear
                        this.create('Rol Ingresado')
                        $('#Loading').css('display','none')
                        $('#insert-form')[0].reset()
                      }).catch(error => {
                        console.clear
                        if(error.status==402){
                          this.createError(error._body.substring(25,44))
                          $('#codigo').val('')
                          $('#codigo').focus()
                        }else{
                          this.createError(error)
                        }
                        $('#Loading').css('display','none')
                      })
                    }

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

  cargarCombos(){
    $('#Loading').css('display','block')
    $('#Loading').addClass('in')
    this.parentService.getAll()
                      .then(response => {
                        this.comboTiposProducto = response
                        console.clear
                      }).catch(error => {
                        console.clear
                        this.createError(error)
                        $('#Loading').css('display','none')
                      })
    this.subParentService.getAll()
                      .then(response => {
                        this.comboSucursalesProducto = response
                        console.clear
                      }).catch(error => {
                        console.clear
                        this.createError(error)
                        $('#Loading').css('display','none')
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
                        this.create('Inventario Actualizado exitosamente')
                        $('#Loading').css('display','none')
                      }).catch(error => {
                        console.clear
                        if(error.status==402){
                          this.createError(error._body.substring(25,44))
                          this.selectedData.productos.codigo = ''
                          $('#codigo').focus()
                        }else{
                          this.createError(error)
                        }
                        $('#Loading').css('display','none')
                      })

  }
  changeCalc(){
    this.selectedData.precioClienteEs    = this.selectedData.precioVenta-(this.selectedData.precioVenta*0.15)
    this.selectedData.precioDistribuidor = this.selectedData.precioVenta-(this.selectedData.precioVenta*0.20)
  }
  changeCalcMe(dat){
    this.precioClienteEs1 = dat-(dat*0.15)
    this.precioDistribuidor1 = dat-(dat*0.20)
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

import { Component, OnInit } from '@angular/core';
import { UsersService } from "./../_services/users.service";
import { EmployeesService } from "./../_services/employees.service";
import { RolesService } from "./../_services/roles.service";

import { NotificationsService } from 'angular2-notifications';

declare var $: any

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  title:string="Usuarios"
  Table:any
  selectedData:any
  parentCombo:any
  secondParentCombo:any
  public rowsOnPage = 5;
  public search:any
  constructor(
    private _service: NotificationsService,
    private mainService: UsersService,
    private parentService: EmployeesService,
    private secondParentService: RolesService
  ) { }

  ngOnInit() {
    this.cargarAll()
    this.cargarParentCombo()
    this.cargarSecondParentCombo()
  }

  cargarAll(){
    $('#Loading').css('display','block')
    $('#Loading').addClass('in')
    this.mainService.getAll()
                      .then(response => {
                        this.Table = response
                        $("#editModal .close").click();
                        $("#insertModal .close").click();
                        $('#Loading').css('display','none')
                        console.clear
                      }).catch(error => {
                        console.clear
                        this.createError(error)
                      })
  }

  cargarParentCombo(){
    this.parentService.getAll()
                      .then(response => {
                        this.parentCombo = response
                        console.clear
                      }).catch(error => {
                        console.clear
                        this.createError(error)
                      })
  }

  cargarSecondParentCombo(){
    this.secondParentService.getAll()
                      .then(response => {
                        this.secondParentCombo = response
                        console.clear
                      }).catch(error => {
                        console.clear
                        this.createError(error)
                      })
  }

  insert(formValue:any){
    $('#Loading').css('display','block')
    $('#Loading').addClass('in')
    let pass = this.generar(25)
    let data = {
      username: formValue.username,
      email: formValue.email,
      rol: formValue.rol,
      empleado: formValue.empleado,
      privileges: formValue.privileges,
      password: pass,
    }
    this.mainService.create(data)
                      .then(response => {
                        this.cargarAll()
                        console.clear
                        this.create('Evento Ingresado')
                        $('#Loading').css('display','none')
                        $('#insert-form')[0].reset()

                      }).catch(error => {
                        console.clear
                        this.createError(error)
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
                        this.create('Evento Actualizado exitosamente')
                        $('#Loading').css('display','none')
                      }).catch(error => {
                        console.clear
                        this.createError(error)
                      })

  }

  delete(id:string){
    $('#Loading').css('display','block')
    $('#Loading').addClass('in')
    this.mainService.delete(id)
                      .then(response => {
                        this.cargarAll()
                        console.clear
                        this.create('Evento Eliminado exitosamente')
                        $('#Loading').css('display','none')
                      }).catch(error => {
                        console.clear
                        this.createError(error)
                      })

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

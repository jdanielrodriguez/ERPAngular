import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";

import { NotificationsService } from 'angular2-notifications';

declare var $: any

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user=localStorage.getItem('currentUser');
  firstname=localStorage.getItem('currentFirstName');
  lastname=localStorage.getItem('currentLastName');
  picture=localStorage.getItem('currentPicture');
  id=localStorage.getItem('currentId');
  type=localStorage.getItem('currentType');
  state=localStorage.getItem('currentState');
  click:boolean
  notifications:any = []
  nNotifications:number = 0;
  constructor(
    private _service: NotificationsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    if(this.state=='2'){
      $('#ChangePass').modal();
    }
    if(this.type=="tutor"){
      this.cargarNotifications();
    }
  }
  abrir(obj){
    if(obj.classList[1]=='active'){
      obj.classList.remove("active");
    }else{
      obj.classList.add("active");
      if($('.page-container').hasClass('page-navigation-toggled')){
        $('.page-container').removeClass('page-navigation-toggled page-container-wide')
        $('#navigations').removeClass('x-navigation-minimized')
        $('.fa-indent').addClass('fa-dedent')
        $('.fa-dedent').removeClass('fa-indent')
      }
    }
  }
  colapsse(){
    if($('.page-container').hasClass('page-navigation-toggled')){
      $('.page-container').removeClass('page-navigation-toggled page-container-wide')
      $('#navigations').removeClass('x-navigation-minimized')
      $('.fa-indent').addClass('fa-dedent')
      $('.fa-dedent').removeClass('fa-indent')
    }else{
      $('.page-container').addClass('page-navigation-toggled page-container-wide')
      $('#navigations').addClass('x-navigation-minimized')
      $('.fa-dedent').addClass('fa-indent')
      $('.fa-indent').removeClass('fa-dedent')
      $('.xn-openable').removeClass("active");
    }
  }

  cargarNotifications()
  {
    this.nNotifications=0;
    this.notifications.length =0;
    let id=localStorage.getItem('currentIdTutor');
    // this.notificationsService.getTutorAll(+id)
    //                   .then(response => {
    //                     response.forEach(element => {
    //                       if(element.state==3){
    //                         this.nNotifications++;
    //                       }
    //                       if(element.state>=2){
    //                         this.notifications.push(element);
    //                       }
    //                     });
    //                     console.clear
    //                   }).catch(error => {
    //                     console.clear
    //                     this.createError(error)

    //                     $('#Loading').css('display','none')
    //                   })
  }
  updateNotifications(){
    let id=localStorage.getItem('currentIdTutor');
    let form:any = {
      id: id,
      state: 2
    }
    // this.notificationsService.updateByTutor(form)
    //                     .then(response => {
    //                       this.cargarNotifications();
    //                       console.clear
    //                     }).catch(error => {
    //                       console.clear
    //                       this.createError(error)

    //                       $('#Loading').css('display','none')
    //                     })
  }

  updateNotification(id){
    let form:any = {
      id: id,
      state: 1
    }
    // this.notificationsService.update(form)
    //                     .then(response => {
    //                       this.cargarNotifications();
    //                       console.clear
    //                     }).catch(error => {
    //                       console.clear
    //                       this.createError(error)

    //                       $('#Loading').css('display','none')
    //                     })
  }

  updatePass(formValue:any){
    $('#Loading').css('display','block')
    $('#Loading').addClass('in')



    let data = {
      id: this.id,
      old_pass: formValue.old_pass,
      new_pass: formValue.new_pass,
      new_pass_rep: formValue.new_pass2
    }
    //console.log(data)
    // this.userService.updatePass(data)
    //                   .then(response => {
    //                     console.clear
    //                     this.create('Usuario Actualizado exitosamente')
    //                     $('#Loading').css('display','none')
    //                     $("#ChangePass .close").click();
    //                     $('#passChange-form')[0].reset()

    //                   }).catch(error => {
    //                     console.clear
    //                     this.createError(error)

    //                     $('#Loading').css('display','none')
    //                   })

  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentEmail');
    localStorage.removeItem('currentFirstName');
    localStorage.removeItem('currentLastName');
    localStorage.removeItem('currentId');
    localStorage.removeItem('currentType');
    location.reload();
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

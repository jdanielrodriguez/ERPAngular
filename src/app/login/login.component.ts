import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { AuthService } from "./../_services/auth.service";

import { NotificationsService } from 'angular2-notifications';

declare var $: any

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
auth:any
closeResult: string;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private _service: NotificationsService) { }

    public options = {
    position: ["bottom", "right"],
    timeOut: 3000,
    showProgressBar: false,
    pauseOnHover: true,
    clickToClose: true,
    lastOnBottom: false,
    preventDuplicates: true,
    animate: "scale",
    maxLength: 400
  };

  create(text) {
         this._service.error('Error!','Ha ocurrido un error.'+text)

  }

  login(formValue:any){
   //console.log(`user: ${formValue.username} pass: ${formValue.password}`)

   $('#Loading').css('display','block')
   $('#Loading').addClass('in')

    this.authenticationService.Authentication(formValue)
      .then(response => {
        this.auth = response

        // console.log(response.username)
        let type:string = null;
        localStorage.setItem('currentUser', response.username);
        localStorage.setItem('currentEmail', response.email);
        localStorage.setItem('currentFirstName', response.firstname);
        localStorage.setItem('currentLastName', response.lastname);
        localStorage.setItem('currentId', response.id);
        localStorage.setItem('currentPicture', response.picture);
        localStorage.setItem('currentState', response.state);

        switch(response.type){
          case 1:{
            type = 'usuario';
            break;
          }
          case 2:{
            type = 'cliente';
            break;
          }
          case 3:{
            type = 'empresa';
            break;
          }
          case 4:{
            type = 'admin';
            break;
          }
        }

        localStorage.setItem('currentType', type);
        // console.log(type)
        console.clear
        this.router.navigate([`home/${type}`])
      }).catch(error => {
        console.clear
        $('#Loading').css('display','none')

        this.create(error)

      })


  }
  ngOnInit() {
  }

}

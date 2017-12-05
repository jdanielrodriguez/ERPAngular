import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { AuthService } from "./../_services/auth.service";

import { NotificationsService } from 'angular2-notifications';

declare var $: any

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {
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

    create(success) {
                this._service.success('¡Éxito!',success)

    }
    createError(error) {
                this._service.error('¡Error!',error)

    }
    login(formValue:any){
     //console.log(`user: ${formValue.username} pass: ${formValue.password}`)

     $('#Loading').css('display','block')
     $('#Loading').addClass('in')

      this.authenticationService.recovery(formValue)
        .then(response => {
          $('#Loading').css('display','none')
          this.create('En breve le llegara un correo con su nueva contraseña')
          $('#login-form')[0].reset()
        }).catch(error => {
          console.clear
     $('#Loading').css('display','none')

          this.createError(error)

        })


    }
    ngOnInit() {
    }

  }


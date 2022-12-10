import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from '../../../domain/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validUser : boolean = true;
  validPassword : boolean = true;
  serviceError : boolean = false;
  error : Error = {
    name:"",
    message: ""
  };

  constructor(private router : Router, private authService : AuthService) { }

  ngOnInit(): void {
  }

  onsubmit(loginForm : NgForm){
    this.verifyLoginErrors(loginForm);
    if(loginForm.valid){
      let usuario : Usuario = {
        id:0,
        email:loginForm.value.username,
        password:loginForm.value.password,
        nombre:"",
      };
      /*this.authService.auth(usuario).subscribe({
        complete: () => {
          //ToDo: Login session logic
        },
        error: (err : HttpErrorResponse) => {
          this.serviceError = true;
          this.error = this.authService.handleError(err);
        }
      });*/
      this.router.navigateByUrl("home/main");
    }
  }

  backToMain(){
    this.router.navigateByUrl("/");
  }

  verifyLoginErrors(loginForm : NgForm){
    this.validPassword = loginForm.controls["password"]?.valid;
    this.validUser = loginForm.controls["username"]?.valid;
  }
}

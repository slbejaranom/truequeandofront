import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { autenticacionDTO } from 'src/app/domain/autenticacionDTO';
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

  constructor(private router : Router, private authService : AuthService) { 
    localStorage.clear();
  }

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
      this.authService.auth(usuario).subscribe({
        next: (data : autenticacionDTO) => {
          //ToDo: Login session logic
          if(data.errorMessage != null){
            this.serviceError = true;
            this.error.message = data.errorMessage;                
          }
          else{     
            console.log(localStorage);             
            localStorage.clear();
            localStorage.setItem("accessToken", data.token);
            let tokenArgs = atob(data.token).split(":"); 
            switch(tokenArgs[1]){
              case "0":
                break;
              case "1":
                this.router.navigateByUrl("home/main");
                break;
              case "2":
                this.router.navigateByUrl("home/olmain");
                break;
            }            
          }
          
        },
        error: (err : HttpErrorResponse) => {
          this.serviceError = true;
          this.error = this.authService.handleError(err);
        }
      });      
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

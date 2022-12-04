import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/domain/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { Departamento } from './departamento';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  URL_MUNICIPIOS_DEPTOS = "https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json";

  validUser : boolean = true;
  validPassword : boolean = true;
  validNombre : boolean = true;
  validApellido : boolean = true;
  validDireccion : boolean = true;
  serviceError : boolean = false;  
  departamentos : Departamento[] = [];
  ciudades : string[] = [];
  error : Error = {
    name:"",
    message: ""
  };

  constructor(private router : Router, private authService : AuthService, private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<any>(this.URL_MUNICIPIOS_DEPTOS).subscribe({
      next : (data) => {
        this.departamentos = data;
        this.ciudades = this.departamentos[0].ciudades;
      },
      error : (error : HttpErrorResponse) => {
        this.serviceError = true;
        this.error = this.authService.handleError(error);
      }
    });
  }

  onsubmit(registerForm : NgForm){
    if(registerForm.valid){
      let usuario : Usuario = {
        id:0,
        email:registerForm.value.username,
        password:registerForm.value.password,
        nombre:"",
      };
      this.authService.auth(usuario).subscribe({
        complete: () => {
          //ToDo: Login session logic
        },
        error: (err : HttpErrorResponse) => {
          this.serviceError = true;
          this.error = this.authService.handleError(err);
        }
      });
    }
    else{
      this.verifyLoginErrors(registerForm);
    }
  }

  backToMain(){
    this.router.navigateByUrl("/");
  }

  verifyLoginErrors(loginForm : NgForm){
    this.validPassword = loginForm.controls["password"]?.valid;
    this.validUser = loginForm.controls["username"]?.valid;
  }

  onSelectDepartamento(idDepartamento : string){
    this.ciudades = this.departamentos[Number(idDepartamento)].ciudades;
    console.log(this.ciudades);
  }
}

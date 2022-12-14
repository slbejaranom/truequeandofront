import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/domain/cliente';
import { AuthService } from 'src/app/services/auth.service';
import { Departamento } from './dto/departamento';
import { ErrorDTO } from './dto/errorDto';

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
  validTelefono : boolean = true;  
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
    this.verifyLoginErrors(registerForm);
    if(registerForm.valid){      
      let usuario : Cliente = {
        email:registerForm.value.username,
        password:registerForm.value.password,
        nombre:registerForm.value.nombre +" "+registerForm.value.apellido,
        departamento: registerForm.value.departamentoSelect,
        municipio: registerForm.value.municipioSelect,
        direccion: registerForm.value.direccion
      };
      this.authService.register(usuario).subscribe({
        next: (data) => {
          if(data.id){
            this.router.navigateByUrl("/");
          }
          else if(data.mensaje){
            console.log(data);            
            this.error.message = data.mensaje;
            this.serviceError = true;
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

  verifyLoginErrors(registerForm : NgForm){
    this.validPassword = registerForm.controls["password"]?.valid;
    this.validUser = registerForm.controls["username"]?.valid;
    this.validApellido = registerForm.controls["apellido"]?.valid;
    this.validNombre = registerForm.controls["nombre"]?.valid;
    this.validDireccion = registerForm.controls["direccion"]?.valid;
    this.validTelefono = registerForm.controls["telefono"]?.valid;
  }

  onSelectDepartamento(idDepartamento : string){
    this.ciudades = this.departamentos[Number(idDepartamento)].ciudades;
  }
}

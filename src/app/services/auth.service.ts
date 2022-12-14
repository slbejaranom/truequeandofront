import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Usuario } from '../domain/usuario';
import { environment } from 'src/environments/environment';
import { Cliente } from '../domain/cliente';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly AUTH_URL : string = environment.rutaBase+"/autenticarusuario";
  private readonly REGISTER_URL : string = environment.rutaBase+"/registrarusuario";

  constructor(private httpClient : HttpClient) { }

  auth(usuario : Usuario){
    return this.httpClient.post<any>(this.AUTH_URL,usuario);
  }

  register(cliente : Cliente){
    return this.httpClient.post<any>(this.REGISTER_URL, cliente)
  }

  handleError(error : HttpErrorResponse):Error{
    let resError : Error = {
      name : "",
      message : ""
    }
    switch(error.status){
      case 404:
        resError.name="404",
        resError.message="No se encuentra el recurso en la URL";
        break;
      case 500:
        resError.name="500",
        resError.message="Error del servidor";
        break;
    }
    return resError;
  }
}

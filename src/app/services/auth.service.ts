import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Usuario } from '../domain/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly AUTH_URL : string = "";

  constructor(private httpClient : HttpClient) { }

  auth(usuario : Usuario){
    return this.httpClient.post<Usuario>(this.AUTH_URL,usuario);
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

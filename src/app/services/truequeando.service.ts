import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const RUTA_LISTAR_OBJETOS_USUARIOS : string = environment.rutaBase+"/listarelementosusuario";
const RUTA_LISTAR_TRUEQUES_HECHOS_POR_USUARIO : string = environment.rutaBase+"/truequeshechosusuario";
const RUTA_LISTAR_TRUEQUES_HECHOS_A_USUARIO : string = environment.rutaBase+"/truequesrecibidosusuario";
const REQUEST_HEADERS : HttpHeaders = new HttpHeaders({
  'Authorization':'Bearer '+localStorage.getItem("accessToken")
});
@Injectable({
  providedIn: 'root'
})
export class TruequeandoService { 
  

  constructor(private httpClient : HttpClient) { }
  
  listarObjetosUsuario(email : string){
    return this.httpClient.get(
      RUTA_LISTAR_OBJETOS_USUARIOS,
      {
        headers: REQUEST_HEADERS,
        params:{
          email
        }
      })
  }

  listarTruequesHechosPorUsuario(email : string){
    return this.httpClient.get(
      RUTA_LISTAR_TRUEQUES_HECHOS_POR_USUARIO,
      {
        headers: REQUEST_HEADERS,
        params:{
          email
        }
      })
  }
  listarTruequesHechosAUsuario(email : string){
    return this.httpClient.get(
      RUTA_LISTAR_TRUEQUES_HECHOS_A_USUARIO,
      {
        headers: REQUEST_HEADERS,
        params:{
          email
        }
      })
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
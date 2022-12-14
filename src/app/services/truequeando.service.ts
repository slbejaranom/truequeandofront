import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Elemento } from '../domain/elemento';
import { Trueque } from '../domain/trueque';

const RUTA_LISTAR_OBJETOS_USUARIOS : string = environment.rutaBase+"/listarelementosusuario";
const RUTA_LISTAR_TRUEQUES_HECHOS_POR_USUARIO : string = environment.rutaBase+"/truequeshechosusuario";
const RUTA_LISTAR_TRUEQUES_HECHOS_A_USUARIO : string = environment.rutaBase+"/truequesrecibidosusuario";
const RUTA_LISTAR_CATEGORIAS : string = environment.rutaBase+"/listarcategoria";
const RUTA_REGISTRAR_OBJETO : string = environment.rutaBase+"/registrarobjeto";
const RUTA_LISTAR_OBJETOS_OTROS_USUARIOS : string = environment.rutaBase+"/listarobjetosotrosusuarios";
const RUTA_HACER_PROPUESTA_TRUEQUE : string = environment.rutaBase+"/propuestatrueque";
const RUTA_ACEPTAR_TRUEQUE : string = environment.rutaBase+"/aceptartrueque";
const RUTA_RECHAZAR_TRUEQUE : string = environment.rutaBase+"/rechazartrueque";
const RUTA_LISTAR_TRUEQUES_ACEPTADOS : string = environment.rutaBase+"/listartruequesaceptados";
const RUTA_CERRAR_TRUEQUE : string = environment.rutaBase+"/cerrartrueque";
const RUTA_API_MAPAS : string = "http://api.positionstack.com/v1/forward";
const access_key : string = "1f139fb886de2c677c149b1a90c83c2f";

@Injectable({
  providedIn: 'root'
})
export class TruequeandoService { 
  REQUEST_HEADERS : HttpHeaders = new HttpHeaders({
    'Authorization':'Bearer '+localStorage.getItem("accessToken")
  });

  constructor(private httpClient : HttpClient) { }
  
  listarObjetosUsuario(email : string){    
    return this.httpClient.get(
      RUTA_LISTAR_OBJETOS_USUARIOS,
      {
        headers: this.REQUEST_HEADERS,
        params:{
          email
        }
      })
  }

  listarObjetosOtrosUsuarios(email : string){    
    return this.httpClient.get(
      RUTA_LISTAR_OBJETOS_OTROS_USUARIOS,
      {
        headers: this.REQUEST_HEADERS,
        params:{
          email
        }
      })
  }

  hacerPropuestaTrueque(trueque : Trueque){
    return this.httpClient.post(
      RUTA_HACER_PROPUESTA_TRUEQUE,
      trueque,
      {
        headers: this.REQUEST_HEADERS        
      })
  }

  listarTruequesHechosPorUsuario(email : string){
    return this.httpClient.get(
      RUTA_LISTAR_TRUEQUES_HECHOS_POR_USUARIO,
      {
        headers: this.REQUEST_HEADERS,
        params:{
          email
        }
      })
  }
  listarTruequesHechosAUsuario(email : string){
    return this.httpClient.get(
      RUTA_LISTAR_TRUEQUES_HECHOS_A_USUARIO,
      {
        headers: this.REQUEST_HEADERS,
        params:{
          email
        }
      })
  }

  listarCategorias(){
    return this.httpClient.get(
      RUTA_LISTAR_CATEGORIAS,
      {
        headers: this.REQUEST_HEADERS
      })
  }

  registrarObjeto(objeto : Elemento){
    return this.httpClient.post<Elemento>(RUTA_REGISTRAR_OBJETO,objeto,{
      headers: this.REQUEST_HEADERS
    })
  }

  aceptarTrueque(trueque : Trueque){
    return this.httpClient.put<Trueque>(
      RUTA_ACEPTAR_TRUEQUE,
      trueque,
      {
        headers: this.REQUEST_HEADERS
      });
  }

  rechazarTrueque(trueque : Trueque){
    return this.httpClient.put<Trueque>(
      RUTA_RECHAZAR_TRUEQUE,
      trueque,
      {
        headers: this.REQUEST_HEADERS
      });
  }

  cerrarTrueque(trueque : Trueque){
    return this.httpClient.put<Trueque>(
      RUTA_CERRAR_TRUEQUE,
      trueque,
      {
        headers: this.REQUEST_HEADERS
      });
  }

  listarTruequesAceptados(){
    return this.httpClient.get(
      RUTA_LISTAR_TRUEQUES_ACEPTADOS,
      {
        headers: this.REQUEST_HEADERS
      });
  }

  async calcularDistancia(trueque:Trueque){
    let departamentoUsuario1 = trueque.usuario1.departamento;
    let municipioUsuario1 = trueque.usuario1.municipio;
    let departamentoUsuario2 = trueque.usuario2.departamento;
    let municipioUsuario2 = trueque.usuario2.municipio;
    let respuestaUsuario1 = await firstValueFrom(this.httpClient.get(RUTA_API_MAPAS,{
      params : {
        access_key,
        query : municipioUsuario1 +","+departamentoUsuario1
      }
    })) as any;
    let respuestaUsuario2 = await firstValueFrom(this.httpClient.get(RUTA_API_MAPAS,{
      params : {
        access_key,
        query : municipioUsuario2 +","+departamentoUsuario2
      }
    })) as any;
    respuestaUsuario1=respuestaUsuario1.data.pop();
    respuestaUsuario2=respuestaUsuario2.data.pop();
    let latitudUsuario1 = respuestaUsuario1.latitude as number;
    let longitudUsuario1 = respuestaUsuario1.longitude as number;
    let latitudUsuario2 = respuestaUsuario2.latitude as number;
    let longitudUsuario2 = respuestaUsuario2.longitude as number;

    let distancia = Math.sqrt(Math.pow(longitudUsuario1-longitudUsuario2,2)+Math.pow(latitudUsuario1-latitudUsuario2,2)) as number;
    return distancia;
  }

  async calcularPrecio(trueque:Trueque){
    let distancia = await this.calcularDistancia(trueque) as number;
    let volumenObjeto1 = trueque.elemento1.altura*trueque.elemento1.anchura*trueque.elemento1.longitud as number;
    let volumenObjeto2 = trueque.elemento2.altura*trueque.elemento2.anchura*trueque.elemento2.longitud as number; 
    if(trueque.transportador&&trueque.transportador.precioMetroCubico&&trueque.transportador.precioKilogramo&&trueque.transportador.precioKilometro){
      if(distancia==0){
        return (volumenObjeto1+volumenObjeto2)*trueque.transportador.precioMetroCubico + trueque.transportador.precioKilogramo*(trueque.elemento1.peso+trueque.elemento2.peso)+10000;
      }  
      return (volumenObjeto1+volumenObjeto2)*trueque.transportador.precioMetroCubico + trueque.transportador.precioKilogramo*(trueque.elemento1.peso+trueque.elemento2.peso)+(trueque.transportador.precioKilometro*distancia*111);
    }
    return -1;
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
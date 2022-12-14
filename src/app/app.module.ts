import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { MenuComponent } from './components/principal/menu/menu.component';
import { IntroComponent } from './components/principal/intro/intro.component';
import { LoginComponent } from './components/principal/login/login.component';
import { RegisterComponent } from './components/principal/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { MenuHomeComponent } from './components/home/menu-home/menu-home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TruequesComponent } from './components/home/trueques/trueques.component';
import { ListaObjetosComponent } from './components/home/trueques/lista-objetos/lista-objetos.component';
import { ObjetoComponent } from './components/home/trueques/lista-objetos/objeto/objeto.component';
import { PropuestasHechasComponent } from './components/home/trueques/propuestas-hechas/propuestas-hechas.component'
import { MatTableModule } from '@angular/material/table'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PropuestasRecibidasComponent } from './components/home/trueques/propuestas-recibidas/propuestas-recibidas.component'
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { RechazarPropuestaComponent } from './components/home/trueques/propuestas-recibidas/rechazar-propuesta/rechazar-propuesta.component';
import { AceptarPropuestaComponent } from './components/home/trueques/propuestas-recibidas/aceptar-propuesta/aceptar-propuesta.component';
import { MainComponent } from './components/home/main/main.component';
import { RegistrarobjetoComponent } from './components/home/trueques/lista-objetos/registrarobjeto/registrarobjeto.component';
import { FiltroObjetosComponent } from './components/home/main/filtro-objetos/filtro-objetos.component';
import { FiltroComponent } from './components/home/main/filtro-objetos/filtro/filtro.component';
import { ObjetosFiltradosComponent } from './components/home/main/filtro-objetos/objetos-filtrados/objetos-filtrados.component';
import {MatSliderModule} from '@angular/material/slider';
import { ModalPropuestaTruequeComponent } from './components/home/main/modal-propuesta-trueque/modal-propuesta-trueque.component';
import { EstadoAString } from './components/home/trueques/propuestas-hechas/pipe/estadoPipe';
import { MainOperadorLogisticoComponent } from './components/home/main-operador-logistico/main-operador-logistico.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    MenuComponent,
    IntroComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MenuHomeComponent,
    NotFoundComponent,
    TruequesComponent,
    ListaObjetosComponent,
    ObjetoComponent,
    PropuestasHechasComponent,
    PropuestasRecibidasComponent,
    RechazarPropuestaComponent,
    AceptarPropuestaComponent,
    MainComponent,
    RegistrarobjetoComponent,
    FiltroObjetosComponent,
    FiltroComponent,
    ObjetosFiltradosComponent,
    ModalPropuestaTruequeComponent,
    EstadoAString,
    MainOperadorLogisticoComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

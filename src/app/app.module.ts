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
import { LandingComponent } from './components/home/landing/landing.component';
import { ListaObjetosComponent } from './components/home/landing/lista-objetos/lista-objetos.component';
import { ObjetoComponent } from './components/home/landing/lista-objetos/objeto/objeto.component';
import { PropuestasHechasComponent } from './components/home/landing/propuestas-hechas/propuestas-hechas.component'
import { MatTableModule } from '@angular/material/table'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PropuestasRecibidasComponent } from './components/home/landing/propuestas-recibidas/propuestas-recibidas.component'
import { MatPaginatorModule } from '@angular/material/paginator';

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
    LandingComponent,
    ListaObjetosComponent,
    ObjetoComponent,
    PropuestasHechasComponent,
    PropuestasRecibidasComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,    
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

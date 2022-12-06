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
import { ObjetoComponent } from './components/home/landing/lista-objetos/objeto/objeto.component'

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
    ObjetoComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainOperadorLogisticoComponent } from './components/home/main-operador-logistico/main-operador-logistico.component';
import { MainComponent } from './components/home/main/main.component';
import { TruequesComponent } from './components/home/trueques/trueques.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { IntroComponent } from './components/principal/intro/intro.component';
import { LoginComponent } from './components/principal/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RegisterComponent } from './components/principal/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { RolGuard } from './guards/rol.guard';

const routes: Routes = [
  {
    path: "",
    component: PrincipalComponent,
    children: [
      {
        path: "",
        component: IntroComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "register",
        component: RegisterComponent
      }
    ]
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard, RolGuard],
    children:[
      {
        path: "trueques",
        component: TruequesComponent
      },
      {
        path: "main",
        component: MainComponent
      },
      {
        path: "olmain",
        component: MainOperadorLogisticoComponent
      }
    ]
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

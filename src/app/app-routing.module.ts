import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './components/principal/intro/intro.component';
import { LoginComponent } from './components/principal/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RegisterComponent } from './components/principal/register/register.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from '../../../domain/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router, private authService : AuthService) { }

  ngOnInit(): void {
  }

  onsubmit(loginForm : NgForm){
    if(loginForm.valid){
      let usuario : Usuario = {
        id:0,
        email:loginForm.value.username,
        password:loginForm.value.password,
        nombre:"",
      };
      this.authService.auth(usuario).subscribe({
        complete: () => {
          //ToDo: Login session logic
        },
        error: () => {

        }
      });
    }
    else{

    }
  }

  backToMain(){
    this.router.navigateByUrl("/");
  }
}

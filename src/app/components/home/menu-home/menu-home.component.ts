import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-home',
  templateUrl: './menu-home.component.html',
  styleUrls: ['./menu-home.component.scss']
})
export class MenuHomeComponent implements OnInit {

  opciones = [
    {
      ruta: "main",
      texto: "Principal"
    },
    {
      ruta: "trueques",
      texto: "Trueques"
    }
  ];

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  salir(){
    localStorage.clear();
    this.router.navigateByUrl("/");
  }
}

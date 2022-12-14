import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-home',
  templateUrl: './menu-home.component.html',
  styleUrls: ['./menu-home.component.scss']
})
export class MenuHomeComponent implements OnInit {

  @Input() opciones : any[];

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  salir(){
    localStorage.clear();
    this.router.navigateByUrl("/");
  }
}

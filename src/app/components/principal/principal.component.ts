import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  validUser : boolean = true;
  validPassword : boolean = true;
  serviceError : boolean = false;
  error : Error = {
    name:"",
    message: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

}

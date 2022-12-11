import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Trueque } from 'src/app/domain/trueque';

@Component({
  selector: 'app-propuestas-hechas',
  templateUrl: './propuestas-hechas.component.html',
  styleUrls: ['./propuestas-hechas.component.scss']
})


export class PropuestasHechasComponent implements OnInit, OnChanges{
  @Input() trueques : Trueque[];

  displayedColumns: string[] = ['id', 'fecha', 'elemento1', 'elemento2', 'usuario2', 'estado'];    
  dataSource = new Array<Trueque>;
  constructor() {

  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(this.trueques != undefined)
      this.dataSource = this.trueques;
  }

  ngOnInit(): void {

  }
}

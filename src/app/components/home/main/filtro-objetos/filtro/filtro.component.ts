import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/domain/categoria';
import { Elemento } from 'src/app/domain/elemento';
import { TruequeandoService } from 'src/app/services/truequeando.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit , OnChanges{

  @Input() elementosSinFiltrar : Elemento[];
  @Output() newFiltradoEvent = new EventEmitter<Elemento[]>();
  precioMaximo:number=5000000;
  elementosFiltrados : Elemento[];
  categoriaSeleccionada:string;
  categorias : Categoria[];

  constructor(private router : Router, private truequeandoService : TruequeandoService) {
    this.listarCategorias();
  }

  ngOnInit(): void {
  }
  ngOnChanges(): void{
    if(this.elementosSinFiltrar){
      this.filtrar();
    }
  }
  filtrar(){
    if(this.categoriaSeleccionada == undefined){
      this.elementosFiltrados = this.elementosSinFiltrar.filter(elemento => {
        return elemento.valor < this.precioMaximo;        
      });        
      this.newFiltradoEvent.emit(this.elementosFiltrados);
      return;
    }
    this.elementosFiltrados = this.elementosSinFiltrar.filter(elemento => {
      return elemento.valor < this.precioMaximo && elemento.categoria.descripcion == this.categoriaSeleccionada        
    });
    this.newFiltradoEvent.emit(this.elementosFiltrados);
  }

  async listarCategorias(){
    try{
      this.categorias = await firstValueFrom(this.truequeandoService.listarCategorias()) as Categoria[];
    }catch(err){
      console.log(err);
      this.router.navigateByUrl("/");
    }
  }
}

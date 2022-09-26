import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egresos/egresos.model';
import { EgresoService } from '../egresos/egresos.service';
import { Ingreso } from '../ingresos/ingresos.model';
import { IngresoService } from '../ingresos/ingresos.servicio';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  tipo: string = 'ingresoOperacion';
  descripcionInput: string = '';
  valorInput: number = 0;

  constructor(
    private ingresoService: IngresoService, 
    private egresoService: EgresoService
  ) {}

  ngOnInit(): void {}

  tipoOperacion(evento: any){
    this.tipo = evento.target.value;
  }

  agregarValor(){
    if (this.tipo === 'ingresoOperacion')
      this.ingresoService.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    else 
      this.egresoService.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
  }
}

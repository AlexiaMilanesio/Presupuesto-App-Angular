import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egresos.model';
import { EgresoService } from './egresos.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {
  egresos: Egreso[] = [];

  @Input() ingresoTotal: number = 0;

  constructor(private egresoServicio: EgresoService) {}

  ngOnInit(): void {
    this.egresos = this.egresoServicio.egresos;
  }

  eliminarEgreso(egreso: Egreso){
    this.egresoServicio.eliminar(egreso);
  }

  calcularPorcentaje(egreso: Egreso){
    return egreso.valor / this.ingresoTotal;
  }
}
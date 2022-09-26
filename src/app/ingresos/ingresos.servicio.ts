import { Ingreso } from "./ingresos.model";

export class IngresoService {
    ingresos: Ingreso[] = [
        new Ingreso('Salario', 4000),
        new Ingreso('Venta auto', 500)
    ];

    eliminar(ingreso: Ingreso){
        const indice: number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice, 1);
    }
}
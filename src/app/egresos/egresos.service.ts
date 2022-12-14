import { Egreso } from "./egresos.model";

export class EgresoService {
    egresos: Egreso[] = [
        new Egreso('Renta dpto', 900),
        new Egreso('Ropa', 200)
    ];

    eliminar(egreso: Egreso){
        const indice: number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice, 1);
    }
}
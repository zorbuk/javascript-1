console.clear();

const cuentaA = {
    cliente: 'Perico',
    ingresos: Array(),
    gastos: Array(),
    calcularBalance:function(){
        let ingresosTotales = 0;
        let gastosTotales = 0;

        for (let index = 0; index < this.ingresos.length; index++) {
            ingresosTotales += this.ingresos[index].monto;
        }
        for (let index = 0; index < this.ingresos.length; index++) {
            gastosTotales += this.gastos[index].monto;
        }

        //return `Se ha ingresado un total de ${ingresosTotales}€, se han gastado un total de ${gastosTotales}.`;
        return ingresosTotales-gastosTotales;
    }
}

cuentaA.gastos.push(
    {
        concepto:'Z', 
        monto: 50.25
    }
);
cuentaA.gastos.push(
    {
        concepto:'X', 
        monto: 28.14
    }
);
cuentaA.gastos.push(
    {
        concepto:'Y', 
        monto: 85.99
    }
);

cuentaA.ingresos.push(
    {
        concepto:'A', 
        monto: 199.50
    }
);
cuentaA.ingresos.push(
    {
        concepto:'B', 
        monto: 4.50
    }
);
cuentaA.ingresos.push(
    {
        concepto:'C', 
        monto: 29.50
    }
);

console.log(`Balance de la cuentaA: ${cuentaA.calcularBalance()}€`);
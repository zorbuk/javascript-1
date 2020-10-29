/* CONSOLE CLEAR BEFORE EXECUTE */
console.clear();

/* PROGRAM CODE */
const saludo = `Buenos días, mundo!`;

// const no se puede reasignar, let si.
// const debe asignarse siempre, let no.

console.log(`Recibiendo el saludo: ${saludo}`);

const Mesa = { Madera: `Haya`, Patas: 4, Altura: 22.5, Unidades: `Centimetros`, esNueva: true, Autor: `Enrique Puig` };
for (var key in Mesa) {
    console.log(`'${key}' con valor '${Mesa[key]}' del tipo '${typeof Mesa[key]}'.`);
};

{
    const Mesa = { Madera: `Roble`, Patas: 4, Altura: 22.5, Unidades: `Centimetros`, esNueva: true, Autor: `Enrique Puig` };
    for (var key in Mesa) {
        console.log(`'${key}' con valor '${Mesa[key]}' del tipo '${typeof Mesa[key]}'.`);
    };
};

const calcularDiametro = function (perimetro) {
    if (typeof perimetro === `number`) {
        return perimetro / Math.PI;
    }
    return null;
};

const diametro = calcularDiametro(80);
console.log(`${diametro}`);


const Calculo = {
    Suma: function (a, b) {
        return a + b;
    },
    Resta: function (a, b) {
        return a - b;
    },
    Multiplicacion: function (a, b) {
        return a * b;
    },
    Division: function (a, b) {
        return a / b;
    }
};

const ResultadosOperaciones = {
    Suma: Calculo['Suma'](2, 3),
    Resta: Calculo['Resta'](2, 3),
    Multiplicacion: Calculo['Multiplicacion'](2, 3),
    Division: Calculo['Division'](2, 3)
};

for (var key in ResultadosOperaciones) {
    console.log(`'${key}' = '${ResultadosOperaciones[key]}'.`);
};

const describirMueble = function (Mueble) {
    return `Esta mesa es de ${Mueble['Madera']} del autor ${Mueble['Autor']}, por cierto ${arguments[1]}.`;
};

console.log(describirMueble(Mesa, 'hola'));

const calcular = function (a, b) {
    const sumar = function () {
        return a + b;
    };
    const resta = function () {
        return a - b;
    };
    return sumar;
};

console.log(`Resultado del computo: ${calcular(3, 5)()}`);

const multi = function (x, y) {
    return x * y;
};
const divi = function (x, y) {
    return x / y;
};
const calc = function (a, b, fun) {
    return fun(a, b);
};

console.log(`Resultado de la operación: ${calc(3, 5, multi)}`);

const moble = {
    fusta: "pi",
    alt: 22.2,
    color: 'marron',
    preu: 399,
    esNou: true
};

console.log(moble);
console.log(moble.fusta);

const aplicarDescuento = function (objct, descuento) {
    return objct.preu - descuento
}

moble.preeu = 1;
delete moble.preeu;

console.log(aplicarDescuento(moble, 10));

const describir = function (moble) {
    return {
        versionCorta: `de ${moble.fusta} amb color ${moble.color}`,
        versionLarga: `de ${moble.fusta} amb color ${moble.color} te una altura de ${moble.alt} val ${moble.preu}€.`
    }
}
//return `${moble.fusta} ${moble.color} ${moble.preu}`

console.log(describir(moble));
console.log(describir(moble).versionCorta);
console.log(describir(moble).versionLarga);

const restauranteCeller = {
    nombre: `El celler de can Roca`,
    capacidad: 100,
    ocupacion: 75,
    entrar: function (comensales) {
        if (this.ocupacion + comensales > this.capacidad) {
            return `¡No caben más comensales!`;
        } else {
            this.ocupacion += comensales;
            return `Ocupación actual del restaurante: ${this.ocupacion}`;
        }
    },
    salir: function (comensales) {
        this.ocupacion -= comensales;
        if(this.ocupacion < 0)
            this.ocupacion = 0;

        return `Ocupación actual del restaurante: ${this.ocupacion}`;
    }
}

console.log(restauranteCeller.entrar(5));
console.log(restauranteCeller.entrar(5));
console.log(restauranteCeller.entrar(5));
console.log(restauranteCeller.entrar(8));
console.log(restauranteCeller.entrar(2));
console.log(restauranteCeller.entrar(2));
console.log(restauranteCeller.entrar(3));
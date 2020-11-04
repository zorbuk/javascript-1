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
        if (!this.verDisponibilidad(comensales)) {
            return `¡No caben más comensales!`;
        } else {
            this.ocupacion += comensales;
            return `Ocupación actual del restaurante: ${this.ocupacion}`;
        }
    },
    salir: function (comensales) {
        this.ocupacion -= comensales;
        if(!this.verDisponibilidad(comensales))
            this.ocupacion = 0;

        return `Ocupación actual del restaurante: ${this.ocupacion}`;
    },
    verDisponibilidad: function(comensales){
        return this.ocupacion + comensales > this.capacidad || this.ocupacion < 0 ? false: true;
    }
};

console.log(restauranteCeller.entrar(5));
console.log(restauranteCeller.entrar(5));
console.log(restauranteCeller.entrar(5));
console.log(restauranteCeller.entrar(8));
console.log(restauranteCeller.entrar(2));
console.log(restauranteCeller.entrar(2));
console.log(restauranteCeller.entrar(3));
console.log(restauranteCeller.entrar(3));
console.log(restauranteCeller.salir(33));
console.log(restauranteCeller.salir(36));
console.log(restauranteCeller.salir(33));
console.log(restauranteCeller.salir(1));

const arboles = ['pino', 'aveto','eucalipto']
const cosas = ['lapiz', 22, true, {titulo:'El Quijote',Autor:'Cervantes'}, function(a,b){return a+b}, arboles]

arboles.push('liquidambar styrascrjwelwafdm');

console.log(arboles);
console.log(arboles[0]);
console.log(cosas[5][2]);
console.log(`Tamaño de Array Arboles: ${arboles.length} ~ Tipo: ${typeof arboles}`);

console.log(`--- a ---`);
console.log(arboles.push());
console.log(arboles.toString());
console.log(arboles.join(' * '));
console.log(arboles.join(' * ').split(' * '));
console.log(arboles.toString().split(' * '));

const texto = 'Cerezas;Peras;Manzanas;Uvas';
const frutas = texto.split(';');
console.log(frutas);
// Elimina ultimo elemento de un array pero antes lo devuelve.
console.log(`--- B ---`);
console.log(arboles.pop());

console.log(`--- C ---`);
console.log(arboles.unshift('liquidambar styrascrjwelwafdm', 'aveto'));

console.log(`--- D ---`);
console.log(arboles.shift());

console.log(`--- E ---`);
const numeros = [1,3,2,4,6,5,7,8,9,0]
console.log(numeros.sort());

console.log(`--- F ---`);
const arbolesMasNumeros = arboles.concat(numeros);
console.log(arbolesMasNumeros);

console.log(`--- G ---`);
console.log(arbolesMasNumeros);
console.log(arbolesMasNumeros.splice(2,4));
console.log(arbolesMasNumeros);

console.log(`--- ! ---`);

const lCase = 'Hola Mundo!';
console.log(lCase.toLowerCase())

// ¿Dónde empieza eso? 
console.log(lCase.indexOf('ñ'))

if(lCase.indexOf('ñ') >= 0){
    console.log(`Saludo contiene la ñ.`);
}else{
    console.log(`Saludo no contiene la ñ.`);
}

const email = `     perico@gmail.com    `;
console.log(email.trim());

console.log(`--- @ ---`);
console.log(arboles.indexOf('eucalipto'));
console.log(arboles.includes('aveto'));
console.log(arboles.includes('perales'));

// Arrow Function
const sumar1 = (a, b) => {
    return a+b;
}

// Simplificado
const sumar2 = (a, b) => a+b;

const arbols = ['Aveto', 'Pino', 'Palmera', 'Fresno']

console.log(`--- @ ---`);

arbols.forEach(
    function(arbol){
        console.log(arbol);
    }
);

console.log(`--- @ ---`);

arbols.forEach(
    function(arbol){
        console.log(`${arbols.indexOf(arbol)+1}: ${arbol}`);
    }
);

console.log(`--- @ ---`);

arbols.forEach(
    function(arbol, index){
        console.log(`${index+1}. ${arbol}`);
    }
);

console.log(`--- @ ---`);
const tareas = [
    { asunto:`hacer los deberes`, completado:false },
    { asunto:`limpiar la habitación`, completado:false },
    { asunto:`beber agua`, completado:true }
];

tareas.push({ asunto: `hacer la compra`, completado: false })
console.log(tareas.findIndex(
    function(tarea){
        return tarea.completado;
        
        /*if(buscar.completado === true)
            console.log(`La tarea ${buscar.asunto} ha sido completada.`);*/
    }
));

const localizarTarea = function(tareas, texto){
    return tareas.find(
        function(tarea){
            return tarea.asunto.toLowerCase() === texto.toLowerCase(); //Evita espacios
        }
    );
}

const localizarTarea2 = function(tareas, texto){
    return tareas.findIndex(
        function(tarea){
            return tarea.asunto.toLowerCase().includes(texto.toLowerCase()); //Evita espacios
        }
    );
}

console.log(`Localizar tarea: `,localizarTarea(tareas, `limpiar la habitación`));

console.log(saludo.slice(0, saludo.length-1));

console.log(`Antes Splice:`, tareas);
// ----------Pos Elemento, Elemento Borrar, Elemento
tareas.splice(1,0, { asunto:`planchar`, completado:false });
// - Pop, Unshift y Splice devuelven el elemento eliminado.
console.log(`Desp Splice:`, tareas);

const mostrarTareasPendientes = function(tareas){
    return tareas.filter(function(_tarea, _indice){
        return !_tarea.completado;
    });
};
console.log(`--- @ ---`);
console.log(`Mostrar tareas pendientes: `,mostrarTareasPendientes(tareas));

const mostrarAsuntos = function(tareas){
    return tareas.map(function(_tareas, _index){
        // Se pueden devolver objetos también.
        return _tareas.asunto;
    });
};

console.log(`--- @ ---`);
console.log(`Mostrar asuntos tareas: `,mostrarAsuntos(tareas));

const ordenarAsuntos = function(tareas){
    return tareas.sort(function(tareaA, tareaB){
        if(tareaA.asunto.toLowerCase() < tareaB.asunto.toLowerCase()){
            return -1;
        }else if(tareaA.asunto.toLowerCase() > tareaB.asunto.toLowerCase()){
            return 1;
        }else{
            return 0;
        }
    });
};

console.log(`--- @ ---`);
console.log(`Ordenar asuntos tareas: `,ordenarAsuntos(tareas));

const ordenarTareasPendientesPrimero = function(tareas){
    return tareas.sort(function(tareaA,tareaB){
        if(!tareaA.completado && tareaB.completado){
            return -1;
        }else if(tareaA.completado && !tareaB.completado){
            return 1;
        }else{
            return 0;
        }
    });
};

console.log(`--- @ ---`);
console.log(`Ordenar tareas pendientes: `,ordenarTareasPendientesPrimero(tareas));

console.log(`--- @ ---`);
const numeros2 = [5,2,8,1,3,6,4];
console.log(`ordenarNumerosMayorMenor`, numeros2.sort(function(a,b){
    return b-a;
}));
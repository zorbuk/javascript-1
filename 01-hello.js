/* CONSOLE CLEAR BEFORE EXECUTE */
console.clear();

/* PROGRAM CODE */
const saludo = `Buenos días, mundo!`;

// const no se puede reasignar, let si.
// const debe asignarse siempre, let no.

console.log(`Recibiendo el saludo: ${saludo}`);

const Mesa = { Madera:`Haya`, Patas:4, Altura:22.5, Unidades:`Centimetros`, esNueva:true, Autor:`Enrique Puig` };
for (var key in Mesa) {
    console.log(`'${key}' con valor '${Mesa[key]}' del tipo '${typeof Mesa[key]}'.`);
};

{
    const Mesa = { Madera:`Roble`, Patas:4, Altura:22.5, Unidades:`Centimetros`, esNueva:true, Autor:`Enrique Puig` };
    for (var key in Mesa) {
        console.log(`'${key}' con valor '${Mesa[key]}' del tipo '${typeof Mesa[key]}'.`);
    }
};

const calcularDiametro = function(perimetro){
    if(typeof perimetro === `number`){
        return perimetro/Math.PI;
    }
    return null;
};

const diametro = calcularDiametro(80);
console.log(`${diametro}`);


const Calculo = {
    Suma:function(a, b){
        return a + b;
    },
    Resta:function(a, b){
        return a - b;
    },
    Multiplicacion:function(a, b){
        return a * b;
    },
    Division:function(a, b){
        return a / b;
    }
};

const ResultadosOperaciones = {
    Suma:Calculo['Suma'](2,3),
    Resta:Calculo['Resta'](2,3),
    Multiplicacion:Calculo['Multiplicacion'](2,3),
    Division:Calculo['Division'](2,3)
};

for (var key in ResultadosOperaciones) {
    console.log(`'${key}' = '${ResultadosOperaciones[key]}'.`);
};

const describirMueble = function(Mueble){
    return `Esta mesa es de ${Mueble['Madera']} del autor ${Mueble['Autor']}, por cierto ${arguments[1]}.`;
};

console.log(describirMueble(Mesa, 'hola'));

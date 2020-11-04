console.clear();

// ------------------------------// Se ejecuta pasados 2 segundos //
setTimeout(
    ()=>{
        console.log(`Han pasado ya 2 segundos.`);
    }, 2000
);
// ------------------------------// Se ejecuta cada 3 segundos, se detiene a los 10 segundos. //
/* const identificador = setInterval(
    ()=>{
        console.clear();
        console.log(`Interval tick`);
    }, 3000
);

setTimeout(
    ()=>{
        clearInterval(identificador)
    }, 10000
);
*/
// ------------------------------// Reducido. //
// const elevarAlCubo = (x) => return x*x*x;
// const elevarAlCubo2 = (x) => { return x*x*x; };
// const elevarAlCubo3 = x => x*x*x;
// const elevarAlCubo4 = x => Math.pow(x,3);

const media = (cosa,...cifras) =>{
    let suma = 0;
    cifras.forEach((cifra)=>{
        suma=suma+cifra
    });
    console.log(`Media de ${suma/cifras.length} ${cosa}.`)
    //return suma/cifras.length;
};

media('puntos',3,3,5,4,3,4,8,9);

const jugadores = ['Koeman','Messi','Nadal','Xavi']
// ------------------------------// Los tres puntos convierten los argumentos restantes en un array //
const imprimirEquipo = (entrenador, ...jugadores) =>{
    let stringJugadores = ``;
    jugadores.forEach((jugador) => {
        stringJugadores += `${jugador} `;
    });
    console.log(`Entrenador: ${entrenador}; Jugadores: ${stringJugadores}`);
}
imprimirEquipo(...jugadores);

// ------------------------------// Valores por defecto en parametros //
const programadorY = {
    nombre: `Pico`,
    email: `email@hotmail.com`,
}
const programadorX = {
    nombre: `Perico`,
    email: `email@gmail.com`,
    github: `http://github.com/zorbuk`
}
const {nombre, email:correo, github=`http://github.com/notZorbuk`} = programadorX;
console.log(nombre);
console.log(correo);
console.log(github);
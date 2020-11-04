/* 
        Ejercicio Notas
 */
console.clear();

const notas = [];

// Devuelve numero de elementos totales del array (nueva longitud)
const crearNota = function(notas, titulo, cuerpo){
    notas.push({titulo: `${titulo}`,
    cuerpo: `${cuerpo}`})
    return notas.length;
};
// Argumentos: titulo - devuelve tarea borrada.
const borrarNota = function(notas, titulo){
    return notas.find(
        function(nota, index){
            if(nota.titulo === titulo){
                if(index>=1)
                return notas.splice(index,1);
            }
        }
    );
};
// Argumentos: notas, orden (por titulo o cuerpo)
const ordenarNotas = function(notas, tipoOrden){
    return notas.sort(function(A, B){
        if(tipoOrden === `titulo`){
            if(A.titulo < B.titulo){
                return -1;
            }else if(A.titulo > B.titulo){
                return 1;
            }else{
                return 0;
            }
        }else if(tipoOrden === `cuerpo`){
            if(A.cuerpo < B.cuerpo){
                return -1;
            }else if(A.cuerpo > B.cuerpo){
                return 1;
            }else{
                return 0;
            }
        }else{
            return `Se debe especificar un orden: titulo o cuerpo`;
        }
    });
};
// Que devuelva la tarea
const buscarTextEnNotas = function(notas, texto){
    return notas.find(
        function(nota){
            if(nota.titulo.includes(texto) || nota.cuerpo.includes(texto))
            return nota;
        }
    );
};

console.log('Creada:', crearNota(notas, `Truco de VSCode`,`Usar snippets para todo, ctrl+shift+p.`));
console.log('Creada:', crearNota(notas, `Nueva wea`,`yes bro`));
console.log('Borrada: ', borrarNota(notas, `Truco de VSCode`));
console.log('Creada:', crearNota(notas, `Otra cosa`,`arcade games`));

console.log('Ordenar por titulo:', ordenarNotas(notas, `titulo`));
console.log('Ordenar por cuerpo:', ordenarNotas(notas, `cuerpo`));

console.log('Buscar en nota:', buscarTextEnNotas(notas, `bro`));

console.log('Notas final: ',notas);
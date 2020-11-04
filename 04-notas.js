/* 
        Ejercicio Notas
 */
console.clear();

const notas = [];

// Devuelve numero de elementos totales del array (nueva longitud)
const crearNota = (notas, titulo, cuerpo)=>{
    const indice = notas.findIndex((_nota)=>_nota.titulo === titulo);

    if(indice === -1){
        let nota = {titulo: `${titulo}`, cuerpo: `${cuerpo}`};
        console.log(`Nueva nota agregada: `, nota);
        notas.push(nota);
    }else{
        console.log(`Nota ya existente.`);
    }

    return notas.length;
};
// Argumentos: titulo - devuelve tarea borrada.
const borrarNota = (notas, titulo)=>{
    return notas.find(
        (nota, index)=>{
            if(nota.titulo === titulo){
                if(index>=0)
                return notas.splice(index,1);
            }
        }
    );
};
// Borrar notas con filter
const borrarNota2 = (notas, titulo)=>{
    const notasFiltradas = notas.filter((nota)=>{
        return nota.titulo !== titulo;
    });
    if(notas.length>notasFiltradas.length){
        console.log(`Notas filtradas: `,notasFiltradas);
        return notas.find((nota)=>{
            return nota.titulo === titulo;
        });
    }else{
        console.log(`Nota inexistente`);
    }
};
// Argumentos: notas, orden (por titulo o cuerpo)
const ordenarNotas = (notas, tipoOrden)=>{
    return notas.sort((A, B)=>{
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
const buscarTextEnNotas = (notas, texto)=>{
    return notas.find(
        (nota)=>{
            if(nota.titulo.includes(texto) || nota.cuerpo.includes(texto))
            return nota;
        }
    );
};

console.log('Creada:', crearNota(notas, `Truco de VSCode`,`Usar snippets para todo, ctrl+shift+p.`));
console.log('Creada:', crearNota(notas, `Nueva wea`,`yes bro`));
console.log('Borrada2: ', borrarNota2(notas, `Truco de VSCode`));
console.log('Borrada: ', borrarNota(notas, `Truco de VSCode`));
console.log('Creada:', crearNota(notas, `Otra cosa`,`arcade games`));
console.log('Creada:', crearNota(notas, `Otra cosa`,`arcade games`));
console.log('Creada:', crearNota(notas, `Otra`,`arcade games`));

console.log('Ordenar por titulo:', ordenarNotas(notas, `titulo`));
console.log('Ordenar por cuerpo:', ordenarNotas(notas, `cuerpo`));

console.log('Buscar en nota:', buscarTextEnNotas(notas, `bro`));
console.log('Borrada: ', borrarNota(notas, `Truco de VSCode`));
console.log('Borrada: ', borrarNota(notas, `Truco de VSCode`));
console.log('Borrada: ', borrarNota(notas, `Truco de VSCode`));
console.log('Notas final: ',notas);
console.clear();

const Persona = function(nombre, email){
    this.nombre = nombre;
    this.email = email;
    this.mostrarResumen = () => `${this.nombre} con email ${this.email}`;
};

Persona.prototype.mostrarResumen2 = function() { return `${this.nombre} con email ${this.email}`; };

const personaA = new Persona(`Perico`, `Perico@gmail.com`);
const personaB = new Persona(`Annie`, `Annie@mail.com`);

personaA.edad = 19;
console.log(personaA);
console.log(personaB);
console.log(personaB.mostrarResumen());

const juguete = `peonza`;
const juguet = new String(`peonza`);
const juguetes = [`pelota`,`ajedrez`,`parchis`];
const juguets = new Array(`pelota`,`ajedrez`,`parchis`);

console.log(juguete, juguet, juguetes, juguets);
console.log(personaA.mostrarResumen2());

class Animal {
    constructor(nombre, familia){
        this.nombre = nombre;
        this.familia = familia;
    };
    mostrarTodo(){
        return `El animal ${this.nombre} pertenece a la familia ${this.familia}`;
    };
};

const gorilaCopito = new Animal(`Copito`,`Homínidos`);
const leonRey = new Animal(`Leon Rey`,`Felinos`);

console.log(gorilaCopito.mostrarTodo());
console.log(leonRey.mostrarTodo());

class Perro extends Animal {
    constructor(nombre, familia, raza, comidas){
        super(nombre, familia);
        this.raza = raza;
        this.comidas = comidas;
    }
    mostrarLoQueCome(){
        return this.comidas.join(`, `);
    }
    consultaSiLeGustaAlgo1(algo){
        return this.comidas.includes(algo);
    }
    consultaSiLeGustaAlgo2(){
        // FILTRO DE COMIDAS COMENTADO.
        /*let gustaComidas = this.comidas.filter((comida)=>{
            return comida.leGusta;
        });
        
        gustaComidas*/this.comidas.forEach((_comida, _index)=>console.log(`${_index+1}. ${_comida.nombre}`));
    }
}

class ComidaPerro {
    constructor(nombre, leGusta){
        this.nombre = nombre;
        this.leGusta = leGusta;
    }
}

const perroHusky = new Perro(`Tommy`,`Cánidos`,`Pancho`, 
[new ComidaPerro(`Codillo`, true),new ComidaPerro(`Chuletón`, true),new ComidaPerro(`Hueso de Pollo`, false), ]);
const perroPatada = new Perro(`Chibi`,`Cánido`,`Perro`,[`Codillo`,`Chuletón`,`Hueso de Pollo`])

console.log(perroPatada.consultaSiLeGustaAlgo1(`Codillo`));
perroHusky.consultaSiLeGustaAlgo2();
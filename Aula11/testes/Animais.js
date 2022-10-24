class Animal {
    constructor(nome, especie) {
        this.nome = nome;
        this.especie = especie;
    }
    cantar() {
        return `${this.nome} pode cantar`;
    }
    dançar() {
        return `${this.nome} pode dançar`;
    }
}
let bingo = new Animal("Bingo", "Cachorro");
console.log(bingo);
//--------------------------
class Gato extends Animal {
    constructor(nome, idade, raça) {
        super(nome, "Gato");
        this.idade = idade;
        this.raça = raça;
    }
    imprimeRaça() {
        return `eu tenho gato ${this.raça}`;
    }
}
let clara = new Gato("Clara", 33, "siamês");
console.log(clara.cantar());
console.log(clara.imprimeRaça());
console.log(clara)
//-------------------------
class Cachorro extends Animal {
    constructor(nome, idade, ração) {
        super(nome, "Cachorro");
        this.idade = idade;
        this.ração = ração;
    }
    raçãoFavorita() {
        return `comida favoria é ${this.ração}`;
    }
}
let rex = new Cachorro("rex",14,'T-bone')
console.log(rex)
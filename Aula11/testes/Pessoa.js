function Pessoa(_nome) {
    this.Nome = _nome;
}

pessoa = new Pessoa("Pedro");

console.log(pessoa.Nome)
console.log(pessoa['Nome'])
console.log(pessoa)
var carro = {
    marca: "Ford",
    modelo: "Ka",
    getDetalhes: function () {
    return this.marca + ' - ' + this.modelo;
        }
}

carro.modelo = "Novo Ka";
console.log(carro.getDetalhes());

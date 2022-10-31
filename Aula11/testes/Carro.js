var carro = {
    marca: "Ford",
    modelo: "Ka",
    getDetalhes: function () {
    return this.marca + ' - ' + this.modelo;
        }
}

carro.modelo = "Novo Ka"
carro.cor = "Branco"
console.log(carro.getDetalhes())
carro.imprimir = function(){return this.marca + ' - ' + this.modelo + ' - ' + this.cor}
console.log(carro.imprimir())
console.log(carro)
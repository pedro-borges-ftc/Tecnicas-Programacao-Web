//Entrada de Dados
let teste_inicial = window.prompt("Digite seu nome: ")
const numero_um = Number(window.prompt("Digite o primero número: "))
const numero_dois = Number(window.prompt("Digite o segundo número: "))

//Processamento dos Dados
var soma = numero_um + numero_dois
var media = soma / 2
var resultado_soma = `A soma de ${numero_um} + ${numero_dois} = ${soma}`
var resultado_media = `A media de ${numero_um} e ${numero_dois} = ${media}`

//Saída dos Dados
document.writeln("<p><h1>Soma Números</h1></p>")
document.writeln("<p>" + resultado_soma + "</p>")
document.writeln("<p>" + resultado_media + "</p>")
/*alert(resultado_soma)
alert(resultado_media)
console.log(resultado_soma,resultado_media)*/
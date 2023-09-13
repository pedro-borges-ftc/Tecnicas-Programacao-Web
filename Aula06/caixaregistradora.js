function adicionarProduto(){
    //leitura dos elementos
    var txtvalor = Number(document.getElementById("txtvalor").value)
    var txttotal = Number(document.getElementById("txttotal").value.replace(',','.'))
    var tblprodutos = document.getElementById("tblprodutos")
    var contador = tblprodutos.childElementCount

    //Processamento dos dados
    var coluna1 = document.createElement('td')
    var coluna2 = document.createElement('td')
    var linha = document.createElement('tr')

    coluna1.innerHTML = `Produto ${contador}`
    coluna2.innerHTML = `R$ ${txtvalor.toFixed(2).replace('.',',')}`

    linha.appendChild(coluna1)
    linha.appendChild(coluna2)
    tblprodutos.appendChild(linha)

    resultado = txttotal + txtvalor
    //Saída - exibindo o resultado total
    document.getElementById("txttotal").value = resultado.toFixed(2).replace('.',',')
}
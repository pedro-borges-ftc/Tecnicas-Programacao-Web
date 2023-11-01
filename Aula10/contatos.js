//Variáveis
var contatos = [
    [1,'Pedro','email@email.com','73987654321','Professor'],
    [2,'Fulano','fulano@email.com','73987654321','Fulanismo'],
    [3,'Beltrano','beltrano@email.com','73987654321','Beltranismo']
]

function montaTabela() {
    let myTable = document.getElementById("myTable").querySelector("tbody")
    myTable.innerHTML = ''  //limpando o corpo da tabela
    
    for(const indice in contatos){
        let tableSize = myTable.rows.length //Calculando o tamanho da Tabela
        let row = myTable.insertRow(tableSize) //Inserindo uma linha abaixo da Tabela
        let cell1 = row.insertCell(0) //Inserindo as celulas da linha
        let cell2 = row.insertCell(1)
        let cell3 = row.insertCell(2)
        let cell4 = row.insertCell(3)
        let cell5 = row.insertCell(4)
        let cell6 = row.insertCell(5)
        row.id = indice //Adicionando o id no elemento a ser criado

        //Criando o codigo do botão para remover a linha
        let btnCode = "<button class='table-btn' onclick='atualizar(this)'>Alterar</button>"
        btnCode += "<button class='table-btn' onclick='remover(this)'>Remover</button>"   

        //Preenchendo as celulas da linha
        cell1.innerHTML = contatos[indice][0]
        cell2.innerHTML = contatos[indice][1]
        cell3.innerHTML = contatos[indice][2]
        cell4.innerHTML = contatos[indice][3]
        cell5.innerHTML = contatos[indice][4]
        cell6.innerHTML = btnCode
    }

    limparFormulario()
    
    return false //Retornando 'false' para impedir o reload da pagina
}

function remover(id){
    let linha = id.parentNode.parentNode.id //Pegando o id do avô do botão
    contatos.splice(linha, 1);
    
    montaTabela()
    
    return false//Retornando 'false' para impedir o reload da pagina
}

function inserir(){
    //Definindo as variaveis e recebendo os dados
    let n = document.getElementById('name').value
    let e = document.getElementById('email').value
    let p = document.getElementById('phone').value
    let w = document.getElementById('work').value

    let indice = contatos.length - 1
    let novoId = Number(contatos[indice][0]) + 1

    contatos.push([novoId,n,e,p,w])

    montaTabela()

    return false//Retornando 'false' para impedir o reload da pagina
}

function atualizar(id){
    //Definindo as variaveis e recebendo os dados
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let work = document.getElementById('work').value

    let linha = id.parentNode.parentNode.id //Pegando o id do avô do botão

    contatos[linha][1] = name
    contatos[linha][2] = email
    contatos[linha][3] = phone
    contatos[linha][4] = work
    
    montaTabela()
    
    return false //Retornando 'false' para impedir o reload da pagina
}

function limparFormulario(){
    //Limpando os campos de inserção de dados
    document.getElementById('name').value = ""
    document.getElementById('email').value = ""
    document.getElementById('phone').value = ""
    document.getElementById('work').value = ""
}
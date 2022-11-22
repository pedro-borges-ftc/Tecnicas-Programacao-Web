var request, db

//* ************CRIANDO O BANCO*************** */
function criarBancoDadosIDB() {
    //fazer a criação das tabelas, indices e popular o banco se necessário
    request = indexedDB.open("MeuBancoTPW", 2)

    request.onupgradeneeded = function (event) {

        db = event.target.result
                
        //Object store com key path e key generator:
        //Uma chave será criada automaticamente no campo "ContatoID" ao incluir um novo objeto
        var store = db.createObjectStore("Contatos", { keyPath: "id", autoIncrement: true })
        //store.add({nome: 'fulano', email: 'fulano@email',telefone: '73123456789',profissao: 'ator'})

        //cria um index por email e define que não poderá ter email duplicado no banco de dados
        store.createIndex("email", "email", { unique: true })
        //cria um index por nome e permite nomes duplicados no banco de dados
        store.createIndex("nome", "nome", { unique: false })
    }

    //sucesso ao criar/abrir o banco de dados
    request.onsuccess = function (event) {
        console.log('sucesso ao criar/abrir o banco de dados')

        //setando os campos de inserção de dados
        /*document.getElementById('name').value = "Fulano"
        document.getElementById('email').value = "ful@email.com"
        document.getElementById('phone').value = "731234654968"
        document.getElementById('work').value = "job"*/

        db = event.target.result

        buscarRegistrosIDB()
    }

    //erro ao criar/abrir o banco de dados
    request.onerror = function (event) {
        console.log('erro ao criar/abrir o banco de dados. Erro: ' + event.target.error)
    }
}

//* ******************INSERIR*********************** */
function inserirRegistroIDB() {
    //Definindo as variaveis e recebendo os dados
    let n = document.getElementById('name').value
    let e = document.getElementById('email').value
    let p = document.getElementById('phone').value
    let w = document.getElementById('work').value

    var contato = {
        nome: `${n}`, email: `${e}`, telefone: `${p}`, profissao: `${w}`
    }

    // Abrindo uma transação para ler/inserir/atualizar/excluir dados
    var transaction = db.transaction('Contatos', "readwrite")

    // Quando a transação é executada com sucesso
    transaction.oncomplete = function (event) {
        console.log('Transação finalizada com sucesso.')
    }

    // Quando ocorre algum erro na transação
    transaction.onerror = function (event) {
        console.log('Transação finalizada com erro. Erro: ' + event.target.error)
    }

    //Recuperando a object store para incluir os registros
    var store = transaction.objectStore('Contatos')

    //incluindo o registro na object store
    var requestAdd = store.add(contato)

    //quando ocorrer um erro ao adicionar o registro
    requestAdd.onerror = function (event) {
        console.log('Ocorreu um erro ao salvar o contato.')
    }

    //quando o registro for incluido com sucesso
    requestAdd.onsuccess = function (event) {
        console.log('Contato salvo com sucesso.')
        buscarRegistrosIDB()
    }
}

//* ******************ALTERAR*********************** */
function alterarRegistroIDB(idContato) {
    console.log(idContato, Number(idContato))
    // Abrindo uma transação para ler/inserir/atualizar/excluir dados
    var transaction = db.transaction('Contatos', "readwrite")

    // Quando a transação é executada com sucesso
    transaction.oncomplete = function (event) {
        console.log('Transação finalizada com sucesso.')
    }

    // Quando ocorre algum erro na transação
    transaction.onerror = function (event) {
        console.log('Transação finalizada com erro. Erro: ' + event.target.error)
    }

    //Recuperando a object store para alterar os registros
    var store = transaction.objectStore('Contatos')

    //Recuperando um contato pela chave primaria
    request = store.get(Number(idContato))

    //quando ocorrer um erro ao buscar o registro
    request.onerror = function (event) {
        console.log('Ocorreu um erro ao buscar o contato.')
    }

    //quando o registro for encontrado com sucesso
    request.onsuccess = function (event) {
        var contato = event.target.result

         //Definindo as variaveis e recebendo os dados
        let n = document.getElementById('name').value
        let e = document.getElementById('email').value
        let p = document.getElementById('phone').value
        let w = document.getElementById('work').value

        contato.nome = `${n}`
        contato.email = `${e}`
        contato.telefone = `${p}`
        contato.profissao = `${w}`
   
        //Atualizando o registro no banco
        var requestUpdate = store.put(contato)

        //quando ocorrer erro ao atualizar o registro
        requestUpdate.onerror = function (event) {
            console.log('Ocorreu um erro ao salvar o contato.')
        }

        //quando o registro for atualizado com sucesso
        requestUpdate.onsuccess = function (event) {
            console.log('Contato salvo com sucesso.')
            buscarRegistrosIDB()
        }
    }
}

//* ******************EXCLUIR*********************** */
function excluirRegistroIDB(idContato) {
    // Abrindo uma transação para ler/inserir/atualizar/excluir dados
    var transaction = db.transaction('Contatos', "readwrite")

    // Quando a transação é executada com sucesso
    transaction.oncomplete = function (event) {
        console.log('Transação finalizada com sucesso.')
    }

    // Quando ocorre algum erro na transação
    transaction.onerror = function (event) {
        console.log('Transação finalizada com erro. Erro: ' + event.target.error)
    }

    //Recuperando a object store para alterar os registros
    var store = transaction.objectStore('Contatos')

    //Excluindo o registro pela chave primaria
    var requestDelete = store.delete(Number(idContato))

    //quando ocorrer um erro ao excluir o registro
    requestDelete.onerror = function (event) {
        console.log('Ocorreu um erro ao excluir o contato.')
    }

    //quando o registro for excluído com sucesso
    requestDelete.onsuccess = function (event) {
        console.log('Contato excluído com sucesso.')
        buscarRegistrosIDB()
    }
}

//* ******************BUSCAR*********************** */
function buscarRegistrosIDB() {
    //limpando o corpo da tabela
    var myTable = document.getElementById("myTable").querySelector("tbody")
    myTable.innerHTML = ''

    // Abrindo uma transação para ler dados
    var transaction = db.transaction('Contatos', "readonly")

    var store = transaction.objectStore('Contatos')
    request = store.openCursor()
    
    request.onsuccess = function (event) {
        var cursor = event.target.result
        if (cursor) {
            //console.log(cursor.value)
            //setando os campos de inserção de dados
            document.getElementById('name').value = cursor.value.nome
            document.getElementById('email').value = cursor.value.email
            document.getElementById('phone').value = cursor.value.telefone
            document.getElementById('work').value = cursor.value.profissao

            addToTable(cursor.value.id)

            cursor.continue()
        }
    }
}
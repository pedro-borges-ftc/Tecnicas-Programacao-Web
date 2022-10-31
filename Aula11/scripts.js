function enviar(){
    this.nome = document.getElementById("txtnome").value
    this.email = document.getElementById("txtemail").value
    this.cpf = document.getElementById("txtcpf").value
    this.formapagamento = Number(document.getElementById("txtformapagamento").value)

    getFormaPagamento = function(){
        switch (this.formapagamento){
            case 1:
                return "Dinheiro"
            case 2:
                return "Pix"
            case 3:
                return "Boleto"
            case 4:
                return "Cartão"
        }
    }

    imprimeformulario = function(){
        var resultado = `Nome: ${this.nome}`
        resultado += `E-mail: ${this.email}`
        resultado += `CPF: ${this.cpf}`
        resultado += `Foma de Pagamento: ${this.getFormaPagamento()}`
    }

    console.log(enviar)
}
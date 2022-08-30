function SomaNumeros(){
    /*var txtNum1 = document.getElementById('txtNum1')
    var numeroUm = Number(txtNum1.value)*/
    var numeroUm = Number(document.getElementById('txtNum1').value)
    var numeroDois = Number(document.getElementById('txtNum2').value)
    
    document.getElementById('txtResultado').value = numeroUm + numeroDois
    document.getElementById('divResultado').innerHTML = numeroUm + numeroDois
}
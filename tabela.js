function addForm(){
    let html = ""
    html += " Digite o salário: "
    html += " <input type='number' id='adicionaSalario' placeholder='Digite o salário aqui'>"
    html += " <button id='adicionar' onclick='adicionaSalario()'>Adicionar</button> "
    var adicionarSalario = document.getElementById("div")
    adicionarSalario.innerHTML = html
}   

var salarios = [];


function adicionaSalario() {
    var salarioValor = document.getElementById('adicionaSalario').value
    var novoSalario = {
        salarioBruto: salarioValor,
        salarioAjuste: 0,
        salarioLiquido: 0,
        inss: 0,
        irrf: 0,
        minmax: 0
    }
 
    calcularInss(novoSalario)} 


function calcularInss(novoSalario) {

    if (novoSalario.salarioBruto < 1100){
        novoSalario.inss = novoSalario.salarioBruto * 0.075
        novoSalario.salarioAjuste = novoSalario.salarioBruto - novoSalario.inss
        calcularIrrf(novoSalario)
        
    } else if(novoSalario.salarioBruto > 1100 && novoSalario.salarioBruto < 2203){
        novoSalario.inss = novoSalario.salarioBruto * 0.09
        novoSalario.salarioAjuste = novoSalario.salarioBruto - novoSalario.inss
        calcularIrrf(novoSalario)
       
    } else if(novoSalario.salarioBruto > 2203 && novoSalario.salarioBruto < 3305){
        novoSalario.inss = novoSalario.salarioBruto * 0.12
        novoSalario.salarioAjuste = novoSalario.salarioBruto - novoSalario.inss
        calcularIrrf(novoSalario)
      
    } else if(3305 < novoSalario.salarioBruto){
        novoSalario.inss = novoSalario.salarioBruto * 0.14
        novoSalario.salarioAjuste = novoSalario.salarioBruto - novoSalario.inss
        calcularIrrf(novoSalario)
    }
}

function calcularIrrf(novoSalario){



    novoSalario.salarioAjuste = parseFloat(novoSalario.salarioAjuste.toFixed(2))
    if(novoSalario.salarioBruto < 1903){
        novoSalario.salarioLiquido = novoSalario.salarioAjuste
 
        var totalSalarios = somaSalarios(novoSalario)
        var totalIrrf = somaIrrf(novoSalario)
        var totalInss = somaInss(novoSalario)
        minMax(listaSalariosLiquidos)
        salarios.push(novoSalario)
        console.log(novoSalario)
        console.log(salarios[0].salarioBruto)
        exibirSalariosTela(novoSalario, totalSalarios, totalIrrf, totalInss)
    } else if(novoSalario.salarioAjuste > 1903 && novoSalario.salarioAjuste < 2826){
        novoSalario.irrf = novoSalario.salarioAjuste * 0.075
        novoSalario.irrf = novoSalario.irrf - 142.80
        novoSalario.irrf = novoSalario.irrf.toFixed(2)
        novoSalario.salarioLiquido = novoSalario.salarioAjuste - novoSalario.irrf

        var totalSalarios = somaSalarios(novoSalario)
        var totalIrrf = somaIrrf(novoSalario)
        var totalInss = somaInss(novoSalario)
        minMax(listaSalariosLiquidos)
        salarios.push(novoSalario)
        console.log(novoSalario)
        console.log(salarios[0].salarioBruto)
        exibirSalariosTela(novoSalario, totalSalarios, totalIrrf, totalInss)
    } else if(novoSalario.salarioAjuste > 2826 && novoSalario.salarioAjuste < 3751){
        novoSalario.irrf = novoSalario.salarioAjuste * 0.15
        novoSalario.irrf = novoSalario.irrf - 354.80
        novoSalario.irrf = novoSalario.irrf.toFixed(2)
        novoSalario.salarioLiquido = novoSalario.salarioAjuste - novoSalario.irrf

        var totalSalarios = somaSalarios(novoSalario)
        var totalIrrf = somaIrrf(novoSalario)
        var totalInss = somaInss(novoSalario)
        minMax(listaSalariosLiquidos)
        salarios.push(novoSalario)
        console.log(novoSalario)
        console.log(salarios[0].salarioBruto)
        exibirSalariosTela(novoSalario, totalSalarios, totalIrrf, totalInss)

    } else if(novoSalario.salarioAjuste > 3751 && novoSalario.salarioAjuste < 4664){
        novoSalario.irrf = novoSalario.salarioAjuste * 0.2250
        novoSalario.irrf = novoSalario.irrf - 636.13
        novoSalario.irrf = novoSalario.irrf.toFixed(2)
        novoSalario.salarioLiquido = novoSalario.salarioAjuste - novoSalario.irrf

        var totalSalarios = somaSalarios(novoSalario)
        var totalIrrf = somaIrrf(novoSalario)
        var totalInss = somaInss(novoSalario)
        minMax(listaSalariosLiquidos)
        salarios.push(novoSalario)
        console.log(novoSalario)
        console.log(salarios[0].salarioBruto)
        exibirSalariosTela(novoSalario, totalSalarios, totalIrrf, totalInss)
        
    } else if(novoSalario.salarioAjuste > 4664){
        novoSalario.irrf = novoSalario.salarioAjuste * 0.2750
        novoSalario.irrf = novoSalario.irrf - 869.36
        novoSalario.irrf = novoSalario.irrf.toFixed(2)
        novoSalario.salarioLiquido = novoSalario.salarioAjuste - novoSalario.irrf

        var totalSalarios = somaSalarios(novoSalario)
        var totalIrrf = somaIrrf(novoSalario)
        var totalInss = somaInss(novoSalario)
        minMax(listaSalariosLiquidos)
        salarios.push(novoSalario)
        console.log(novoSalario)
        console.log(salarios[0].salarioLiquido)
        exibirSalariosTela(novoSalario, totalSalarios, totalIrrf, totalInss)

    }
}

var listaSalariosLiquidos = []


function somaSalarios(novoSalario){
    novoSalario.salarioLiquido = parseFloat(novoSalario.salarioLiquido)
    listaSalariosLiquidos.push(novoSalario.salarioLiquido)
    var totalSalarios = 0
    for(var i = 0; i < listaSalariosLiquidos.length; i++) {
        totalSalarios += listaSalariosLiquidos[i]
    }
    totalSalarios = totalSalarios.toFixed(2)
    return totalSalarios
}

var listaTotalIrrf = []

function somaIrrf(novoSalario){
    novoSalario.irrf = parseFloat(novoSalario.irrf)
    listaTotalIrrf.push(novoSalario.irrf)

    var totalIrrf = 0
    for(var i = 0; i < listaTotalIrrf.length; i++) {
        totalIrrf += listaTotalIrrf[i]
    }
    console.log(novoSalario.irrf)
    totalIrrf = totalIrrf.toFixed(2)
    return totalIrrf

}

var listaTotalInss = []

function somaInss(novoSalario){
    novoSalario.inss = parseFloat(novoSalario.inss)
    novoSalario.inss = parseFloat(novoSalario.inss.toFixed(2))

    listaTotalInss.push(novoSalario.inss)

    var totalInss = 0
    for(var i = 0; i < listaTotalInss.length; i++) {
        totalInss += listaTotalInss[i]
    }
     totalInss = totalInss.toFixed(2)
     return totalInss
}

var listaMenorMaior = []

function minMax(listaSalariosLiquidos){
    var min = Math.min.apply(Math, listaSalariosLiquidos)
    var max = Math.max.apply(Math, listaSalariosLiquidos)

    listaMenorMaior =  [min, max]
}


function exibirSalariosTela(novoSalario, totalSalarios, totalIrrf, totalInss) {
    novoSalario.salarioBruto = parseFloat(novoSalario.salarioBruto)
 
    var campoLinha = document.getElementById('tabelaSalarial')
    let html = ""
    for(var i = 0; i < salarios.length; i++){
      html += "<tr><td>" + "R$ " +salarios[i].salarioBruto + "</td>"
      html += "<td>" + "R$ " +salarios[i].salarioLiquido + "</td>"
    }
    campoLinha.innerHTML = html 
    
    var campoFixo = document.getElementById('tabelaFixa')

    let htmlFixo = ""
    htmlFixo += "<td>" + "R$ " + totalSalarios + "</td>"
    htmlFixo += "<td>" + "R$ " + totalInss + "</td>"
    htmlFixo += "<td>" + "R$ " + totalIrrf + "</td>"
    htmlFixo += "<td>" +"Menor: " + "R$ " +listaMenorMaior[0] + "<br>Maior: " + "R$ " + listaMenorMaior[1] + "</td></tr>"
    campoFixo.innerHTML = htmlFixo
}
console.log("salarios: " + salarios[0])
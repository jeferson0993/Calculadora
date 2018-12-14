function soma(){
    var visor = document.getElementById("Visor");
    visor.innerHTML = "soma!";
}
function divisao(){
    var visor = document.getElementById("Visor");
    visor.innerHTML = "divisao!";
}
function subtracao(){
    var visor = document.getElementById("Visor");
    visor.innerHTML = "subtracao!";
}
function multiplicacao(){
    var visor = document.getElementById("Visor");
    visor.innerHTML = "multiplicacao!";
}
function resultado(){
    var visor = document.getElementById("Visor");
    visor.innerHTML = "resultado:";
}
function limpar(){    
    var visor = document.getElementById("Visor");
    visor.innerHTML = "";
}
function adicionaValor(){    
    var visor = document.getElementById("Visor");
    if(this.id == "sete"){        
        visor.innerHTML = "7";
    }else if(this.id == "oito"){
        visor.innerHTML = "8";
    }else if(this.id == "nove"){
        visor.innerHTML = "9";
    }else if(this.id == "quatro"){
        visor.innerHTML = "4";
    }else if(this.id == "cinco"){
        visor.innerHTML = "5";
    }else if(this.id == "seis"){
        visor.innerHTML = "6";
    }else if(this.id == "sete"){
        visor.innerHTML = "7";
    }else if(this.id == "um"){
        visor.innerHTML = "1";
    }else if(this.id == "dois"){
        visor.innerHTML = "2";
    }else if(this.id == "tres"){
        visor.innerHTML = "3";
    }else if(this.id == "zero"){
        visor.innerHTML = "0";
    }else if(this.id == "ponto"){
        visor.innerHTML = ".";
    }else if(this.id == "parentese1"){
        visor.innerHTML = "(";
    }else if(this.id == "parentese2"){
        visor.innerHTML = ")";
    }else if(this.id == ""){
        visor.innerHTML = "";
    }else if(this.id == ""){
        visor.innerHTML = "";
    }else if(this.id == ""){
        visor.innerHTML = "";
    }else if(this.id == ""){
        visor.innerHTML = "";
    }
}
function inicializar(){    
    var botaoSoma = document.getElementById("botaoSoma");
    var botaoIgual = document.getElementById("botaoIgual");
    var botaoDivisao = document.getElementById("botaoDivisao");
    var botaoSubtracao = document.getElementById("botaoSubtracao");
    var botaoMultiplicacao = document.getElementById("botaoMultiplicacao");
    
    var botaolimpar = document.getElementById("limpar");
    var botaoparentese1 = document.getElementById("parentese1");
    var botaoparentese2 = document.getElementById("parentese2");
    
    var botaosete = document.getElementById("sete");
    var botaooito = document.getElementById("oito");
    var botaonove = document.getElementById("nove");

    var botaoQuatro = document.getElementById("quatro");
    var botaoCinco = document.getElementById("cinco");
    var botaoSeis = document.getElementById("seis");

    var botaoUm = document.getElementById("um");
    var botaoDois = document.getElementById("dois");
    var botaoTres = document.getElementById("tres");

    var botaoZero = document.getElementById("zero");
    var botaoPonto = document.getElementById("ponto");
    var botamaisMenos = document.getElementById("maisMenos");

    botaoSoma.onclick = soma;
    botaoIgual.onclick = resultado;
    botaoDivisao.onclick = divisao;
    botaoSubtracao.onclick = subtracao;
    botaoMultiplicacao.onclick = multiplicacao;

    botaolimpar.onclick = limpar;

    botaosete.onclick = adicionaValor;
    botaooito.onclick = adicionaValor;    
    botaonove.onclick = adicionaValor;
    botaoQuatro.onclick = adicionaValor;
    botaoCinco.onclick = adicionaValor;
    botaoSeis.onclick = adicionaValor;
    botaoUm.onclick = adicionaValor;
    botaoDois.onclick = adicionaValor;
    botaoTres.onclick = adicionaValor;
    botaoZero.onclick = adicionaValor;

    botaoPonto.onclick = adicionaValor;
    botamaisMenos.onclick = adicionaValor;
    botaoparentese1.onclick = adicionaValor;
    botaoparentese2.onclick = adicionaValor;

}

window.onload = inicializar;
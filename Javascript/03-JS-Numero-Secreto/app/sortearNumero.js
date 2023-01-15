const menorValor = 0;
const maiorValor = 101;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * (maiorValor - menorValor) + menorValor)
}

const elementoMenorValor = document.querySelector('#menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.querySelector('#maior-valor')
elementoMaiorValor.innerHTML = maiorValor-1

console.log('Número secreto: ',numeroSecreto)
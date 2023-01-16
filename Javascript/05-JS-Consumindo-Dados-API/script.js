async function buscaEndereco(CEP) {
    var mensagemErro = document.querySelector('#erro')
    mensagemErro.innerHTML = ''
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${CEP}/json/`)
        var consultaCEPConvertida = await consultaCEP.json();
        if(consultaCEPConvertida.erro) {
            throw Error('CEP não existente!')
        }
        const cidade = document.querySelector('#cidade')
        const logradouro = document.querySelector('#endereco')
        const estado = document.querySelector('#estado')
        cidade.value = consultaCEPConvertida.localidade
        logradouro.value = consultaCEPConvertida.logradouro
        estado.value = consultaCEPConvertida.uf
        return consultaCEPConvertida
    } catch (erro) {
        mensagemErro.innerHTML = '<p>CEP Inválido! Tente novamente.</p>'
        console.log(erro)
    }
    
}

var cep = document.querySelector('#cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value))
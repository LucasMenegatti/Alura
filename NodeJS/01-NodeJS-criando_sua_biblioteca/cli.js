import { pegaArquivo } from './index.js'
import chalk from 'chalk';
import { validaURLs } from './http-validacao.js'

//CLI - Command Line Interface
const caminho = process.argv; //Guarda em caminho uma array com 3 itens, o caminho do node, o caminho do aqrquivo sendo executado
                              //E como terceiro item, o que foi digitado pelo usuário no terminal!!! ( caminho[2] )

async function processaTexto (caminhoDoArquivo) {
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);
    if(caminhoDoArquivo[3] === 'validar') {
        console.log(chalk.yellow('Links Validados: '), await validaURLs(resultado));
    } else {
        console.log(chalk.yellow('Lista de Links: '), resultado);
    }
}

processaTexto(caminho)
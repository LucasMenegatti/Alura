import * as fs from 'node:fs';
import * as path from 'path';
const __dirname = path.resolve();

function extrairLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s]*.[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null) { //Atribuindo a temp o valor de regex.exec(texto) e o comparando para saber se é diferente de null (Retorna null quando não encontrar mais casos no texto)
        arrayResultados.push({ [temp[1]]: temp[2] }) //Empurra um objeto com o valor do índice 1 e índice 2 para o resutlado.
    }
    return arrayResultados.length === 0 ? 'não há links no documento' : arrayResultados;
}

function trataErro(erro) { //Função chamada para tratar erros
    throw new Error('Um erro ocorreu!',erro);
}

// //Função usando try/catch/finally e assync/await (Para múltioplos arquivos)
// async function pegaArquivo(caminho) {
//     const encoding = 'utf8';
//     try {
//         const caminhoAbsoluto = path.join(caminho, '..');
//         const arquivos = await fs.promises.readdir(caminhoAbsoluto, { encoding });
//         const result = await Promise.all(arquivos.map(async (arquivo) => {
//             const localArquivo = `${caminhoAbsoluto}/${arquivo}`;
//             const texto = await fs.promises.readFile(localArquivo, encoding);
//             return extrairLinks(texto);
//         }));
//         return result;
//     } catch(err) {
//         trataErro(err);
//     }
// }

async function pegaArquivo(caminho) {
    const encoding = 'utf8';
    try {
        const texto = await fs.promises.readFile(caminho, encoding);
        return extrairLinks(texto);
    } catch(err) {
        trataErro(err);
    }
}

// Função usando fs.promises e .then
// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf8';
//     fs.promises.readFile(caminhoDoArquivo, encoding)
//     .then((dados) => console.log(chalk.blue(dados)))
//     .catch((err) => trataErro(err));
// }

// Função usando callback
// function pegaArquivo(caminho) {
//     const encoding = 'utf8'
//     fs.readFile(caminho, encoding, (err, data) => {
//         if(err) trataErro(err); //Caso haja erro, chama a função trataErro
//         console.log(chalk.blue(data));
//     })
// }

//pegaArquivo('./arquivos/texto1.md');

export { pegaArquivo };
import { pegaArquivo } from "../index.js";

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList' 
    },
];

describe('pegaArquivo::', () => {
    it('Deve ser uma função', () =>
        expect( typeof pegaArquivo).toBe('function'));
    it('Deve retornar array com resultados', async () => {
        const resultado = await pegaArquivo('/home/lucas/Documents/MeusCodigos/nodejs-criando-sua-biblioteca/test/arquivos/texto1.md')
        expect(resultado).toEqual(arrayResult);
    });
    it('Deve retornar mensagem "não há links"', async () => {
        const resultado = await pegaArquivo('/home/lucas/Documents/MeusCodigos/nodejs-criando-sua-biblioteca/test/arquivos/texto1_semLinks.md');
        expect(resultado).toBe('não há links no documento');
    })
    it('Deve lançar um erro na falta de arquivo', async () => {
        await expect(pegaArquivo('/home/lucas/Documents/MeusCodigos/nodejs-criando-sua-biblioteca/test/arquivos/')).rejects.toThrow(/Um erro ocorreu!/)
    })
    it('Deve resolver a função com sucesso', async () => {
    await expect(pegaArquivo('/home/lucas/Documents/MeusCodigos/nodejs-criando-sua-biblioteca/test/arquivos/texto1.md')).resolves.toEqual(arrayResult)
    })
})
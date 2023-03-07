/*
    * Modulo 01 - Logica de programacao I (JS/TS) - Bootcamp Ada
    * Exercicio 5 - Lista 1
    * #968 - Gabriele Jandres Cavalcanti
*/

// 1. Estruturas de dados
const usuarios = [
    { nome : 'Tiago', autenticado: true },
    { nome : 'Miguel', autenticado: false},
    { nome : 'Priscila', autenticado: true },
    { nome : 'Luiz', autenticado: false},
    { nome : 'Ricardo', autenticado: true },
];

// 2. Funcoes
const verificarUsuarioAutenticado = (usuarios, nome) => {
    return usuarios.find(usuario => usuario.nome === nome);
}

// 3. Testes
console.log("***** Teste - Exercicio 05 *****\n Usuario: \n", verificarUsuarioAutenticado(usuarios, "Luiz"));
/*
    * Modulo 01 - Logica de programacao I (JS/TS) - Bootcamp Ada
    * Exercicio 1 - Lista 1
    * #968 - Gabriele Jandres Cavalcanti
*/

// 1. Estruturas de dados
const alunos = [
    { nome: "Filipe Diogo", nota: "80" },
    { nome: "Enzo Miguel", nota: "77" },
    { nome: "Mateus Danilo", nota: "88" },
    { nome: "Olivia Stella", nota: "95" },
    { nome: "César Paulo", nota: "68" },
];

// 2. Funcoes
const quantidadeAprovados = (alunos) => {
    const total = alunos.reduce((count, aluno) => {
        return aluno.nota >= 70 ? (count + 1) : count;
    }, 0);

    return total;
}

// 3. Testes
console.log("***** Teste - Exercicio 01 *****\n A quantidade de aprovados eh", quantidadeAprovados(alunos)); 
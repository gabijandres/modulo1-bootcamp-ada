/*
    * Modulo 01 - Logica de programacao I (JS/TS) - Bootcamp Ada
    * Exercicio 4 - Lista 1
    * #968 - Gabriele Jandres Cavalcanti
*/

// 1. Estruturas de dados
const pacientes = [
    "Bento Raimundo Cavalcanti",
    "Oliver Samuel Cardoso",
    "Geraldo Ryan Danilo Carvalho",
    "Isis Tatiane Sophie Santos",
    "Clarice Esther Moraes",
];

// 2. Funcoes
const verificarPosicaoPacienteFila = (pacientes, paciente) => {
    return pacientes.indexOf(paciente) + 1;
}

// 3. Testes
console.log("***** Teste - Exercicio 04 *****\n A posicao da paciente na fila eh", verificarPosicaoPacienteFila(pacientes, "Isis Tatiane Sophie Santos"));
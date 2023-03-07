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

/**
 * Verifica a posicao de um dado paciente na fila de pacientes
 * @param {any} pacientes um array de pacientes
 * @param {any} paciente a string com o nome de determinado paciente
 * @returns {any} a posicao na fila do paciente dado
 */
const verificarPosicaoPacienteFila = (pacientes, paciente) => {
    return pacientes.indexOf(paciente) + 1;
}

// 3. Testes
console.log("***** Teste - Exercicio 04 *****\n A posicao da paciente na fila eh", verificarPosicaoPacienteFila(pacientes, "Isis Tatiane Sophie Santos"));
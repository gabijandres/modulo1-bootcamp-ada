/*
    * Modulo 01 - Logica de programacao I (JS/TS) - Bootcamp Ada
    * Exercicio 3 - Lista 1
    * #968 - Gabriele Jandres Cavalcanti
*/

// 1. Estruturas de dados
const feedbacks = [
    "Melhorar responsividade do site",
    "Erros confusos",
    "Os botões são intuitivos",
    "Erros confusos",
];

// 2. Funcoes

/**
 * Remove feedbacks duplicados da lista dada
 * @param {any} feedbacks um array de feedbacks
 * @returns {any} um conjunto (sem repeticoes) com os feedbacks
 */
const removerFeedbacksDuplicados = (feedbacks) => {
    return [...new Set(feedbacks)];
}

// 3. Testes
console.log("***** Teste - Exercicio 03 *****\n Feedbacks sem duplicidade: \n", removerFeedbacksDuplicados(feedbacks));
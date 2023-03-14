/*
 * Modulo 01 - Logica de programacao I (JS/TS) - Bootcamp Ada
 * Exercicio 2 - Lista 2
 * #968 - Gabriele Jandres Cavalcanti
 */

// 1. Estruturas de dados
const produtos = [
  { valorOriginal: 1500, porcentagemDoDesconto: 50 },
  { valorOriginal: 89, porcentagemDoDesconto: 20 },
  { valorOriginal: 100, porcentagemDoDesconto: 75 },
];

// 2. Funcoes

/**
 * Calcula o valor dos produtos com desconto aplicado
 * @param {any} produtos array contendo os produtos
 * @returns {any} um array com o valor original e o valor com desconto de cada produto
 */
const obterValorComDesconto = (produtos) => {
  return produtos.map(({ valorOriginal, porcentagemDoDesconto }) => {
    return {
      valorOriginal,
      valorComDesconto:
        valorOriginal * (1 - porcentagemDoDesconto / 100),
    };
  });
};

// 3. Testes
console.table(obterValorComDesconto(produtos));

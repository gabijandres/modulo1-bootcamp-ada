/*
 * Modulo 01 - Logica de programacao I (JS/TS) - Bootcamp Ada
 * Exercicio 3 - Lista 2
 * #968 - Gabriele Jandres Cavalcanti
 */

// 1. Estruturas de dados
const bebidas = [
  { nome: "suco de pessego", preco: 5 },
  { nome: "suco de uva", preco: 6.5 },
  { nome: "suco de manga", preco: 5.5 },
];

// 2. Funcoes

/**
 * Ordena os pedidos em ordem crescente de preco
 * @param {any} caixas array contendo os produtos
 * @returns {any} novo array com os produtos ordenados
 */
const ordernarPorPrecosMaisBaixos = (produtos) => {
  return produtos.sort((produto1, produto2) =>
    produto1.preco == produto2.preco ? 0 : (produto1.preco > produto2.preco ? 1 : -1)
  );
};

// 3. Testes
console.log(ordernarPorPrecosMaisBaixos(bebidas));

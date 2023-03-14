/*
 * Modulo 01 - Logica de programacao I (JS/TS) - Bootcamp Ada
 * Exercicio 1 - Lista 2
 * #968 - Gabriele Jandres Cavalcanti
 */

// 1. Estruturas de dados
const caixas = [
  [4, 2, 4],
  [3, 3, 3],
  [1, 1, 2],
  [2, 1, 1],
];

// 2. Funcoes

/**
 * Calcula o volume total das caixas
 * @param {any} caixas array contendo os dados das caixas
 * @returns {any} a soma dos volumes das caixas
 */
const calcularVolumeDeCaixas = (caixas) => {
  return caixas.reduce(
    (volumeTotal, caixa) => volumeTotal + calcularVolumeDeCaixa(caixa),
    0
  );
};

/**
 * Calcula o volume de uma caixa
 * @param {any} caixa array contendo as dimensões da caixa
 * @returns {any} o volume da caixa
 */
const calcularVolumeDeCaixa = (caixa) => {
  return caixa.reduce((volume, dimensao) => volume * dimensao, 1);
};

// 3. Testes
console.log(calcularVolumeDeCaixas(caixas));

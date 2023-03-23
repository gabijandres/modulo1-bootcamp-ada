/*
 * Modulo 01 - Logica de programacao I (JS/TS) - Bootcamp Ada
 * Projeto Final
 * #968 - Gabriele Jandres Cavalcanti
 */

// ************ 1. Estruturas de dados ************
const clientes = [
  {
    id: 1,
    nome: "Luiz Julio",
    email: "luiz.julio@teste.com",
    telefone: null,
    idade: 39,
    compras: [
      {
        item: "televisao",
        valor: 1000,
      },
      {
        item: "microondas",
        valor: 1300,
      },
    ],
  },
  {
    id: 2,
    nome: "davi marcelo",
    email: "Davi.Marcelo@teste.com",
    telefone: "TELEFONE",
    idade: 27,
    compras: [
      {
        item: "geladeira",
        valor: 2000,
      },
      {
        item: "fogao",
        valor: 450,
      },
    ],
  },
  {
    id: 3,
    nome: "Augusto Cesar",
    email: "augusto.cesar@teste.com",
    telefone: "(34)99093-9203",
    idade: 22,
    compras: [
      {
        item: "fogao",
        valor: 2000,
      },
    ],
  },
  {
    id: 4,
    nome: "Eliane Louise",
    email: "eliane.louise",
    telefone: "(81)988888888",
    idade: 26,
    compras: [
      {
        item: "televisao",
        valor: 4000,
      },
      {
        item: "lava roupas",
        valor: 5000,
      },
    ],
  },
  {
    id: 5,
    nome: "Laura Heloisa",
    email: "laura.heloisa@teste.com",
    telefone: "2399999999",
    idade: 55,
    compras: [
      {
        item: "lava loucas",
        valor: 1500,
      },
      {
        item: "laptop",
        valor: 7000,
      },
    ],
  },
  {
    id: 6,
    nome: "Jose Dias",
    email: "jose.dias@teste.com",
    telefone: null,
    idade: 62,
    compras: [
      {
        item: "liquidificador",
        valor: 350,
      },
      {
        item: "batedeira",
        valor: 1000,
      },
    ],
  },
];

// ************ 2. Funcoes ************

function ErroFormato(mensagem) {
    this.message = mensagem;
    this.name = "Erro de formato";
}
ErroFormato.prototype = Error.prototype;

/**
 * Valida um campo string obrigatorio. Lanca excessoes em caso de erros de validacao detectados.
 * @param {any} valor valor do campo de string a ser validado
 * @param {any} campo nome do campo de string a ser validado
 * @returns {void}
 */
const validaString = (valor, campo) => {
  if (typeof(valor) !== "string") throw new TypeError(`${campo} deve ser do tipo string.`);
  if (valor.length === 0) throw new RangeError(`${campo} nao pode ser uma string vazia.`);
}

/**
 * Valida um campo obrigatorio de nome. Lanca excessoes em caso de erros de validacao detectados.
 * @param {any} nome um nome a ser validado
 * @returns {void}
 */
const validaNome = (nome) => {
  validaString(nome, "Nome");
}

/**
 * Valida um campo obrigatorio de email. Lanca excessoes em caso de erros de validacao detectados.
 * @param {any} email um email a ser validado
 * @param {any} verificaFormato booleano que indica se o formato do email sera validado
 * @returns {void}
 */
const validaEmail = (email, verificaFormato = false) => {
  validaString(email, "Email");
  if (verificaFormato) {
    const formato = new RegExp("[A-Za-z0-9_]@[A-Za-z]\.[A-Za-z]{2,3}");
    if (!formato.test(email)) throw new ErroFormato("Email deve seguir formato 'abc@def.com'.");
  }
}

/**
 * Valida um campo obrigatorio de idade. Lanca excessoes em caso de erros de validacao detectados.
 * @param {any} idade uma idade a ser validada
 * @returns {void}
 */
const validaIdade = (idade) => {
  if (!Number.isInteger(idade)) throw new TypeError("Idade deve ser do tipo inteiro.");
  if (idade <= 18) throw new RangeError("Idade deve ser maior que 18.");
}

/**
 * Valida um campo opcional de telefone. Lanca excessoes em caso de erros de validacao detectados.
 * @param {any} telefone um telefone a ser validado
 * @returns {void}
 */
const validaTelefone = (telefone) => {
  const formato = new RegExp("^\\([0-9]{2}\\)\\s?9?[0-9]{4}\\-?[0-9]{4}$");
  if (telefone && !formato.test(telefone)) throw new ErroFormato("Telefone deve seguir formato (NN)NNNNN-NNNN ou (NN) NNNNN-NNNN.");
}

/**
 * Valida um cliente. Lanca excessoes em caso de erros de validacao detectados.
 * @param {any} cliente um objeto cliente a ser validado
 * @returns {void}
 */
const validaCliente = (cliente) => {
  const { id, nome, email, telefone, idade, ...args } = cliente;
  try {
    validaNome(nome);
    validaEmail(email);
    validaIdade(idade);
    validaTelefone(telefone);
  } catch (erro) {
    const novoErro = { name: erro.name + " no cliente " + id, message: erro.message, ...erro };
    throw novoErro;
  }
}

/**
 * Valida uma lista de clientes. Lanca excessoes em caso de erros de validacao detectados.
 * @param {any} clientes um array de clientes a ser validado
 * @returns {void}
 */
const validaClientes = (clientes) => {
  if (clientes.length === 0) throw new RangeError("O vetor de clientes nao pode ser vazio");
  clientes.forEach((cliente) => validaCliente(cliente));
}

/**
 * Calcula a media de idade dos clientes.
 * @param {any} clientes um array de clientes
 * @returns {any} o valor medio das idades dos clientes
 */
const calculaMediaIdade = (clientes) => {
  return clientes.reduce((acc, { idade }) => acc + idade, 0) / clientes.length;
}

/**
 * Constroi o mapa de compras por cliente
 * @param {any} clientes um array de clientes
 * @returns {any} um mapa de compras por cliente
 */
const montaMapaCompras = (clientes) => {
    return clientes.reduce((acc, { id, compras }) => acc.set(id, compras), new Map());
}

/**
 * Calcula a media de compras de todos os clientes (a soma de todos os valores de itens dividido pela quantidade total de itens).
 * @param {any} clientes um array de clientes
 * @returns {any} o valor medio de compras (itens)
 */
const calculaMediaCompras = (clientes) => {
  const itens = clientes.reduce(
    (acc, { compras }) => {
      acc.valorTotal += calculaTotalCompras(compras);
      acc.quantidade += compras.length;
      return acc;
    },
    { valorTotal: 0, quantidade: 0 }
  );

  return itens.valorTotal / itens.quantidade;
}

/**
 * Calcula o valor total de uma compra (a soma dos valores de todos os itens).
 * @param {any} compra um array de itens
 * @returns {any} o valor total de uma compra
 */
const calculaTotalCompras = (compra) => {
  return compra.reduce((acc, { valor }) => acc + valor, 0);
}

/**
 * Funcao principal 
 * @param {any} acao um numero que indica qual funcionalidade sera executada
 * @param {any} clientes um array de clientes
 * @returns {any} o resultado da funcionalidade escolhida
 */
const main = (acao, clientes) => {
  try {
    switch (acao) {
      case 1:
        validaClientes(clientes);
        return calculaMediaIdade(clientes);
      case 2:
        validaClientes(clientes);
        return montaMapaCompras(clientes);
      case 3:
        validaClientes(clientes);
        return calculaMediaCompras(clientes);
      default:
        throw new RangeError("Acao invalida. A acao deve ser um numero entre as opcoes: 1, 2, 3.");
    }
  } catch (erro) {
    console.error(`${erro.name}: ${erro.message}`);
  }
}

// ************ 3. Testes ************

console.log("*** Funcionalidade 1 ***");
const mediaIdade = main(1, clientes);
if (mediaIdade) console.log(mediaIdade);

console.log("*** Funcionalidade 2 ***");
const mapaCompras = main(2, clientes);
if (mapaCompras) console.log(mapaCompras);

console.log("*** Funcionalidade 3 ***");
const mediaCompras = main(3, clientes);
if (mediaCompras) console.log(mediaCompras);
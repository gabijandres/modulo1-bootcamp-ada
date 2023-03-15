// No desenvolvimento de APIs
// preciamos garantir que os dados de entrada
// farao sentido para o nosso sistema.
// em uma rota de cadastro de usuario, vamos receber um
// objeto JSON contendo os seguintes campos:
// nome <string>, idade <inteiro>, telefone <string>
// precisamos validar se esses dados estao de acordo com os tipos desejados.
// caso nao estejam, soltar uma excessao descrevendo o erro e o campo do erro.

const user1 = {
    nome: null,
    idade: 20,
    telefone: "(11)999999999"
}

const user2 = {
    nome: "laura heloisa",
    idade: "29",
    telefone: "(34)999999999"
}

const user3 = {
    nome: "Augusto Cesar",
    idade: 30.3,
    telefone: "TELEFONE"
}

const user4 = {
    nome: "Eliane Louise",
    idade: 40,
    telefone: "(11) 98382-9832"
}




// Implementar expressao regular para checagem do campo de telefone.
// deve seguir o formato (NN)NNNNN-NNNN (espaco opcional entre o ddd e o numero,
// o numero e a primeira parte do telefone pode ter 4 ou 5 digitos e o hifen tambem opcional.)
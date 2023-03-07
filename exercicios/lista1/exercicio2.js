/*
    * Modulo 01 - Logica de programacao I (JS/TS) - Bootcamp Ada
    * Exercicio 2 - Lista 1
    * #968 - Gabriele Jandres Cavalcanti
*/

// 1. Estruturas de dados
const usuarios = [ 
    {
      "primeiroNome": "Antonio",
      "segundoNome": "Freitas",
      "terceiroNome": "Oliveira",
      "age": 35
    },
    {
      "primeiroNome": "Manuel",
      "segundoNome": "Guedes",
      "terceiroNome": "Peixoto",
      "age": 23
    }        
];

// 2. Funcoes
const montarNomesCompletos = (usuarios) => {
    const usuariosEmNovoFormato = usuarios.map(usuario => {
        return { 
            "nome": usuario.primeiroNome + " " + usuario.segundoNome + " " + usuario.terceiroNome,
            "age": usuario.age
        }
    });

    return usuariosEmNovoFormato;
}

// 3. Testes
console.log("***** Teste - Exercicio 02 *****\n Novo vetor de usuarios: \n", montarNomesCompletos(usuarios));
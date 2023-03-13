// Mais funcoes de ordem superior


const vetor = ["f", "b", "a", "d", "c", "e"];


// vetor.forEach((elemento) => console.log(elemento));


const idxElemento = vetor.findIndex((el) => el === "d");

// console.log(idxElemento);


// const sorted = vetor.sort();
// console.log(sorted);

const pessoas = [
    {
        nome: "Luiz Julio",
        id: 22
    },
    {
        nome: "Davi Marcelo",
        id: 6
    },
    {
        nome: "Augusto César",
        id: 30
    },
    {
        nome: "Laura Heloisa",
        id: 1
    },
    {
        nome: "Eliane Louise",
        id: 33
    },
];

// const pessoasClassificadas = pessoas.sort((pessoa1, pessoa2) => pessoa1.id > pessoa2.id ? 1 : -1);
// console.log(pessoasClassificadas);


// Exercicio:
// Escrever uma funcao que classifica as pessoas  por ordem alfabetica


// Composicao de funcoes

const dobro = (x) => 2*x;

const metade = (x) => x/2;

// console.log(metade(dobro(dobro(2))));

function compose(fn1, fn2) {
    return function() {
        return fn2(fn1(...arguments));
    }
}


const lowerCase = (str) => str.toLowerCase();

// console.log(lowerCase("AAAAAAAAAA"));

const quadruplo = compose(dobro, dobro);

// console.log(quadruplo(2));


// Exercicio
// Escrever a funcao compose para que possamos passar um numero qualquer de funcoes


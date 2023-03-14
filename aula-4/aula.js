// Mais funcoes de ordem superior

const vetor = ["f", "b", "a", "d", "c", "e", "d"];

let v = [];
// vetor.forEach((elemento) => {
//     console.log(elemento);
//     v.push(elemento);
// });

// console.log(v);



// const idxElemento = vetor.findIndex((el) => el === "z");

// console.log(idxElemento);

// console.log([1,5,2,3,10].sort());


// const sorted = vetor.sort();
// console.log(sorted);

const sortNum = [10, 2, 57, 7, 11].sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    if (a === b) return 0;
});

const sortNum2 = [10, 2, 57, 7, 11, 10].sort((a, b) => a-b);

// console.log(sortNum2);

// Mais metodos para percorrer arrays
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

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
        nome: null,
        id: 22
    },
    {
        nome: "augusto César",
        id: 32
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

// const pessoasClassificadas = pessoas.sort((pessoa1, pessoa2) =>
//     pessoa1.id > pessoa2.id ? -1 : 1);
// console.log(pessoasClassificadas);


// Exercicio:
// Escrever uma funcao que classifica as pessoas  por ordem alfabetica.

function classificaPeloNome(pessoas) {
    return pessoas.sort((pessoa1, pessoa2) =>
    pessoa1.nome?.toLowerCase() > pessoa2.nome?.toLowerCase() ? 1 : -1);
    
}



// Composicao de funcoes



const metade = (x) => x / 2;



const concat = (str1, str2) => {
    return (str1 ?? "").concat(str2 ?? "")
};

const trim = (str) => str.trim();

// console.log(trim(concat("   234", "ascf    ")));



function compose(fn1, fn2) {
    return function (args) {
        return fn2(fn1(args));
    }
}

const dobro = (x) => 2 * x;
// console.log(dobra(dobra(2)));
const quadruplo = compose(dobro, dobro);

console.log(quadruplo(2));

// console.log(quadruplo(2));



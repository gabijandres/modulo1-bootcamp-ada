// Criar um sistema de deduplicacao para uma agenda de contatos.
// As regras para a deduplicacao sao:
// Caso os nomes dos contatos sejam iguais (case insensitive), eles sao a mesma pessoa,
// Caso os emails sejam identicos (case insensitive), eles sao a mesma pessoa,
// O vetor resultante deve conter somente um objeto de contato por pessoa com o maior numero
// de dados dessa pessoa possivel.

//No nosso caso, os dados de contato sao consistentes.

// pesquisar como converter strings para caixa alta ou caixa baixa

function deduplicar(contatos) {

}

const contatos = [
    {
        nome: null,
        email: "laura.heloisa@teste.com",
        telefone: null
    },
    {
        nome: "Luiz Julio",
        email: "luiz.julio@teste.com",
        telefone: null
    },
    {
        nome: "luiz JULIO",
        email: null,
        telefone: "11987654321"
    },
    {
        nome: null,
        email: "davi.marcelo@teste.com",
        telefone: null
    },
    {
        nome: "davi marcelo",
        email: "Davi.Marcelo@teste.com",
        telefone: null
    },
    {
        nome: "Augusto Cesar",
        email: "augusto.cesar@teste.com",
        telefone: null
    },
    {
        nome: "ELIANE LOUISE",
        email: null,
        telefone: "81988888888"
    },
    {
        nome: null,
        email: "augusto.Cesar@teste.com",
        telefone: null
    },
    {
        nome: "auguSto cesar",
        email: null,
        telefone: "34999991234"
    },
    {
        nome: "laura heloisa",
        email: "laura.heloisa@teste.com",
        telefone: "2399999999"
    },
    {
        nome: "Eliane Louise",
        email: null,
        telefone: "81988888888"
    },
]
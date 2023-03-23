## Exercicio nao obrigatorio, subi ele por pedido de alunos


## Enunciado

A funcao deve receber dois argumentos, uma matriz bi-dimensional de letras e uma palavra. O sistema deve tentar encontrar a palavra na matriz conectando letras adjacentes (horizontal, vertical ou diagonal), sendo que a letra em uma posicao especifica na matriz pode ser utilizada somente uma vez.

Enquanto uma palavra pode conter letras repetidas, elas devem ser encontradas em posicoes diferentes na matriz.

A funcao deve retornar true caso encontre a palavra na matriz e falso caso nao encontre.


## Matriz

```javascript
[
    ['t' 'h' 'i' 's' 'i' 's' 'a']
    ['s' 'i' 'm' 'p' 'l' 'e' 'x']
    ['b' 'x' 'x' 'x' 'x' 'e' 'b']
    ['x' 'o' 'g' 'g' 'l' 'x' 'o']
    ['x' 'x' 'x' 'D' 'T' 'r' 'a']
    ['R' 'E' 'P' 'E' 'A' 'd' 'x']
    ['x' 'x' 'x' 'x' 'x' 'x' 'x']
    ['N' 'O' 'T' 'R' 'E' '-' 'P']
    ['x' 'x' 'D' 'E' 'T' 'A' 'E']
]

```

## Palavras para testes e o output esperado


| Palavra       | Resultado |
|---------------|-----------|
| this          | true      |
| not           | false     |
| board         | true      |
| simple        | true      |
| REPEATED      | false     |
| NOTRE-PEATED  | true      |
| yours         | true      |
| sana          | false     |
| san           | true      |
| danger        | true      |
| help          | true      |
| vomit         | false     |
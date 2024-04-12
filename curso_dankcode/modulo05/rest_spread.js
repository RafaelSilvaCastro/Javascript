/* rest
var nomes = [
    {
        nome:'Joao'
    },
    {
        nome: 'Felipe'
    }
]

const objetos = [...nomes,{
    nome: 'Guilherme'
}];

console.log(objetos);
*/

// spread

function testes(...numero){
    console.log(numero);
}

testes([1,2,3,4,5]);
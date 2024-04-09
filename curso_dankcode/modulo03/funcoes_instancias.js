function Pessoa(){
    this.nome = 'Rafael';
}

var pessoa = new Pessoa();
var pessoa2 = new Pessoa();

pessoa.nome = 'Joao'

//-----------------------

function Animal(nome,peso){
    if(nome == undefined){
        nome = 'Cachorro';
    }

    if(peso == undefined){
        peso = '5kg'
    }
    this.nome = nome;
    this,peso = peso;
}

animal = new Animal('Gato');

console.log(animal.nome);
console.log(pessoa2.nome);
    
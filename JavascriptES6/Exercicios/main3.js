const arr = [1,3,4,5,6];

const newArray = arr.map(item => item * 2);

console.log(newArray)

const teste = () => ({nome: 'betriz'})


const soma = (a = 3, b = 6) => a + b;

console.log(soma())

//Desestruturação
const usuario = {
    nome: 'Beatriz',
    idade: 21,
    endereco:{
        cidade:'Avaré',
        estado: 'SP'
    },
};

// const nome = usuario.nome;
// const idade = usuario.idade;
// console.log(`Nome: ${usuario.nome}, idade: ${usuario.idade}`)

const {nome, idade, endereco: {cidade}} = usuario;

console.log(`Nome: ${nome}, idade:${idade} cidade: ${cidade}`)

function mostrar({nome, idade}){
    console.log(nome)
    console.log(idade)
}

mostrar(usuario)
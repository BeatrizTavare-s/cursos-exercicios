//OPERADORES REST/SPREAD

const usuario = {
    nome: 'Beatriz',
    idade:23,
    empresa:'Teste'
};

const {nome, ...resto } = usuario;

console.log(resto)

const arr = [1,2,3,4,5]

const [a,b, ...c] = arr

console.log(c)

function soma(...params){
    return params.reduce((total, next)=> total + next)
}
console.log(soma(1,3,4))

//SPREAD

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [...arr1, ...arr2]

console.log(arr3)

const usuario1 ={
    nome: 'Beatriz',
    idade: 21,
    empresa: 'teste'
}

const usuario2 = {...usuario1, nome:'outro'};

console.log(usuario2)
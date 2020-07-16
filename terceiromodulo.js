/*Exercícios: Módulo 04
1º exercício
Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
idade o resultado deve cair no .then, caso contrário, no .catch
**/

var input = document.createElement('input');
var btn = document.createElement('button')
var textbtn = document.createTextNode('Veja a resposta')
var body = document.querySelector('body')

btn.appendChild(textbtn)
body.appendChild(input)
body.appendChild(btn)

function checaIdade(idade) {
 // Retornar uma promise
    return new Promise(function(resolve, reject){
        if(idade > 18){
            resolve('é maior')
        }else{
            reject('não é maior')
        }
    })


}



//  btn.addEventListener("click", alert('e'), false);
// btn.onclick = function() {
//     checaIdade(input.value)
//     .then(function() {
//     console.log("Maior que 18");
//     })
//     .catch(function() {
//     console.log("Menor que 18");
//     })
 
// }


/**2º exercício
Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
URL de exemplo: https://api.github.com/users/diego3g/repos
Basta alterar "diego3g" pelo nome do usuário
*/


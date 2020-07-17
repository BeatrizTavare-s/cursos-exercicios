/*Exercícios: Módulo 04
1º exercício
Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
idade o resultado deve cair no .then, caso contrário, no .catch
**/

var input = document.createElement('input');
var btn = document.createElement('button')
var textbtn = document.createTextNode('Veja a resposta')
var li = document.createElement('li')
var ul =  document.querySelector('ul')
var body = document.querySelector('body')
var img = document.createElement('img')

ul.appendChild(li)
btn.appendChild(textbtn)
body.appendChild(input)
body.appendChild(img)
body.appendChild(btn)

var lista = [ 
    // login = 'Teste',
    avatar=  ''
]


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
URL de exemplo: https://api.github.com/users/betr-v/repos
Basta alterar "diego3g" pelo nome do usuário
*/

btn.onclick = function(){
axios.get(`https://api.github.com/users/${input.value}`)
   .then(function(response){
    // lista.push(response.data.login);
    img.src = response.data.avatar_url;
    lista.push(response.data.avatar_url);
       console.log(response)
   })
   .catch(function(error){
       console.warn(error)
   })
   
 
   li.innerHTML = textContent = lista

}

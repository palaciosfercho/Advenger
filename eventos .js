const h1= document.querySelector('h1');
const form = document.querySelector('#form');
const numero1 = document.querySelector('#numero1');
const numero2 = document.querySelector('#numero2');
const btnS = document.querySelector('#btnS');
const btnR = document.querySelector('#btnR');
const Rsultado = document.querySelector('#Rsultado');

form.addEventListener('submit', sumar);
/*btnR.addEventListener('click', restar);*/

function sumar(event){
    event.preventDefault();
    let sum = 1*(numero1.value + numero2.value);
    Rsultado.innerText ="El resultado es:" + sum;
}
/*function restar(){
    let res = Number(numero1.value) + Number(numero2.value);
    Rsultado.innerText = ( res);
}*/

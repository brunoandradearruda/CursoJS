let num1 = prompt('Digite um númeto');
let num2 = prompt('Digite outro númeto');

num1 = Number(num1); //Também poderia usar o parseInt ou parseFloat
num2 = Number(num2);
const resultado = num1 + num2;

//num1 = parseFloat (num1)
//num2 = parseFloat(num2)

console.log(num1 + num2);
alert ('O resultado da sua conta é: ' +  resultado);  //
alert (`O resultado da sua conta é: ${num1+num2}`);

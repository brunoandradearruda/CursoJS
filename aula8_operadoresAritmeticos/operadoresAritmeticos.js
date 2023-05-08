const num1 = 10;
const num2 = 3;
const num3 = 5;
const num4 = parseInt('5'); //Passa uma String para Número Inteiro.
const num5 = parseFloat('10.5'); //Passa uma String para Número Flutuante.

console.log(typeof (num4));
console.log(typeof (num5));

const somaTotal = num1 + num2; //Adição
const potenciacao = num1 ** num2; //Potenciação
const restoDivisao = num1 % num2; //Resto da Divisão
const divisao = num1 / num2; //Divisão
let contadorIncremento = 2; //Operador contador não se usa uma CONST, pois o valor não pode ser fixo.
let contadorDecremento = 2; //

console.log('----------------------------------------')

let valor1 = 2;
let valor2 = 3;
let soma = valor1 += valor2; //Operador de atribuição +
let multiplicacao = valor1 *= valor2; //Operador de atribuição *

console.log ('A soma do VALOR1 + VALOR2, é',soma);
console.log ('A multiplicacao do VALOR1 + VALOR2, é',multiplicacao);

console.log('----------------------------------------')

/*console.log(somaTotal);
console.log(potenciacao);
console.log(restoDivisao);
console.log((num1 + num2) * num3);
console.log(num1 + num2 * num3);
console.log(divisao);


console.log('----------------------------------------')

//console.log (contador++); //Pós-Incremento
//console.log(++contador); //Pŕe-Incremento

console.log(++contadorIncremento); //Pré-Incremento
console.log(contadorIncremento++); //Pós-Incremento
console.log(contadorIncremento); //Resultado

console.log('----------------------------------------')

console.log(--contadorDecremento); //Pré-Decremento
console.log(contadorDecremento--); //Pós-Decremento
console.log(contadorDecremento); //Resultado*/

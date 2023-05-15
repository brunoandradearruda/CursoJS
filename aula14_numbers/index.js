let num1 = 15.991546299800;
let num2 = 2.5;
let num3 = '50';

//--------------//
let num4 = 0.7;
let num5 = 0.1;

/*num4 += num5;
num4 += num5;
num4 += num5;
num4 += num5;
num4 += num5;
num4 += num5;
num4 += num5; //1.4
num4 += num5; //1.5
num4 += num5; //1.6
num4 += num5; //1.7
num4 += num5; //1.8
num4 += num5; //1.9
num4 += num5; //2.0*/


num4 = ((num4*100) + (num5*100)) / 100; //Outra forma de resolver o resultado 0.799999999

console.log (num4)
console.log (Number.isInteger(num4));

//num4 = Number(num4.toFixed(2));
//console.log (num4+num5);


//--------------//

/*console.log(num1.toString() + num2); // Converte num1 para String apenas nesse trecho de código. O num1 continua sendo uma variável NUMBER.
console.log(num1 + num2); //Soma as variáveis num1 e num2
console.log(typeof num1); //Ver tipo da variável
console.log(num1.toString(2)); //Ver o num1 em binário.
console.log(num1.toFixed(2)); //Arredonda o número num1
console.log(Number.isInteger(num1));

num3 = parseFloat (num3); //convert o num3 para FLOAT
console.log (typeof num3);*/

//               0123456789101112131415161718192021
let umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString [1]); //Exibe a posição 1 da string - letra M
console.log(umaString.charAt(1)); //Mesma coisa, só que de outra forma
console.log(umaString.concat('',' lindo'));
console.log(`${umaString} em um lindo dia`);
console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('o', 4));
console.log(umaString.lastIndexOf('U', 3));
console.log(umaString.match(/[a-z]/g)); //A flag G faz um array e encontra todas a lestras minúsculas. 
console.log(umaString.match(/[a-z]/)); //
console.log(umaString.search(/[a-z]/g)); //Retorna o índice,no caso o número 1
console.log(umaString.search(/[x]/g)); //Encontrar a letra X no índice
console.log(umaString.replace('rato', 'gato')); //Substituir a palavra UM para OUTRA.
console.log(umaString.replace(/r/, '#')); //substituir o R por #
console.log(umaString.replace(/r/g, "#")); //A flag G substitui todos os R por #
console.log(umaString.length); //Contabiliza a quantidade de todos os caracteres
console.log(umaString.slice(2, 6)); //Contabiliza por posição
console.log(umaString.slice(-5)); //Exibe os 5 últimos caracteres
console.log(umaString.slice(-5, -1)); //Exibe os 5 últimos caracteres, porém não exibe o último, que é o ponto.
console.log(umaString.split(""));
console.log(umaString.split("r")); //Não exibe os R da sentença
console.log(umaString.split(" ", 3)); //Exibe 3 resultados
console.log(umaString.toUpperCase(''));
console.log(umaString.toLowerCase(''));

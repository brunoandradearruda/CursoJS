let varA = "A"; //B
let varB = "B"; //C
let varC = "C"; //A

/*[varA, varB, varC] = [varB, varC, varA]*/ //Outra forma mais atual.

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);

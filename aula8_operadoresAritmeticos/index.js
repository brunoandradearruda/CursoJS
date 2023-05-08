const nome = 'Bruno';
const sobreNome = 'Arruda';
const idade = 80;
const peso = 80
const alturaEmM = 1.74;
let imc; /* peso/ (altura * altura)*/
let anoNascimento = 1989;

console.log ('O imc de', nome, sobreNome,'é', peso / (alturaEmM*alturaEmM),
'e sua idade é',anoNascimento,'.');

console.log('---------------------');

console.log (`O imc de', nome, sobreNome,'é', peso / (alturaEmM*alturaEmM),
'e sua idade é', anoNascimento.`); // A crase transforma tudo em String

console.log('---------------------');

console.log (`O imc de ${nome} ${sobreNome} é ${peso / (alturaEmM*alturaEmM)}
e sua idade é ${anoNascimento}.`); //Colocando $ e {}, podemos isolar as variáveis no código em crase


console.log (typeof (anoNascimento)); //Descobrir o tipo de variável.
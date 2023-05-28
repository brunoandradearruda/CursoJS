//Array         0        1         2
const aluno = ["Bruno", "Carlos", "Fernando", "Marcos", "João"];

//aluno.push ('Otávio');  //Inserir elemento no final do Array.
//aluno.unshift('Marcos');  // Inserir elemento (Marcos) no início do Array, "empurrando" Bruno para frente.
//aluno.unshift ('Michel'); // Dessa forma, o elemento Array Michel "empurra" Marcos para a frente e se inseri na posição ZERO.
//aluno.pop(); // Remove ultimo elemento do ARRAY, no caso, FERNANDO.
//aluno.shift();  // Remove elemtento inicial do ARRAY, no caso, Bruno.




console.log(aluno.slice(0, -1)); //Fatiamento do ARRAY, elimintando dos 2 utimos indices, ficando apenas BRUNO
console.log (aluno instanceof Array); //Saber se a instância se trata de um array.




//const removidoInicio = aluno.shift();
//const removidoFinal = aluno.pop ();

//delete aluno[1]; //Deletar ínice 1, no caso, CARLOS.

//console.log(removidoInicio);
//console.log(removidoFinal);
//console.log(aluno);



//aluno[0] = 'Eduardo';  //Adiciona um novo elemento no Array -- Eduardo-- no final
//console.log(aluno.length);
//console.log(aluno[0]);
//console.log(aluno[1]);
//console.log(aluno[2]);

//let numero = prompt("Digite um número");
//numero = Number(numero);

const numero = Number(prompt("Digite um número"));
const numeroTitulo = document.getElementById("numero-titulo");
const numeroTexto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;

numeroTexto.innerHTML = ''; // Limpa linhas cima e começa das linhas seguintes abaixo -- += esse sinal adiciona linha a linha.
numeroTexto.innerHTML += `<p>Raiza quadrade: ${numero ** 0.5}.</p>`;
numeroTexto.innerHTML += `<p> É NaN: ${Number.isNaN(numero)}.</p>`;
numeroTexto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
numeroTexto.innerHTML += `<p>Arredonda para baixo: ${Math.floor(numero)}.</p>`;
numeroTexto.innerHTML += `<p>Arredonda para cima: ${Math.ceil(numero)}.</p>`;
numeroTexto.innerHTML += `<p>Com duas casa decimais: ${numero.toFixed(2)}.</p>`;

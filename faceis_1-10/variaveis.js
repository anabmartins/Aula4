//Crie 3 variáveis com nomes de clientes:

var cliente1 = "Jorge";
var cliente2 = "Camila";
var cliente3 = "Sara";

//Crie 5 variáveis com nomes de comida:
var comida1 = "abacate";
var comida2 = "berinjela";
var comida3 = "uva";
var comida4 = "arroz";
var comida5 = "maçã";

//Crie 4 variáveis, 2 com nome e 2 com sobrenome. 
var nome1 = "Maria";
var nome2 = "Cristina";
var sobrenome1 = "Silva";
var sobrenome2 = "Castro";

//Mostre ao usuário os nomes com seus sobrenomes;
console.log(nome1, sobrenome1);
console.log(nome2, sobrenome2);

//Crie 6 variáveis booleanas 
//Usando o padrão “is+verbo”
var isEntrar = true;
var isLogar = false;
var isOnline = true;
var isAtivo = false;
var isVerdadeiro = true;
var isClicar = true;

//Crie 8 variáveis do tipo numérico:
var n1 = Math.floor(Math.random() * 1 + 1);
var n2 = Math.floor(Math.random() * 2 + 1);
var n3 = Math.floor(Math.random() * 3 + 1);
var n4 = Math.floor(Math.random() * 4 + 1);
var n5 = Math.floor(Math.random() * 5 + 1);
var n6 = Math.floor(Math.random() * 6 + 1);
var n7 = Math.floor(Math.random() * 7 + 1);
var n8 = Math.floor(Math.random() * 8 + 1);

//Crie 5 constantes numéricas:
const pi = 3.14;
const e = 2.71;
const r2 = 1.41;
const r3 = 1.73;
const gn = 1.61;

//Subtraia duas variáveis numéricas:
const diferenca = n1 - n2;

//Divida duas variáveis numéricas:
const divisao = n3 / n1;

//Multiplique duas variáveis numéricas:
const multiplicacao = n5 * n2;

//Mostre o resto da divisão inteira de um número:
num1 = Math.floor(78)
num2 = Math.floor(5)
resto = num1 % num2;
console.log(resto)

//Difíceis - teste
//Com base em um número informado pelo usuário, informe ao usuário 5% do valor:
function Converter() {
    var valor = document.getElementById("valor").value;
    alert(parseFloat(valor) * 0.05 + " é 5% do valor informado!");
}

//Calcule a raiz quadrada de um número:
var r9 = Math.sqrt(9);
var ra2 = Math.sqrt(2);
console.log(r9);
console.log(ra2);

//Calcule a potenciação informando a base e o expoente:
var potencia = Math.pow(7, 2);
console.log(potencia);

//Crie 4 variáveis e mostre ao usuário a soma dos totais de caracteres:
var num1 = 7;
var num2 = 8.5;
var num3 = 22;
var num4 = 37.8;
var somaDosTotais = (num1 + num2 + num3 + num4);
console.log(somaDosTotais);

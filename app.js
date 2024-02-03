let nome = 'Luan';
console.log(`Olá, ${nome}!`);
alert(`Olá, ${nome}!`);

let linguagem = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(linguagem);

let valor1 = 5;
let valor2 = 6;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

let resultado2 = valor1 - valor2;
console.log(`A diferença de ${valor1} e ${valor2} é igual a ${resultado2}.`);

let idade = prompt('Qual sua idade?');
if (idade >= 18){
    console.log('Você é maior de idade.');
}else{
    console.log('Você é menor de idade.');
}

let numero = prompt('Digite um número: ');
if (numero == 0){
    alert('Número neutro.');
}else if (numero >= 1){
    alert('Número positivo.');
}else{
    alert('Número negativo.');
}

let contador = 1;
while (contador <= 10){
    console.log(contador);
    contador++;
}

let nota = 10;
if (nome >= 7){
    console.log('Aprovado');
}else{
    console.log('Reprovado');
}

let numero2 = Math.random() * 10;
    console.log(numero2);

let numero3 = ((parseInt)(Math.random() * 10 + 1));
    console.log(numero3);

    let numero4 = ((parseInt)(Math.random() * 1000 + 1));
    console.log(numero4);
    
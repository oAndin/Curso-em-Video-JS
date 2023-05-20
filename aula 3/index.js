// Criando uma Variável para armazenar os dados dentro da variável //
const nome
    // Codigo para receber o dado do usuário por um input //
    = window.prompt("Qual seu nome?");
const dado = window.confirm("Você quer receber sua mensagem?");
console.log(dado);
// Se a resposta para o window.confirm for positiva, teremos of if rodando devido ao ( === true )
if (dado === true) {
    // document é uma manipulação de documento (DOM) dentro do HTML 
    // Aqui temos o document.write, que irá escrever no HTML nosso dado com a manipulação desejada!
    document.write(`Olá, ${nome}! <br>`);
    document.write(`Seu nome tem ${nome.length} letras. <br>`);
    document.write(` Seu nome em maiúsculo é ${nome.toUpperCase()} e em minusculo é ${nome.toLowerCase()}! <br>`);
}
// caso a resposta para o window.confirm for negativa, teremos esse codigo, (else)
else {
    document.write(":C")
}
// Teste de variável de numeros Float (com decimais) atribuidos com uma sintaxe diferente!
let numPos = parseFloat(123e5); // Aqui o parseFloat transforma o número inteiro gerado pelo 123e5 que seria em 12300000 para 
// E aqui temos o número com casas decimais gerado pelo 123e-5 que resultaria em 0.00123 para apenas 0 
let numNeg = parseInt(123e-5);
let numPos2 = 123e5;
let numNeg2 = 123e-5;


// console.log() é um comando para exibir uma informação no console no Dev Tools!

console.log(numPos);
console.log(numPos2);
console.log(numNeg);
console.log(numNeg2);


// calculo com math.floor para saber o numero de semanas em uma ano
const semanaAno = Math.floor(365/7);
console.log(semanaAno);
const diasRestantes =  (365 % 7);
console.log(diasRestantes);
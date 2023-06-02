console.log("Hello World");

let nome = window.prompt("Qual é o seu nome?"); // Advinha o que essa linha faz? Vai, duvido!
window.alert(`É um prazer ${nome}`); // O ponto value estava me seguindo até aqui :( ;

// Começo do codigo que concatena os inputs

// let num1 = window.prompt("Digite o primeiro número:");
// let num2 = window.prompt("Digite o segundo número:");

// const sum = num1 + num2;

// window.alert(`A soma dos números é ${sum}`);

// Final do codigo que concatena os inputs

// Começo do codigo que soma os inputs


let n1 = Number.parseInt(window.prompt("Digite o primeiro número de verdade:"));
let n2 = Number.parseInt(window.prompt("Digite o segundo número de verdade:"));
sum1();
function sum1() {
    if (n1 != "none" && n2 != "none") {
        
        const soma1 = n1 + n2;
        return soma1;
    }
    else {
        window.alert("Você não colocou nenhum dado no campo!");
    };
};

const resultado = sum1;
console.log(resultado);
console.log(n1);
console.log(n2);
window.alert(`A soma dos números de verdade é ${resultado}`);

// Final do codigo que soma os inputs
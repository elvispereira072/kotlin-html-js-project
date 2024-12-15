// 1. Declaração de Variáveis
const name = "Elvis";
let idade = 28;

// 2. Funções
function saudacao(nome) {
    return `Olá, ${nome}!`;
}

// 3. Objetos e Arrays
const pessoa = {
    nome: "Elvis",
    idade: 28,
    aniversario: function() {
        this.idade++;
    }
};

pessoa.aniversario();

const lista = [1, 2, 3];
const conjunto = new Set(["A", "B", "C"]);
const mapa = new Map([["um", 1], ["dois", 2]]);

// 4. Manipulação de DOM
document.getElementById("meuElemento").innerText = "Olá, Mundo!";

// 5. Eventos
document.getElementById("meuBotao").addEventListener("click", function() {
    alert("Botão clicado!");
});

// 6. Promises e Async/Await
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function exemploAsync() {
    await esperar(1000);
    console.log("Async/Await!");
}

exemploAsync();

// 7. Manipulação de Strings
const texto = "JavaScript é incrível!";
const partes = texto.split(" ");

// 8. Controle de Fluxo
const resultado = idade > 18 ? "Adulto" : "Menor";
switch (idade) {
    case 28:
        console.log("Você tem 28 anos");
        break;
    default:
        console.log("Idade desconhecida");
}

// 9. Tratamento de Exceções
try {
    const numero = parseInt("123a");
} catch (e) {
    console.error("Erro de formato numérico");
}

// 10. Modularização
// arquivo.js
export const nome = "Elvis";
export function saudacao(nome) {
    return `Olá, ${nome}!`;
}

// main.js
import { nome, saudacao } from './arquivo.js';

console.log(saudacao(nome));

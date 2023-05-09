var variavelUm = 1;

let variavelDois = "variável dois";

const variavelOuConstante = 'e agr?';


console.log(variavelUm);
console.log(variavelDois);
console.log(variavelOuConstante);


// variavelOuConstante = "agr naod a mais ;(";
// console.log(variavelOuConstante);


// problema historico
const funcoes = [];


/*
var => tem escopo global, entao daria para chamar a variavel i fora do loop
let => nao tem escopo global, nao daria para chamar a variavel i fora do loop
*/
for (let i=0; i<10; i++) {
    funcoes.push(function () {
        console.log("i", i);
    });
}

// com let dará erro de referência, pois let nao tem escopo global
//console.log("valor final de i: ", i);

funcoes[0]();
funcoes[1]();
funcoes[2]();
funcoes[3]();

const nome3 = "Pedrinho";
console.log(nome3);
nome3 = "Silva";
console.log(nome3);
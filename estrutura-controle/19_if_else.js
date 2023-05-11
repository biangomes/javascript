const nota = 5;

if (nota >= 7) {
    console.log("Aprovado");
} else if (nota < 7 && nota >= 5) {
    console.log("recuperação");
} else {
    console.log("Reprovado");
}

// outra forma de utilizar o bloco de código acima
if (nota >= 7) console.log("aprovado!")
else console.log("reprovado");


// if ternario
console.log(nota >= 7 ? "Aprovado" : "Reprovado");
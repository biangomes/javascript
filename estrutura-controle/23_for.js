/**
 * for
 * 
 * for in -> mais utilizado para objetos
 * 
 * for of
 */
const numbers = [50, 100, 150, 200, 250, 300];

for (let i = 0; i < numbers.length - 1; i++) {
    console.log(numbers[i]);
}

console.log("======for in======");

// for in
for (const i in numbers) {
    console.log(i, "|", numbers[i]);
}

// for in com objetos
const pessoas = {
    nome: "Bea",
    idade: 24,
};

for (const i in pessoas) {
    console.log(i, ":", pessoas[i]);
}


console.log("======for of======");

// for of => retorna o valor do array. equivalente a fazer numbers[j]. Não é possível acessar for of com objeto
for (const j of numbers) {
    console.log(j);
}

console.log("==================");

for (const value of numbers) {
    if (value > 100) {
        continue;
    }
    console.log("break", value);
}

// constroi/define objeto
const pessoa = {
    nome: "Bea",
    sobrenome: "Nascimento",
    carro: {
        modelo: "Honda Civic 2009",
        marca: "Honda",
    },
};

// DESESTRUTURA um objeto
const { nome, sobrenome, carro: { modelo } } = pessoa;

console.log(nome, "\n", sobrenome, "\n =========", pessoa);


// destructuring de array
const valores = ["a", "b", "c"];
const [t, u, v] = valores;

console.log("===========");
console.log(t, u, v);
console.log("===========");
// ordem inversa?
console.log(v, u, t);       // sim

console.log("===========");
console.log(nome, sobrenome, modelo);
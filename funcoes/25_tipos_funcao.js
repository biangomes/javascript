// funcao literal
function somar(a, b) {
    return a + b;
}

// funcao anonima
const subtrair = function(a, b) {
    console.log(a+b);
}

// funcao nomeada
const multiplicar = function multiplicar(a, b) {
    console.log(a*b);
}

// funcao construtora
function Pessoa(nome) {
    this.nome = nome;
}

/**
 * arrow function
 *  mais curta
 *  retorno mais implícito
 *  "this" associado ao contexto principal
 */
const dividir = (a, b) => a/b;


somar(1,2);
subtrair(10, 1);
multiplicar(5, 5);
const pessoa = Pessoa("beatriz");
console.log(pessoa);
console.log(dividir(20,10));
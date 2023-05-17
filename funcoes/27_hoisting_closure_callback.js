/**
 * hoisting : pega as variáveis e funções e acoplam na memória, em tempo de execução
 */
imprimir("hoisting");

function imprimir(params) {
    console.log(params);
}

console.log(nome);
var nome = "bea";

/**
 * Closure : contexto onde a função/declaração foi criada
 */
function print() {
    const valor = "imprimindo...";
    return function () {
        return valor;
    };
}

console.log(print()());

/**
 * funções de callback : utilizadas em procedimentos assíncronos (rabbitmq, kafka por exemplo)
 */

function calcular(a, b, imposto) {
    return imposto(a, b);
}


function imposto(a, b) {
    return a * b;
}

console.log(calcular(10, 0.2, imposto));
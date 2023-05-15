// module.exports => quando trabalhamos no backend, em cima do node, o this. é tratado como um módulo privado
// this é module.exports
console.log(this === module.exports);

console.log(module.exports);

module.exports.pessoa = {nome: "João"};
console.log(module.exports);


function somar() {
    console.log(this === module.exports);
    console.log(this === global);
}

somar();    // retorna false, pq o "this." dentro do contexto de uma função tem outro valor. Dentro dessa função, tem exatamente o valor de "global"

function quemEhThis(obj) {
    console.log(this === obj);
}

const quemEThisComArrow = (obj) => {
    console.log(this === obj);
};

const pessoa = {
    imprimir: quemEhThis,
    imprimir2: quemEThisComArrow,       // quando usa arrow function, é mantido o contexto principal. Nesse caso, é o this do module.exports
};

pessoa.imprimir(pessoa);
pessoa.imprimir2(pessoa);
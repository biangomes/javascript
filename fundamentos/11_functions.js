console.log(typeof Object);

// syntax sugar para funcao
class Pessoa {}

console.log(typeof Pessoa);


function soma(a, b) {
    return a+b;
}


function somaPi(a=3.14,b=0) {
    return a+b;
}

console.log(soma(1,2));
console.log(somaPi());
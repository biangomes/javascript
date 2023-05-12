// sintaxe de uma funcao : function nome_funcao(param1, param2, ..., paramN) { //implementacao }
function somar() {
    console.log(somar);
}

function somarComParametro(a, b) {
   const result = a+b;
   return result;
}

function subtrair(a, b) {
    console.log(a-b);
    console.log(arguments);     // permite ver todos os parâmetros passados
}

function subtrairComValorDefault(a=10, b=50) {
    const result = a - b;
    return result;
}

somar();

console.log(somarComParametro(-10, -5));

subtrair(5, 10, 50);     // NaN => Not a Number

console.log(subtrairComValorDefault());
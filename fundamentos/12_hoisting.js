/**
 * Hoisting -> Içamento
 */

console.log(a);
var a = 1;
console.log(a);

soma(5,10);



function soma(a=1,b=2) {
    console.log(a+b);
}
function somar(a, b) {
    if (!a || !b) throw new Error("A ou B não informado");
}

try {
    somar(2, 4);
} catch(e) {
    console.log(e.message);
} finally {
    console.log("finally");
}
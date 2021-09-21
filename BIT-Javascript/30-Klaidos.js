function klaiduGeneratorius() {
    const sk = Math.random();
    if (sk < 0.5) {
        throw new Error("sugeneravau klaida, nes " + sk);
    }
    return sk;
}

function tustiVartai() {
    console.log("pries tustiVartai");
    let rez = klaiduGeneratorius();
    console.log("po tustiVartai");
    return rez;
}

function svetimasSavoKomandoj() {
    try {
        console.log("pries svetimasSavoKomandoj");
        let rez = tustiVartai();
        console.log("po svetimasSavoKomandoj");
        return rez;
    }
    catch (err) {
        const e = new Error("pakeiciau kamuoli ir paleidau toliau");
        e.cause = err;
        throw e;
    }
}

console.log("pardzia");
try {
    console.log("pries generatoriu");
    console.log(svetimasSavoKomandoj());
    console.log("po generatoriaus");
}
catch (err) {
    console.log("pagavau klaida", err);
}
finally {
    console.log("VISADA suveiks");
}
console.log("pabaiga");

// function skaiciuSuma(a, b) {
//     if (typeof a !== "number" || typeof b !== "number") {
//         throw new Error("parametrai ne skaiciai");
//     }
//     let suma = 0;
//     for(let i = a; i <= b; i++) {
//         suma +=i;
//     }
//     return suma;
// }

// try {
//     console.log(skaiciuSuma(5, 7));
//     console.log(skaiciuSuma("ate", "labas"));
//     console.log("sitas neivyks, nes pries tai buvo klaida");
// }
// catch (err) {
//     console.log("pagavau klaida", err);
// }
// finally {
//     console.log("Sitas VISADA suveiks");
// }
// console.log(skaiciuSuma(-1, 0));

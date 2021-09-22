const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function skaiciausIvedimas(msg) {
    return new Promise((resolve, reject) => {
        rl.question(msg, data => {
            resolve(parseInt(data));
        });
    });
}

async function tekstoIvedimas(msg) {
    return new Promise((resolve, reject) => {
        rl.question(msg, data => {
            resolve(data);
        });
    });
}

function readFile(name, options) {
    return new Promise((resolve, reject) => {
        fs.readFile(name, options, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}

async function main() {
    // var sk = await skaiciausIvedimas("Ivesk skaiciu:");
    // var ksk = await skaiciausIvedimas("Ivesk kita skaiciu:");
    // console.log(sk + ksk);

    var v = await tekstoIvedimas("Ivesk varda:");
    console.log("Labas, ", v);

    rl.close();
}

main();

/*
paprasyti ivesti failo varda
perskaityti faila
jei perskaite be klaidu - atspausdinti teksta
jei klaidos - atspausdinti klaida

*)
paprasyti ivesti failo vardus (atskirtus tarpais)
pvz: Ivesk failu fardus: a.txt b.txt d.txt
suskaldot stringa per tarpa - gaunat masyva su failu pavadinimais
perskaitot visus failus nurodyta tvarka
jei perskaite be klaidu - kaupti teksta kintamajame
jei klaidos - atspausdinti klaida
pabaigoj atspausdinti sukaupta teksta


*/
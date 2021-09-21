async function vienas() {
    return 1;
}

async function du() {
    return 2;
}

function labasPoPauzes(kiek) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                resolve("labas");
            }, kiek);
        }
    );
}

async function klaiduGeneratorius() {
    const sk = Math.random();
    if (sk < 0.5) {
        throw new Error("sugeneravau klaida, nes " + sk);
    }
    return sk;
}

async function main() {
    let r = await vienas() + await du();
    console.log(r);

    // let r;
    // let p1;
    // let p2;
    // vienas()
    // .then( v => {
    //     p1 = v;
    //     return du();
    // })
    // .then(v => {
    //     p2 = v;
    // })
    // .then(() => {
    //     r = p1 + p2;
    //     console.log(r);
    // });


    // try {
    //     let rez = await klaiduGeneratorius();
    //     console.log(rez);
    // } catch (err) {
    //     console.log("pagavau klaida", err);
    // }
    // let l = await labasPoPauzes(5000);
    // console.log(l);
    // console.log("pabaiga");
    // klaiduGeneratorius().then( reiksme => {
    //     console.log("islukstenau ", reiksme);
    // }).catch ( err => {
    //     console.log("pagavau klaida", err);
    // });
}
main();


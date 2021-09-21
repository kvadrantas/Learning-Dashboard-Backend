console.log("Pradzia");
let p = new Promise(
    (resolve, reject) => {
        console.log("vykdau executor'iu");
        setTimeout( () => {
            console.log("Timeout'as prasidejo");
            if (Math.random() < 0.5) {
                resolve("Promisas patvirtintas");
            } else {
                reject("Promisas atmestas");
            }
            console.log("Timeout'as pasibaige");
        }, 10);
        console.log("baigiu executor'iu");
    }
);

console.log(p);

let p1 = p.then(
    value => {
        console.log("is then value", value);
    },
    err => {
        console.log("is then err", err);
    }
);

console.log("Pabaiga");

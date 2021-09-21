// console.log("Pradzia");
// let p = new Promise(
//     (resolve, reject) => {
//         console.log("vykdau executor'iu");
//         setTimeout( () => {
//             console.log("Timeout'as prasidejo");
//             if (Math.random() < 0.5) {
//                 resolve("Promisas patvirtintas");
//             } else {
//                 reject("Promisas atmestas");
//             }
//             console.log("Timeout'as pasibaige");
//         }, 10);
//         console.log("baigiu executor'iu");
//     }
// );

// let p1 = p.then(
//     value => {
//         console.log("is then value", value);
//         console.log("p", p);
//         console.log("p1", p1);
//         console.log("p2", p2);
//         console.log("p3", p3);
//         console.log("p4", p4);
//         console.log("---------");
//         return "p1 resolved";
//     }
// );
// let p2 = p1.then(
//     value => {
//         console.log("p", p);
//         console.log("p1", p1);
//         console.log("p2", p2);
//         console.log("p3", p3);
//         console.log("p4", p4);
//         console.log("---------");
//         console.log(`gavom reiksme ${value}`);
//     }
// );
// let p3 = p2.catch(
//     err => {
//         console.log("p", p);
//         console.log("p1", p1);
//         console.log("p2", p2);
//         console.log("p3", p3);
//         console.log("p4", p4);
//         console.log("---------");
//         console.log("is then err", err);
//     }
// );
// let p4 = p3.finally(
//     () => {
//         console.log("p", p);
//         console.log("p1", p1);
//         console.log("p2", p2);
//         console.log("p3", p3);
//         console.log("p4", p4);
//         console.log("---------");
//         console.log("Visada suveiks");
//     }
// );

// console.log("p", p);
// console.log("p1", p1);
// console.log("p2", p2);
// console.log("p3", p3);
// console.log("p4", p4);
// console.log("---------");

// console.log("Pabaiga");


//-------------------------------------
//-------------------------------------
//-------------------------------------

const fs = require("fs");

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

console.log("pradzia");

let allData = "";

let p = readFile("a.txt", {
    encoding: "utf-8"
});
let p1 = p.then(
    data => {
        console.log("perskaiciau faila a.txt");
        allData += data;
        return readFile("b.txt", {
            encoding: "utf-8"
        });
    }
);
let p2 = p1.then(
    data => {
        console.log("perskaiciau faila b.txt");
        allData += data;
        return readFile("c.txt", {
            encoding: "utf-8"
        });
    }
);
let p3 = p2.then(
    data => {
        console.log("perskaiciau faila c.txt");
        allData += data;
        return readFile("d.txt", {
            encoding: "utf-8"
        });
    }
);
let p4 = p3.then(
    data => {
        console.log("perskaiciau faila d.txt");
        allData += data;
        console.log(allData);
    }
)
let p5 = p4.catch(
    err => {
        console.log("nepavyko perskaityti failo");
        console.log(err);
    }
);

console.log("pabaiga");

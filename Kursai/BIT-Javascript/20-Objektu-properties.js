"use strict";

let zmogus = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    // pilnasVardas: "Jonas Jonaitis"
};
// Object.defineProperty(zmogus, "vardas", {
//     enumerable: false
// });

Object.defineProperty(zmogus, "pilnasVardas", {
    enumerable: true,
    configurable: true,
    get: function() {
        return this.vardas + " " + this.pavarde;
    },
    set: function(value) {
        let dalys = value.split(" ");
        this.vardas = dalys[0];
        this.pavarde = dalys[1];
    }
});

console.log(zmogus);
console.log(zmogus.pilnasVardas);
zmogus.vardas = "Petras";
console.log(zmogus);
console.log(zmogus.pilnasVardas);

zmogus.pilnasVardas = "Antanas Antanaitis";
console.log(zmogus);
console.log(zmogus.pilnasVardas);



// Object.defineProperty(zmogus, "pilnasVardas", {
//     enumerable: true,
//     configurable: true,
//     writable: false,
//     value: "Jonas Jonaitis"
// });


// console.log(zmogus);
// console.log(zmogus.pilnasVardas);
// console.log("------------");
// zmogus.pilnasVardas = "Petras Petraitis";
// console.log(zmogus);
// console.log(zmogus.pilnasVardas);
// console.log("------------");
// Object.defineProperty(zmogus, "pilnasVardas", {
//     configurable: false,
//     writable: true
// });
// delete zmogus.pilnasVardas;
// console.log(zmogus);
// console.log(zmogus.pilnasVardas);
// console.log("------------");
// zmogus.pilnasVardas = "Petras Petraitis";
// console.log(zmogus);
// console.log(zmogus.pilnasVardas);
// console.log("------------");
// delete zmogus.pilnasVardas;
// console.log(zmogus);
// console.log(zmogus.pilnasVardas);

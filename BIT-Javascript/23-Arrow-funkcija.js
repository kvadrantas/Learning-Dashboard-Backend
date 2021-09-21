let labas = function (vardas, pavarde) {
    console.log("Labas", vardas, pavarde);
    // return undefined;
};

let ate = (vardas, pavarde) => {
    console.log("Ate", vardas, pavarde);
    // return undefined;
};


// KIVECIANT FUNKCIJA ARROW JI NETURI arguments ir NETURI this

// --------------------------------------------------------------

// "use strict";

function Zmogus(vardas, pavarde) {
    this.vardas = vardas;
    this.pavarde = pavarde;
}

Zmogus.prototype.labas = function() {
    console.log("labas", this.vardas, this.pavarde);
    // return undefined;
};
Zmogus.prototype.ate = () => {  // sitaip daryti NEGALIMA !!!!
    console.log("ate", this.vardas, this.pavarde);
    // return undefined;
};

class ZmogusKlase {
    constructor(vardas, pavarde) {
        this.vardas = vardas;
        this.pavarde = pavarde;
    }

    labas() {
        console.log("labas", this.vardas, this.pavarde);
        // return undefined;
    };
    ate() { // cia bus normali funkcija (ne arrow)
        console.log("ate", this.vardas, this.pavarde);
        // return undefined;
    };
}

let z = new ZmogusKlase("Jonas", "Jonaitis");
z.labas();
z.ate();

let zm = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    labas: function() {
        console.log("labas", this.vardas, this.pavarde);
        // return undefined;
    },
    ate: () => {
        console.log("ate", this.vardas, this.pavarde);
        // return undefined;
    }
}

// zm.labas();
// zm.ate();

// let labas = function(vardas, pavarde) {
//     console.log("vardas", vardas);
//     console.log("pavarde", pavarde);
//     console.log("arguments", arguments);
//     console.log("this", this);
//     console.log("Labas", vardas, pavarde);
//     // return undefined;
// };

// let ate = (vardas, pavarde) => {
//     console.log("vardas", vardas);
//     console.log("pavarde", pavarde);
//     console.log("arguments", arguments);
//     console.log("this", this);
//     console.log("Ate", vardas, pavarde);
//     // return undefined;
// };
// ate("Jonas", "Jonaitis");

// // let pilnasVardas = (vardas, pavarde) => {
// //     return vardas + " " + pavarde;
// // };
// let pilnasVardas = (vardas, pavarde) => vardas + " " + pavarde;

// // let kvadratas = (a) => {
// //     return a * a;
// // };
// let kvadratas = a => a * a;

// let atsitiktinis = () => Math.trunc(Math.random() * 10 + 1);

// // labas("Jonas", "Jonaitis");
// console.log(arguments);
// console.log(this);
// console.log("=============");
// ate("Jonas", "Jonaitis");
// // console.log(pilnasVardas("Jonas", "Jonaitis"));
// // console.log(kvadratas(5));
// // console.log(atsitiktinis());
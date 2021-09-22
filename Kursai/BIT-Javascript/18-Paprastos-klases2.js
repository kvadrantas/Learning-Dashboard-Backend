// "use strict";

function Puodukas(spalva, turis) {
    this.spalva = spalva;
    this.turis = turis;
    this.kiekis = 0;
}

Puodukas.prototype.ipilk = function(kiek) {
    if (kiek <= 0) {
        return;
    }
    this.kiekis += kiek;
    if (this.kiekis > this.turis) {
        this.kiekis = this.turis;
    }
};

Puodukas.prototype.isgerk = function(kiek) {
    if (kiek <= 0) {
        return;
    }
    this.kiekis -= kiek;
    if (this.kiekis < 0) {
        this.kiekis = 0;
    }
};

Puodukas.prototype.ispilk = function() {
    this.kiekis = 0;
}

Object.defineProperty(Puodukas.prototype, "arPilnas", {
    enumerable: true,
    configurable: true,
    get: function() {
        return this.kiekis === this.turis;
    }
});

function Termosas(spalva, turis) {
    Puodukas.call(this, spalva, turis);
    this.temperatura = 20;
}

Termosas.prototype = Object.create(Puodukas.prototype);
Termosas.prototype.constructor = Termosas;
Termosas.prototype.super = Puodukas.prototype;

Termosas.prototype.pasildyk = function(kiek) {
    this.temperatura += kiek;
    if (this.temperatura > 80) {
        this.temperatura = 80;
    }
}

Termosas.prototype.ipilk = function(kiek) {
    this.super.ipilk.call(this, kiek);
    this.temperatura -= 5;
};


let t1 = new Termosas("zalias", 1000);
console.log(t1);

let t2 = Object.create(Termosas.prototype);
Termosas.call(t2, "melynas", 3000);

console.log(t2);

// t1.ipilk(100);
// console.log(t1);
// console.log(typeof t1.pasildyk);
// t1.pasildyk(5);
// console.log(t1);


// let p1 = new Puodukas("rudas", 250);
// console.log(p1);
// console.log(p1.arPilnas);

// let p2 = new Puodukas("baltas", 150);

// console.log(p1);
// console.log(p2);

// // console.log(p1.__proto__);

// p1.ipilk(100);
// p1.ipilk(-50);
// p1.isgerk(30);

// p2.ipilk(20);
// p2.ipilk(200);

// console.log(p1);
// console.log(p2);

// p1.isgerk(100);
// console.log(p1);

// // console.log(global);
// // let p3 = Puodukas("juodas", 500);
// // console.log(p3);
// // console.log(global);

// /*
// window
// global
// globalThis
// */

// console.log(typeof Puodukas);

/*
sukurti klase Zmogus su savybem
vardas
pavarde
gimimoMetai
amzius (get)
pilnas vardas (get/set)
funksionalumas
labas() -> atspausdinti Labas Vardas Pavadre


sukurti klase Studentas paveldeta nuo zmogaus
mokykla
kursas
labas() -> atspausdinti Labas Vardas Pavadre, mokausi Mokykla
peritiIKitaKursa(balai) -> balai gali buti (1..100) jei balai < 35 i kita kursa nepereina

sukurti ir su sena ir su nauja sintakse
*/

class Puodukas {

    constructor(spalva, turis) {
        this.spalva = spalva;
        this.turis = turis;
        this.kiekis = 0;
    }

    get arPilnas() {
        return this.kiekis === this.turis;
    }

    // set arPilnas(naujaReiksme) {
    //     /////
    // }

    ipilk(kiek) {
        if (kiek <= 0) {
            return;
        }
        this.kiekis += kiek;
        if (this.kiekis > this.turis) {
            this.kiekis = this.turis;
        }
    }

    isgerk(kiek) {
        if (kiek <= 0) {
            return;
        }
        this.kiekis -= kiek;
        if (this.kiekis < 0) {
            this.kiekis = 0;
        }
    }
}

class Termosas extends Puodukas {

    constructor(spalva, turis) {
        super(spalva, turis);
        this.temperatura = 20;
    }

    pasildyk(kiek) {
        this.temperatura += kiek;
        if (this.temperatura > 80) {
            this.temperatura = 80;
        }
    }

    ipilk(kiek) {
        super.ipilk(kiek);
        this.temperatura -= 5;
    }
}

let t1 = new Termosas("zalias", 1000);
console.log(t1);
t1.ipilk(100);
console.log(t1);


// let p1 = new Puodukas("rudas", 250);
// p1.ipilk(500);
// console.log(p1.arPilnas);

// let p2 = new Puodukas("baltas", 150);

// console.log(p1);
// console.log(p2);

// p1.ipilk(100);
// p1.ipilk(-50);
// p1.isgerk(30);

// p2.ipilk(20);
// p2.ipilk(200);

// console.log(p1);
// console.log(p2);

// p1.isgerk(100);
// console.log(p1);

// // let p3 = Puodukas("juodas", 500);
// console.log(Puodukas);
// console.log(typeof Puodukas);

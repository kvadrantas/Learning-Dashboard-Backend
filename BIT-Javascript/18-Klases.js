class Puodukas {

    constructor(spalva, turis) {
        this.spalva = spalva;
        this.turis = turis;
        this.kiekis = 0;
    }

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

let p1 = new Puodukas("rudas", 250);

let p2 = new Puodukas("baltas", 150);

console.log(p1);
console.log(p2);

p1.ipilk(100);
p1.ipilk(-50);
p1.isgerk(30);

p2.ipilk(20);
p2.ipilk(200);

console.log(p1);
console.log(p2);

p1.isgerk(100);
console.log(p1);

// let p3 = Puodukas("juodas", 500);
console.log(Puodukas);
console.log(typeof Puodukas);

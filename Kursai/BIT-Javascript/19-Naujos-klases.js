// // KLASES
// //------------------------------------
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

//------------------------------------


console.log('----------------------------');
class Zmogus {
    constructor(vardas, pavarde) {
      this.vardas = vardas;
      this.pavarde = pavarde;
    }
    
    amzius(gimimoData) {
      this.amzius = 2021 - gimimoData;
    }
    vaikai() {
      this.palikuonys = [];
      for (let i = 0; i < arguments.length; i++) {
        let vaikas = arguments[i].split(' ');
        // console.log(vaikas);
        this.palikuonys[i] = new Zmogus(vaikas[0], vaikas[1]);
      }
    }
  }
  
  
  
  
  let v1 = new Zmogus('Rolandas', 'Seputis');
  v1.amzius(1982);
  v1.vaikai('Lukne Seputyte', 'Rugile Seputyte', 'Kamile Seputyte');
  // v1.vaikai(3);
  console.log(v1);
  // console.log(v1.palikuonys[2]);
  
  
  
  
  Object.defineProperty(v1, 'description', {
    enumerable: true,
    configurable: true,
    get: function() {
      let vaikaiString = '';
      for (let i = 0; i < this.palikuonys.length; i++) {
        vaikaiString += this.palikuonys[i].vardas + ', ';
      }
      return `${this.vardas} is ${this.amzius} years old and has ${this.palikuonys.length} children: ${vaikaiString}`;
    }
  });
  
  console.log(v1.description);
  
  
  //------------------------------------------------------------------------------------------------------------
  
  

  
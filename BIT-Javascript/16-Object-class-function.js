//*************************************
// OBJECT - CLASS - FUNCTION
// NAUJU VARTOTOJU KURIMAS SU OBJEKTU, KLASE IR FUNKCIJA
// objektas - su vienu ir tuo paciu objektu galima sukurti tik viena vatotoja. Kurtdami kelis skirtingus
// kintamuosius v1 ir v2 ir priskirdami skirtingus argumentus realiai keiciam vieno ir to pacio objekto ypatybiu reiksmes.
// abu kintamieji vistiek nuves i ta pati objekta ir jame matysime paskutini pakeitima t.y. Jonas Jonaitis
//
// funkcija - tinka kurti nepriklausomus objektus su skirtingomis reiksmemis
//
// klases - irgi tinka kurti daugybei skirtingu vartotoju. Ji kaip ir apjungia objekta ir funkcija i viena.
//*************************************

// OBJEKTAS
let rolandas = {
    vardas: '',
    pavarde: '',
    naujasVartotojas(a, b) {
        this.vardas = a;
        this.pavarde = b;
        return this;
    }
}

console.log(rolandas);
let v1 = rolandas.naujasVartotojas('Rolandas', 'Seputis');
let v2 = rolandas.naujasVartotojas('Jonas', 'Jonaitis');
console.log(v1, v2);
console.log('---------------');

//------------------------------------
// FUNKCIJA
function newUser (a, b) {
    return {
        vardas: a,
        pavarde: b
    }
}
let v3 = newUser('Petras', 'Petraitis');
let v4 = newUser('Albinas', 'Albinaitis');
console.log(v3, v4);
console.log('---------------');

//------------------------------------
// KLASE
class newUser2 {
    constructor(a, b) {
        this.vardas = a;
        this.pavarde = b;
    }
}

let v5 = new newUser2('Petrute', 'Petraite');
let v6 = new newUser2('Zigmute', 'Zigmaite');
console.log(v5, v6);

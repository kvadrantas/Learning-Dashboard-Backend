//***********************************
// INSTANCE OF 
//***********************************

//***********************************
// ASINCHRONINES FUNKCIJOS
//***********************************

//***********************************
// CALLBACK EVENT LOOP
//***********************************

const fs = require("fs");

console.log("pradzia");

fs.readFile("b.txt", {
    encoding: "utf-8"
}, function(err, data) {
    if (err) {
        console.log("nepavyko perskaityti failo");
        console.log(err);
        return;
    }
    console.log("perskaiciau faila b.txt");
    console.log(data);
});

fs.readFile("a.txt", {
    encoding: "utf-8"
}, function(err, data) {
    if (err) {
        console.log("nepavyko perskaityti failo");
        console.log(err);
        return;
    }
    console.log("perskaiciau faila a.txt");
    console.log(data);
});

setTimeout(function() {
    console.log("dirbu");
}, 3000);
for (let i = 0; i < 5000000; i++) {
    for (let j = 0; j < 1000; j++) {
    }
}
console.log("pabaiga");


//-----------------------------------


//***********************************
// ARROW FUNKCIJOS
//***********************************

let labas = function(vardas) {
    console.log('Labas', vardas);
}

labas('Jonas');

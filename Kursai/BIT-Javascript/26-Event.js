const fs = require("fs");

console.log("pradzia");

let allData = "";
fs.readFile("a.txt", {
    encoding: "utf-8"
}, function(err, data) {
    if (err) {
        console.log("nepavyko perskaityti failo");
        console.log(err);
        return;
    }
    console.log("perskaiciau faila a.txt");
    allData += data;
    fs.readFile("b.txt", {
        encoding: "utf-8"
    }, function(err, data) {
        if (err) {
            console.log("nepavyko perskaityti failo");
            console.log(err);
            return;
        }
        console.log("perskaiciau faila b.txt");
        allData += data;
        fs.readFile("c.txt", {
            encoding: "utf-8"
        }, function(err, data) {
            if (err) {
                console.log("nepavyko perskaityti failo");
                console.log(err);
                return;
            }
            console.log("perskaiciau faila c.txt");
            allData += data;
            fs.readFile("d.txt", {
                encoding: "utf-8"
            }, function(err, data) {
                if (err) {
                    console.log("nepavyko perskaityti failo");
                    console.log(err);
                    return;
                }
                console.log("perskaiciau faila d.txt");
                allData += data;
                console.log("allData:", allData);
            });
        });
    });
});


// setTimeout(function() {
// }, 100);
console.log("pabaiga");

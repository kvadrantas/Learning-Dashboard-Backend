const fs = require("fs/promises");

console.log("pradzia");

let allData = "";

let p = fs.readFile("a.txt", {
    encoding: "utf-8"
});
let p1 = p.then(
    data => {
        console.log("perskaiciau faila a.txt");
        allData += data;
        return fs.readFile("b.txt", {
            encoding: "utf-8"
        });
    }
);

let p2 = p1.then(
    data => {
        console.log("perskaiciau faila b.txt");
        allData += data;
        return fs.readFile("c.txt", {
            encoding: "utf-8"
        });
    }
);

let p3 = p2.then(
    data => {
        console.log("perskaiciau faila c.txt");
        allData += data;
        return fs.readFile("d.txt", {
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

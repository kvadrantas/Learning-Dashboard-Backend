const fs = require("fs/promises");

console.log("pradzia");

let allData = "";

fs.readFile("a.txt", {
    encoding: "utf-8"
})
.then(
    data => {
        console.log("perskaiciau faila a.txt");
        allData += data;
        return fs.readFile("b.txt", {
            encoding: "utf-8"
        });
    }
)
.then(
    data => {
        console.log("perskaiciau faila b.txt");
        allData += data;
        return fs.readFile("c.txt", {
            encoding: "utf-8"
        });
    }
)
.then(
    data => {
        console.log("perskaiciau faila c.txt");
        allData += data;
        return fs.readFile("d.txt", {
            encoding: "utf-8"
        });
    }
)
.then(
    data => {
        console.log("perskaiciau faila d.txt");
        allData += data;
        console.log(allData);
    }
)
.catch(
    err => {
        console.log("nepavyko perskaityti failo");
        console.log(err);
    }
);

console.log("pabaiga");

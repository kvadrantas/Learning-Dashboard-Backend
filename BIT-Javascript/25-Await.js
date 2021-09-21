const fs = require("fs/promises");

async function main() {
  console.log("pradzia");
  try {
    let allData = await fs.readFile("a.txt", { encoding: "utf-8" }) +
      await fs.readFile("b.txt", { encoding: "utf-8" }) +
      await fs.readFile("c.txt", { encoding: "utf-8" }) +
      await fs.readFile("d.txt", { encoding: "utf-8" });
    console.log(allData);
  } catch (err) {
    console.log("nepavyko perskaityti failo");
    console.log(err);
  }
  console.log("pabaiga");
}

main();

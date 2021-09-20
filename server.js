// IMPORTS 
import {readdir} from "fs/promises";

// *****************************************************************************
// EXPRESS WEBSERVER IMPORT
// MAIN/DEFAULT WEB SERVER PARAMETERS
// import express from "express";
// const app = express();
// const PORT = 2000;    // Sets default website port
// app.listen(PORT, () => {
//   console.log(`Example app listening at http://localhost:${PORT}`);
// });
// app.use(express.static('./', {    // Like "Default Document" on ISS
//   index: ["index.html"]
// }));

// *****************************************************************************
// SSL

import express from "express";
import fs from "fs";
import https from "https";
import cors from "cors";
const app = express();
const PORTS = 3344;
const WEB = "./";

app.use(cors());
app.use(express.static('./', {    // Like "Default Document" on ISS
  index: ["index.html"]
}));
var privateKey = fs.readFileSync('./cert/private.key');
var certificate = fs.readFileSync('./cert/certificate.crt');

https.createServer({
    key: privateKey,
    cert: certificate
}, app).listen(PORTS, function() {
  console.log(`Server listening for https at https://rolandasseputis.lt:${PORTS}/BIT-SQL/json/filecontent:nd1.sql`)
});
// *****************************************************************************
//-----------------
// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'https://rolandasseputis.lt');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
//-----------------


// GET FILE LIST IN FOLDER 
const files = await readdir('./sql-nd');


// READ FILE CONTENT FROM FILE
let fileContent;

import fs1 from 'fs/promises';
async function calll(id) {
  try {
    return await fs1.readFile(`./sql-nd/${id}`, {encoding: "UTF-8"});
  }
  catch(error) {
    console.log('KLAIDA: ', error);
  }
}



// FILE CONTENT EXPORT IN JSON
app.get('/Bit-SQL/json/fileContent:id', async (req, res) => {
    fileContent = await calll(req.params.id.slice(1));
    res.set('Content-Type', 'application/json'); 
    res.send(JSON.stringify(fileContent));
});

// FILE LIST EXPORT IN JSON 
app.get('/Bit-SQL/json/files', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify(files))
  res.status(204).end();
});
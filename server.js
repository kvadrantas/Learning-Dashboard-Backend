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
let folder = '';
let files = '';

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
  console.log(`Server listening for https at https://learning.rolandasseputis.lt:${PORTS}/Learning-Dashboard/json/filecontent:nd1.sql`)
});
// *****************************************************************************
//-----------------
// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'https://learning.rolandasseputis.lt');

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


// GET FOLDER LINST - it will be courses list
const folders = await readdir('./Kursai');

// GET FILE LIST IN FOLDER - it will be cource content
async function getFiles() {
  return await readdir(`./Kursai/${folder}`);
};


// READ FILE CONTENT FROM FILE
let fileContent;

import fs1 from 'fs/promises';
import { Console } from "console";
async function calll(id) {
  try {
    return await fs1.readFile(`./Kursai/${folder}/${id}`, {encoding: "UTF-8"});
  }
  catch(error) {
    console.log('KLAIDA: ', error);
  }
}



// FILE CONTENT EXPORT IN JSON
app.get('/Learning-Dashboard/json/fileContent:id', async (req, res) => {
    fileContent = await calll(req.params.id.slice(1));
    res.set('Content-Type', 'application/json'); 
    res.send(JSON.stringify(fileContent));
});

// FOLDER LIST EXPORT IN JSON
app.get('/Learning-Dashboard/json/folders', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify(folders));
  res.status(204).end();
})

// FILE LIST EXPORT IN JSON 
app.get('/Learning-Dashboard/json/files:id', async (req, res) => {
  res.set('Content-Type', 'application/json');
  folder = (req.params.id).slice(1);
  // console.log('FOLDER ', folder);
  files = await getFiles();
  // console.log(typeof files, files);

  files.sort(function(a,b) {
      if ( parseInt(a.slice(0, a.search('-') + 1)) < parseInt(b.slice(0, b.search('-') + 1)) ) {
        return -1
      } else return 1
  });
  
  res.send(JSON.stringify(files));
  res.status(204).end();
});


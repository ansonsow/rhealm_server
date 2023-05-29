const express = require("express");
require("dotenv").config();
const app = express();
require('./models/db')
const bodyParser = require("body-parser");
const router = require('./routes');
// ADD THIS
var cors = require('cors');
const auth = require("./middleware/auth");
const path = require('path');
const https = require ('https');
const fs = require ('fs') 

// const chainPath = path.join(__dirname, '/fullchain.pem');
// const keyPath = path.join(__dirname, '/privkey.pem');
// const certPath = path.join(__dirname, '/cert.pem');



// const options = {
//   key: fs.readFileSync(keyPath, 'utf8'),
//   cert: fs.readFileSync(certPath, 'utf8'),
//   ca: fs.readFileSync(chainPath, 'utf8')
// };



app.use(cors());

const PORT = 8000;
app.set('port', process.env.PORT || PORT); 

app.use(express.static('public'));

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1", router); 

app.get('/', (req, res) => {
    res.send("haaaaaa")
});

app.get("/testAuth", auth.verifyToken, (req,res)=>{
    res.status(200).send("watup")
})

app.get("/testMng", auth.verifyManagerToken, (req,res)=>{
    res.status(200).send("watupMng")
})

app.get("/.well-known/:file",(req,res)=>{
    const fileName = req.params.file;
    const lfile = __dirname + './well-known/' + fileName;
    res.sendFile(lfile).status(200);
})



// var server = https.createServer(options, app);

// server.listen(8443, ()=>{
//     console.log("we https")
// })

app.listen(PORT, ()=>{
    console.log("app started on port "+ PORT);
})


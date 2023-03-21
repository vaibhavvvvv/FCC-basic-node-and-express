
let express = require('express');
let app = express();

let bodyParser = require('body-parser');

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.path} - ${req.ip}`)
//   next()
// })

// app.get("/now", (req, res, next) => {
//   req.time = new Date().toString();
//   next();
// }, (req, res) => {
//   res.json({ "time": req.time });
// })

// app.get("/:word/echo",(req,res)=>{
//   res.json({"echo": req.params.word})
// })

// app.route("/name").get((req,res)=>{
//   const firstname = req.query.first
//   const lastname = req.query.last
//   res.json({'name': req.query.first req.query.last})
// }).post((req,res)=>{
  
// })

//10th challenge
// app.get("/name",(req,res)=>{
//    res.json({'name': req.query.first +" "+ req.query.last})
// })

//11th challenge
app.use(bodyParser.urlencoded({extended: false}))

//12th challenge
app.post("/name",(req,res)=>{
   res.json({'name': req.body.first +" "+ req.body.last})
})

const mySecret = process.env['MESSAGE_STYLE']

absolutePath = __dirname + '/views/index.html';
app.get("/", (req, res) => { res.sendFile(absolutePath) });

path = __dirname + '/public'
app.use('/public', express.static(path))

// app.get("/json", (req, res) => {
//   if (mySecret === "uppercase") {

//     res.json({ "message": "HELLO JSON" })
//   }
//   else {
//     res.json({ "message": "Hello json" })
//   }
// })

// app.get("/", (req, res) => { res.send('Hello Express'); });



































module.exports = app;

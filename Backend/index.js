const express = require('express')
const cors = require("cors");
const mysql = require('mysql2')
//const bodyParser = require('body-parser');
const app = express()
const port = 3000
app.use(express.json()); //utilizes the body-parser package
app.use(express.urlencoded({extended: true}));
app.use(cors({
origin: "*"
}));



app.post('/seller_auth', (req, res) => {
    console.log(req.body);
    res.send("hello");
    
  })
  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
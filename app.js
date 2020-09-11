const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const ehb = require("express-handlebars"); 
const app = express();

//MongoDb connection
mongoose.connect('mongodb://localhost:27017/easypress',{ useNewUrlParser: true })
.then(response => {
    console.log("mogodb connected");
}).catch(error => {
    console.log("error happened");
})

//cofiguring express
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/*Routes*/
app.use("/",(req, res)=>{
    res.send("reponse going");
})


app.listen(3000,()=>{
    console.log("server is runing on 3000");
})
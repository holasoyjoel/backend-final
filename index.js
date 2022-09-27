require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
// const port = process.env.PORT;
const port= 3000
const mongoose = require("mongoose");
const MONGODBCONNECT = "mongodb+srv://holasoyjoel:holasoyjoel2019@cluster0.hrdrgx7.mongodb.net/?retryWrites=true&w=majority"
app.use(express.json())
app.use(cors());
app.use("/" , require("./routes/proveedores-route"));

mongoose.connect(MONGODBCONNECT)
.then(function(){
    app.listen(port , ()=>{
        console.log("escuchando puerto" , port);
    })
    console.log("DB conectada");
})
.catch(function(error){

    console.log(error, "errorrrr")
})





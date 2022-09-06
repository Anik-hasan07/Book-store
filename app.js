const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors =require("cors")
const port = 5000;



// Middlewares
const app = express();
app.use(express.json());
app.use(cors());
app.use("/books", router);


//database connect
mongoose.connect('mongodb://localhost/Books')
.then(()=>{
    console.log("connection success");

})
.catch((err)=>{
    console.log(err);

})





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  //36:59
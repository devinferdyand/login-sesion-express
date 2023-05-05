// import express
import express from "express";

// init express
const app = express()

//basic route
app.get('/', (req,res) => {
    res.send("Halaman client");
});

//listen on port
app.listen(3000, ()=> console.log('server Ready http://localhost:3000'));
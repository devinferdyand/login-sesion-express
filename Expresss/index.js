// import express
import express from "express";

// import router
import router from "./routes/routes.js";

// init express
const app = express();

// use router
app.use(router);

//listen on port
app.listen(3000, ()=> console.log('server Ready http://localhost:3000'));
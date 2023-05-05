const express = require('express');

const bodyParser = require('body-parser');

const app = express();
// definsi enviroment secara global (.env)

require('dotenv').config();

// convert ke json
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// memanggil route produk
const appRouter = require('./src/routers');
app.use('/', appRouter);

// menjalankan server sesuai dengan port yang terdaftar di .env (8080)
app.listen(process.env.APP_PORT, () => {
    console.log(`Server berjalan https://localhost:${process.env.APP_PORT}`);
})
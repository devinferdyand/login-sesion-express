const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//sesion 1
const mysql = require('mysql');
const session = require('express-session');

// session 2
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database :'review'
})

// session 3
app.use(session({
    secret : 'mysecret',
    resave :false,
    saveUninitialized : true,
    cookie : { secure:false }
}))



require('dotenv').config();

// convert ke json
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// memanggil route produk
const appRouter = require('./src/routers');
app.use('/', appRouter);

// tahap 4 route dan proses login

app.post('/login', function(req,res){
    let username = req.body.username;
    let password = req.body.password;

    if(username && password){
        connection.query('SELECT * FROM users WHERE username = ? AND password = ?' ,
        [username,password], function(error,results,fields){
            if(error) throw error;

            if(results.length > 0){
                req.session.loggedin = true;
                req.session.username = username;
                req.session.password = password;

                res.send({
                    success :true,
                    message :'login berhasil'
                })
            }else{
                res.send({
                    success :false,
                    message :'gagal'
                })
            }
            res.end()
        })
    }else{
        res.send({
            success :true,
            message :'Isi password Dan Username nya'
        })
        res.end()
    }
})



// menjalankan server sesuai dengan port yang terdaftar di .env (8080)
app.listen(process.env.APP_PORT, () => {
    console.log(`Server berjalan https://localhost:${process.env.APP_PORT}`);
})
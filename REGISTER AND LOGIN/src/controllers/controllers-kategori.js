const config = require('../configs/database');
const mysql = require('mysql');
const session = require('express-session');
const express = require('express');
const connection = mysql.createConnection(config);
connection.connect();


const app = express();
app.use(session({
    secret : 'secret',
    // resave berguna untuk mengatur sesion brpa menit na
    resave :false, 
    saveUninitialized : true
}))
const getDataKategori = async (req,res) => {
  try{
    const data = await new Promise((resolve,reject) => {
        connection.query('SELECT * FROM kategori', function (error,rows) {
            if(rows){
                resolve(rows)
            }else{
                reject([])
            }
        })
     })
     if(req.session.loggedin){
        res.send({
            success : true,
            message : 'berhasil ambil data',
            data : data
           })
    }else{
        res.send({
            success : false,
            message : 'Silahkan Login Terlebih Dahullu',
           })
    }
  }catch(error){
    res.send({
        success : false,
        message : 'EROR SISTEM!!',
    })
  }
}



const addDatakategori = async(req,res) => {
    let data = {
        nama_kategori : req.body.nama_kategori
    }
    console.log(data)
   try{
    const result = await new Promise((resolve,reject) => {
        connection.query("INSERT INTO kategori set ?; ", [data], function(error,rows){
            if(rows){
                resolve(true)
            }else{
                reject(false)
            }
        });
    });
    
    if(result){
        res.send({
            success : true,
            message : "berhasil manambah data"
        });
    }else{
        res.send({
            success : false,
            message : "gagal manambah data"
        });
    }
   }catch(error){
    res.send({
        success : false,
        message : "SYSTEM EROR"
    });
   }

}


const editDataKategori  = async(req,res) => {
    let id = req.params.kode_kategori;
    console.log(id)
    let dataEdit = {
        nama_kategori : req.body.nama_kategori
    }
    try{
    const result = await new Promise((resolve,reject) => {
        connection.query('UPDATE kategori SET ? WHERE kode_kategori = ?;', [dataEdit,id], function(error,rows) {
            if(rows) {
                resolve(true)
            }else{
                reject(false)
            }
        });
    });

    if(result){
        res.send({
            success: true,
            message: 'Berhasil edit data'
        })
    }else{
        res.send({
            success:false,
            message: 'Gagal edit data'
        })
    }
}catch(error){
    res.send({
        success : false,
        message : "SYSTEM EROR"
    });
}
}

const deleteDataKategori = async(req,res) => {
    let id = req.params.kode_kategori;
   try{
    const result = await new Promise((resolve,reject) => {
        connection.query('DELETE FROM kategori WHERE kode_kategori = ?;', [id], function(error,rows){
             if(rows){
                  resolve(true)
              }else{
                   reject(false)
              }
        });
     });
     
     if(result){
         res.send({
             success: true,
             message:'Berhasil Hapus Data'
         })
     }else{
         res.send({
             success: false,
             message:'Gagal Hapus Data'
         })
     }
   }catch(error){
    res.send({
        success: false,
        message:'Server eror'
    })
   }
}


module.exports = {
    getDataKategori,
    addDatakategori,
    editDataKategori,
    deleteDataKategori
}
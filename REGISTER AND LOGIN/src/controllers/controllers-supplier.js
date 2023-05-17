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

const getDataSupplier = async (req,res) => {
 try{
    const data = await new Promise((resolve,reject) => {
        connection.query('SELECT * FROM supplier', function (error,rows) {
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
        success:false,
        message: 'sistem eror'
    })
 }
}



const addDataSupplier = async(req,res) => {
    let data = {
        nama_supplier : req.body.nama_supplier,
        alamat : req.body.alamat
    }
    try{
    const result = await new Promise((resolve,reject) => {
        connection.query("INSERT INTO supplier set ?; ", [data], function(error,rows){
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
        success:false,
        message: 'sistem eror'
    })
}

}


const editDataSupplier  = async(req,res) => {
    let id = req.params.kode_supplier;
    console.log(id)
    let dataEdit = {
        nama_supplier : req.body.nama_supplier,
        alamat : req.body.alamat
    }

    try{
    const result = await new Promise((resolve,reject) => {
        connection.query('UPDATE supplier SET ? WHERE kode_supplier = ?;', [dataEdit,id], function(error,rows) {
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
        success:false,
        message: 'sistem eror'
    })
}
}

const deleteDataSupplier = async(req,res) => {
    let id = req.params.kode_supplier;
  try{
    const result = await new Promise((resolve,reject) => {
        connection.query('DELETE FROM supplier WHERE kode_supplier = ?;', [id], function(error,rows){
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
        message:'server eror'
    })
  }
}


module.exports = {
    getDataSupplier,
    addDataSupplier,
    editDataSupplier,
    deleteDataSupplier
}
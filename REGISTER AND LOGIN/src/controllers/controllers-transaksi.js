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

const getDataTransaksi = async(req,res) => {
    try{
    const data = await new Promise((resolve,reject) => {
        connection.query('SELECT transaksi.no_transaksi , transaksi.nama_barang, kategori.nama_kategori , supplier.nama_supplier , transaksi.harga , transaksi.jumlah , transaksi.diskon , transaksi.pengiriman ,transaksi.biaya_pengiriman , transaksi.total_pembayaran  FROM transaksi  JOIN kategori ON transaksi.kode_kategori = kategori.kode_kategori JOIN supplier ON transaksi.kode_supplier = supplier.kode_supplier', function (error,rows) {
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
            message: 'SYSTEM EROR'
        })
    }
}


const addDataTransaksi = async(req,res) => {


    var jumlah =  req.body.harga *  req.body.jumlah;
    console.log(jumlah)
   
    if(jumlah > 50000){
        potongan = 10000
    }else{
        potongan = 0
    }
    
    var yaya = jumlah - potongan;
    console.log(yaya)

    var pengiriman =  req.body.pengiriman ;
    
    if(pengiriman.toLowerCase() == ('jne') && pengiriman.toUpperCase()){
        ongkos = 15000
    }else if(pengiriman.toLowerCase() == ('jnt') && pengiriman.toUpperCase()){
        ongkos = 20000
    }else if(pengiriman.toLowerCase() == ('express') && pengiriman.toUpperCase()){
        ongkos = 30000
    }else{
        ongkos = 0
        console.log("tidak Ada Pengiriman")
    }
    
    var total_semua = yaya +ongkos;
     console.log(total_semua)
    
    
    let data = {
        nama_barang : req.body.nama_barang,
        kode_kategori : req.body.kode_kategori,
        kode_supplier : req.body.kode_supplier,
        harga : req.body.harga,
        jumlah : req.body.jumlah,
        diskon : potongan,
        pengiriman : req.body.pengiriman,
        biaya_pengiriman : ongkos,
        total_pembayaran : total_semua
    }
    console.log(data)

    try{
    const result = await new Promise((resolve,reject) => {
        connection.query("INSERT INTO transaksi set ?; ", [data], function(error,rows){
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
        message : "sistem error"
    });
}

}


const editDataTransaksi  = async(req,res) => {
    let id = req.params.no_transaksi;

    var jumlah =  req.body.harga *  req.body.jumlah;
    console.log(jumlah)
   
    if(jumlah > 50000){
        potongan = 10000
    }else{
        potongan = 0
    }
    
    var yaya = jumlah - potongan;
    console.log(yaya)
    
    if(req.body.pengiriman == "JNE"){
        ongkos = 15000
    }else if(req.body.pengiriman == "JNT"){
        ongkos = 20000
    }else if(req.body.pengiriman == "EXPRESS"){
        ongkos = 30000
    }else{
        ongkos = 0
    }
    
    var total_semua = yaya +     ongkos;
     console.log(total_semua)
    

    console.log(id)
    let dataEdit = {
        nama_barang : req.body.nama_barang,
        kode_kategori : req.body.kode_kategori,
        kode_supplier : req.body.kode_supplier,
        harga : req.body.harga,
        jumlah : req.body.jumlah,
        diskon : potongan,
        pengiriman : req.body.pengiriman,
        biaya_pengiriman : ongkos,
        total_pembayaran : total_semua
    }

    try{
    const result = await new Promise((resolve,reject) => {
        connection.query('UPDATE transaksi SET ? WHERE no_transaksi = ?;', [dataEdit,id], function(error,rows) {
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
        message : "System eror"
    });
}
}


const deleteDataTransaksi = async(req,res) => {
    let id = req.params.no_transaksi;

    try{
    const result = await new Promise((resolve,reject) => {
       connection.query('DELETE FROM transaksi WHERE no_transaksi = ?;', [id], function(error,rows){
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
        success : false,
        message : "system eror"
    });
}
}

module.exports = {
    getDataTransaksi,
    addDataTransaksi,
    editDataTransaksi,
    deleteDataTransaksi
}
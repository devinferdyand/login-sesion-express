const config = require('../configs/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

// menampilkan data 
const getDataBarang = async (req,res) => {
    try{
        const data = await new Promise((resolve,reject) => {
            connection.query('SELECT * FROM barang', function (error,rows) {
                if(rows){
                    resolve(rows)
                }else{
                    reject([])
                }
            })
         })
         res.send({
            success : true,
            message : 'berhasil ambil data',
            data : data
           })
    }catch(error){
        console.info(error)
        res.send({
            success : false,
            message : 'gagal',
            error :   error.stack
        })
    }

   
   
}

// add barang
const addDataBarang = async(req,res) => {

    let hargas = req.body.harga * req.body.jumlah 
   
    if(hargas > 100000){
         potongan = 10000
    }else{
         potongan = 0
    }
    let total_semua = hargas - potongan;

    let data = {
        nama_barang : req.body.nama_barang,
        harga: req.body.harga,
        jumlah: req.body.jumlah,
        potongan: potongan,
        total_harga:total_semua
    }
   try{
    const result = await new Promise((resolve,reject) => {
        connection.query("INSERT INTO barang set ?; ", [data], function(error,rows){
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
       }
   
    }catch(error){
        res.send({
            success : false,
            message : "gagal menambah data",
            error : error.stack
        });
    }

}

// edit data barang
const editDataBarang  = async(req,res) => {
    let kode_barang = req.params.kode_barang;
    let hargas = req.body.harga * req.body.jumlah 
   
    if(hargas > 100000){
         potongan = 10000
    }else{
         potongan = 0
    }
    let total_semua = hargas - potongan;

    let dataEdit = {
        nama_barang : req.body.nama_barang,
        harga: req.body.harga,
        jumlah: req.body.jumlah,
        potongan: potongan,
        total_harga:total_semua
    }

    try{
        const result = await new Promise((resolve,reject) => {
            connection.query('UPDATE barang SET ? WHERE kode_barang = ?;', [dataEdit,kode_barang], function(error,rows) {
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
        }
    } catch(error){
        res.send({
            success:false,
            message: 'Gagal edit data',
            error : error.stack
        })
    }
}

const deleteDataBarang = async(req,res) => {
    let kode_barang = req.params.kode_barang;


    try{
        const resul = await new Promise((resolve,reject) => {
            connection.query('DELETE FROM barang WHERE kode_barang = ?;', [kode_barang], function(error,rows){
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
         }
    }catch(error){
        res.send({
            success: false,
            message:'Gagal Hapus Data',
            error:error.stack
        })
    }   

}

module.exports = {
    getDataBarang,
    addDataBarang,
    editDataBarang,
    deleteDataBarang
}
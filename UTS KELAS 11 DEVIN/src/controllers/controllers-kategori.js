const config = require('../configs/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();


const getDataKategori = async (req,res) => {
    const data = await new Promise((resolve,reject) => {
       connection.query('SELECT * FROM kategori', function (error,rows) {
           if(rows) {
               resolve(rows)
           }else{
               reject([])
           }
       })
    })
    if(data){
          res.send({
           success : true,
           message : 'berhasil ambil data',
           data : data
          })
    }else{
       res.send({
           success : false,
           message : 'gagal ambil data!!',
       })
    }
}


// // tambah data
const addDataKategori = async(req,res) => {
    let data = {
        kategori : req.body.kategori,
    }

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

}


// //mengubah data 
const editDataKategori  = async(req,res) => {
    let id = req.params.id;
    let dataEdit = {
        kategori : req.body.kategori,
    }
    const result = await new Promise((resolve,reject) => {
        connection.query('UPDATE kategori SET ? WHERE id = ?;', [dataEdit,id], function(error,rows) {
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
}
    
const deleteDataKategori = async(req,res) => {
    let id = req.params.id;
    const result = await new Promise((resolve,reject) => {
       connection.query('DELETE FROM kategori WHERE id = ?;', [id], function(error,rows){
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
}



// lihat detail 
const getDetailKategori  = async(req,res) => {
    let id = req.params.id;
       connection.query(`SELECT * FROM kategori WHERE id = ${id}`, function (err, rows) {
           if(rows){
            res.send({
                success: true,
                message:'Berhasil lihat detail',
                data : rows
            })
           }else{
            res.send({
                success: true,
                message:'Tidak ada id'
            })
           }
    })
}


module.exports = {
    getDataKategori,
    addDataKategori,
    editDataKategori,
    getDetailKategori,
    deleteDataKategori
}
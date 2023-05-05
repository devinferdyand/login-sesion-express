const config = require('../configs/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

const getDataSiswa = async (req,res) => {
    const data = await new Promise((resolve,reject) => {
       connection.query('SELECT * FROM siswa', function (error,rows) {
           if(rows){
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


const addDataSiswa = async(req,res) => {
    let data = {
        nama : req.body.nama,
        jenis_kelamin: req.body.jenis_kelamin
    }
    const result = await new Promise((resolve,reject) => {
        connection.query("INSERT INTO siswa set ?; ", [data], function(error,rows){
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


const editDataSiswa  = async(req,res) => {
    let nis = req.params.nis;
    console.log(nis)
    let dataEdit = {
        nama : req.body.nama,
        jenis_kelamin: req.body.jenis_kelamin,
    }
    const result = await new Promise((resolve,reject) => {
        connection.query('UPDATE siswa SET ? WHERE nis = ?;', [dataEdit,nis], function(error,rows) {
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


const deleteDataSiswa = async(req,res) => {
    let nis = req.params.nis;
    const result = await new Promise((resolve,reject) => {
       connection.query('DELETE FROM siswa WHERE nis = ?;', [nis], function(error,rows){
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


module.exports = {
    getDataSiswa,
    addDataSiswa,
    editDataSiswa,
    deleteDataSiswa
}
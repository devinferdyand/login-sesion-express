const config = require('../configs/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();


const getDataKelas = async (req,res) => {
    const data = await new Promise((resolve,reject) => {
       connection.query('SELECT * FROM kelas', function (error,rows) {
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


const addDataKelas = async(req,res) => {
    let data = {
        kelas : req.body.kelas,
    }
    const result = await new Promise((resolve,reject) => {
        connection.query("INSERT INTO kelas set ?; ", [data], function(error,rows){
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


const editDataKelas  = async(req,res) => {
    let id = req.params.id;
    console.log(id)
    let dataEdit = {
        kelas : req.body.kelas,
    }
    const result = await new Promise((resolve,reject) => {
        connection.query('UPDATE kelas SET ? WHERE id = ?;', [dataEdit,id], function(error,rows) {
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

const deleteDataKelas = async(req,res) => {
    let id = req.params.id;
    const result = await new Promise((resolve,reject) => {
       connection.query('DELETE FROM kelas WHERE id = ?;', [id], function(error,rows){
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
    getDataKelas,
    addDataKelas,
    editDataKelas,
    deleteDataKelas
}
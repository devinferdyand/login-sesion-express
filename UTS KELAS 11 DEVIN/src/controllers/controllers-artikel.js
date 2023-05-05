const config = require('../configs/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();



const getDataArtikel = async (req,res) => {
    const data = await new Promise((resolve,reject) => {
        connection.query('SELECT artikel.id , artikel.judul , artikel.deskripsi , artikel.tanggal_terbit , artikel.penerbit , artikel.id_kategori , kategori.kategori FROM artikel JOIN kategori ON artikel.id_kategori = kategori.id', function (error,rows) {
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


    const addDataArtikel = async(req,res) => {
        let data = {
            judul : req.body.judul,
            deskripsi : req.body.deskripsi,
            tanggal_terbit : req.body.tanggal_terbit,
            penerbit : req.body.penerbit,
            id_kategori : req.body.id_kategori,
        }
        console.log(data)

        const result = await new Promise((resolve,reject) => {
            connection.query("INSERT INTO artikel set ?; ", [data], function(error,rows){
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


const editDataArtikel  = async(req,res) => {
    let id =req.params.id;
    let dataEdit = {
        judul : req.body.judul,
        deskripsi : req.body.deskripsi,
        tanggal_terbit : req.body.tanggal_terbit,
        penerbit : req.body.penerbit,
        id_kategori : req.body.id_kategori,
    }
    const result = await new Promise((resolve,reject) => {
        connection.query('UPDATE artikel SET ? WHERE id = ?;', [dataEdit,id], function(error,rows) {
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


const deleteDataArtikel = async(req,res) => {
    let id = req.params.id;
    const result = await new Promise((resolve,reject) => {
       connection.query('DELETE FROM artikel WHERE id = ?;', [id], function(error,rows){
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

const getDetailArtikel  = async(req,res) => {
        let id = req.params.id;
           connection.query(`SELECT * FROM artikel WHERE id = ${id}`, function (err, rows) {
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
    getDataArtikel,
    addDataArtikel,
    editDataArtikel,
    deleteDataArtikel,
    getDetailArtikel,
}
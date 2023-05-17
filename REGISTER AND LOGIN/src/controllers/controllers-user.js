const config = require('../configs/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();


const getDataUser = async (req,res) => {
    const data = await new Promise((resolve,reject) => {
       connection.query('SELECT * FROM users', function (error,rows) {
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

const addDataUser = async(req,res) => {
    try{

    let data = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        username : req.body.username,
        password : req.body.password,
    }

    const result = await new Promise((resolve,reject) => {
        connection.query("INSERT INTO users set ?; ", [data], function(error,rows){
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


const editDataUser  = async(req,res) => {
    let id = req.params.id;
    console.log(id)
    let dataEdit = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        username : req.body.username,
        password : req.body.password,
    }
    try{
    const result = await new Promise((resolve,reject) => {
        connection.query('UPDATE users SET ? WHERE id = ?;', [dataEdit,id], function(error,rows) {
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
        message: 'sistem error'
    })
}
}

const deleteDataUser = async(req,res) => {
    let id = req.params.id;

    try{
    const result = await new Promise((resolve,reject) => {
       connection.query('DELETE FROM users WHERE id = ?;', [id], function(error,rows){
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
} catch (error){
    res.send({
        success:false,
        message: 'sistem eror'
    })
}
}


module.exports = {
    getDataUser,
    addDataUser,
    editDataUser,
    deleteDataUser
}
const config = require('../configs/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();


const getDataRapot = async (req,res) => {
    const data = await new Promise((resolve,reject) => {
       connection.query('SELECT rapot.id , siswa.nama , kelas.kelas,  rapot.indonesia , rapot.mtk , rapot.produktif , rapot.inggris , rapot.grade  FROM rapot JOIN siswa ON rapot.nis = siswa.nis JOIN kelas ON rapot.id_kelas = kelas.id', function (error,rows) {
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


const addDatarapot = async(req,res) => {

    let total =  parseInt(req.body.indonesia) + parseInt( req.body.mtk) + parseInt(req.body.produktif) + parseInt(req.body.inggris);
    let rata_rata = total / 4 ;

    if(rata_rata >= 90){
        grade = "A";
    }else if(rata_rata >= 80){
        grade = "B";
    }
    else if(rata_rata >= 70){
        grade = "C";
    }
    else if(rata_rata >= 60){
        grade = "D";
    }
    else if(rata_rata >= 50){
        grade = "E";
    }else{
        grade = "F";
    }


    if(rata_rata > 75){
        keterangan = "LULUS"
    }else{
        keterangan = "TIDAK LULUS"
    }

    let data = {
        indonesia : req.body.indonesia,
        mtk : req.body.mtk,
        produktif : req.body.produktif,
        inggris : req.body.inggris,
        total_nilai : total,
        rata_rata : rata_rata,
        grade : grade,
        keterangan : keterangan,
        nis : req.body.nis,
        id_kelas : req.body.id_kelas,
    }
    const result = await new Promise((resolve,reject) => {
        connection.query("INSERT INTO rapot set ?; ", [data], function(error,rows){
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



const editDataRapot = async(req,res) => {
    let id = req.params.id;

    let total =  parseInt(req.body.indonesia) + parseInt( req.body.mtk) + parseInt(req.body.produktif) + parseInt(req.body.inggris);

    let rata_rata = total / 4 ;

    if(rata_rata >= 90){
        grade = "A";
    }else if(rata_rata >= 80){
        grade = "B";
    }
    else if(rata_rata >= 70){
        grade = "C";
    }
    else if(rata_rata >= 60){
        grade = "D";
    }
    else if(rata_rata >= 50){
        grade = "E";
    }else{
        grade = "F";
    }


    if(rata_rata > 75){
        keterangan = "LULUS"
    }else{
        keterangan = "TIDAK LULUS"
    }

    let dataEdit = {
        indonesia : req.body.indonesia,
        mtk : req.body.mtk,
        produktif : req.body.produktif,
        inggris : req.body.inggris,
        total_nilai : total,
        rata_rata : rata_rata,
        grade : grade,
        keterangan : keterangan,
        nis : req.body.nis,
        id_kelas : req.body.id_kelas,
    }
    const result = await new Promise((resolve,reject) => {
        connection.query('UPDATE rapot SET ? WHERE id = ?;', [dataEdit,id], function(error,rows) {
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


const deleteDataRapot = async(req,res) => {
    let id = req.params.id;
    const result = await new Promise((resolve,reject) => {
       connection.query('DELETE FROM rapot WHERE id = ?;', [id], function(error,rows){
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

const getDetailRapot  = async(req,res) => {
    let id = req.params.id;
       connection.query(` SELECT rapot.id ,  rapot.indonesia , rapot.mtk , rapot.produktif , rapot.inggris , rapot.total_nilai, rapot.rata_rata , rapot.grade , rapot.keterangan , siswa.nama , kelas.kelas FROM rapot JOIN siswa ON rapot.nis = siswa.nis JOIN kelas ON rapot.id_kelas = kelas.id WHERE rapot.id = ${id}`, function (err, rows) {
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
    getDataRapot,
    addDatarapot,
    editDataRapot,
    deleteDataRapot,
    getDetailRapot
}
import  express  from "express";

const router =  express.Router();


router.get('/biodata', (req,res) => {
    res.send(" Nama : Devin <br> Kelas : XI RPL 1 <br> Jurusan : RPL  <br> Sekolah : SMK ASSLAAM BANDUNG <br> Alamat Sekolah : Jalan Cibaduyut ");
});


//parameter

router.get('/biodatas/:nama/:kelas/:jurusan/:sekolah/:alamat', (req,res) => {
    res.send(
        'nama : ' + req.params.nama + "<br>" +
        'kelas : ' + req.params.kelas + "<br>" +
        'jurusan : ' + req.params.jurusan + "<br>" +
        'sekolah : ' + req.params.sekolah + "<br>" +
        'Alamat Sekolah : ' + req.params.alamat 
    )
})



router.get('/matematika/:bilangan1/:bilangan2', (req,res) => {

    var hasil = parseInt(req.params.bilangan1) + parseInt(req.params.bilangan2);
    var kurang = parseInt(req.params.bilangan1) -  parseInt(req.params.bilangan2);
    var bagi = parseInt(req.params.bilangan1) /  parseInt(req.params.bilangan2);
    var kali = parseInt(req.params.bilangan1) *  parseInt(req.params.bilangan2);

    res.send(
        '<h2> Penjumalahan </h2>' + 
        'bilangan : ' + req.params.bilangan1 + "<br>" +
        'bilangan : ' + req.params.bilangan2 + "<br>" +
        'hasil : ' + hasil + "<br>" + "<hr>" + 


        '<h2> pengurangan </h2>' + 
        'bilangan : ' + req.params.bilangan1 + "<br>" +
        'bilangan : ' + req.params.bilangan2 + "<br>" +
        'hasil : ' + kurang + "<br>"  +  "<hr>" + 

        '<h2> pembagian </h2>' + 
        'bilangan : ' + req.params.bilangan1 + "<br>" +
        'bilangan : ' + req.params.bilangan2 + "<br>" +
        'hasil : ' + bagi + "<br>" +  "<hr>" + 

        '<h2> Perkalian </h2>' + 
        'bilangan : ' + req.params.bilangan1 + "<br>" +
        'bilangan : ' + req.params.bilangan2 + "<br>" +
        'hasil : ' + kali + "<br>"  
    )
})



router.get('/persegi/:sisi' ,(req,res) =>{
     var hasil = parseInt(req.params.sisi) *   parseInt(req.params.sisi)
     res.send(
        '<h2> Persegi </h2>'  +
        'sisi : ' + req.params.sisi + "<br>" +
        'hasil : ' + hasil + "<br>"  
     )
})


router.get('/persegi_panjang/:panjang/:lebar' , (req,res) =>{
    var luas = parseInt(req.params.panjang) *   parseInt(req.params.lebar)

    res.send(
       '<h2> Persegi Panjang </h2>'  +
       'Panjang : ' + req.params.panjang + "<br>" +
       'lebar : ' + req.params.lebar + "<br>" +
       'luas : ' + luas + "<br>"  
    )
})



router.get('/lingkaran/:jari_jari' , (req,res) =>{
    var phi = 3.14

    var luas = phi * parseInt(req.params.jari_jari) *   parseInt(req.params.jari_jari)

    res.send(
       '<h2> Lingkaran </h2>'  +
       'Phi : ' + phi + "<br>" +
       'jari-jari : ' + req.params.jari_jari + "<br>" +
       'luas : ' + luas + "<br>"  
    )
})



router.get('/segitiga/:alas/:tinggi' , (req,res) =>{
    var set = 0.5;

    var luas = set * parseInt(req.params.alas) *   parseInt(req.params.tinggi)

    res.send(
       '<h2> Segitiga </h2>'  +
       'Alas : ' + req.params.alas + "<br>" +
       'tinggi : ' + req.params.tinggi + "<br>" +
       'luas : ' + luas + "<br>"  
    )
})



router.get('/penilaian/:nama/:nilai' , (req,res) => {

    if(req.params.nilai >= 80 ){
       var status =  ' Anda     lulus';
    }else{
        var status = 'tidak lulus';
    }

     res.send(
        'Nama : ' + req.params.nama + '<br>' +
        'nilai : ' + req.params.nilai  + '<br>' +
        'Status : '  + status
     )
});



router.get('/sekolah/:jurusan/:kelas' , (req,res) => {

    if(req.params.jurusan == 'TKRO'){

        if(req.params.kelas == 'X TKRO'){
            var a = 'Selamat datang Di Kelas X TKRO';
        }
        else if(req.params.kelas == 'XI TKRO'){
            var a = 'Selamat datang Di Kelas XI TKRO';
        }
        else if(req.params.kelas == 'XII TKRO'){
            var a = 'Selamat datang Di Kelas XII TKRO';
        }
        else{
            var a = 'Kelas Tidak Ada !!! '
        }
    }
     else if(req.params.jurusan == 'RPL'){
        if(req.params.kelas == 'X RPL'){
            var a = 'Selamat datang Di Kelas X RPL';
        }
        else if(req.params.kelas == 'XI RPL'){
            var a = 'Selamat datang Di Kelas XI RPL';
        }
        else if(req.params.kelas == 'XII RPL'){
            var a = 'Selamat datang Di Kelas XII RPL';
        }
        else{
            var a = 'Kelas Tidak Ada !!! '
        }
    }
     else if(req.params.jurusan == 'TBSM'){
        if(req.params.kelas == 'X TBSM'){
            var a = 'Selamat datang Di Kelas X TBSM';
        }
        else if(req.params.kelas == 'XI TBSM'){
            var a = 'Selamat datang Di Kelas XI TBSM';
        }
        else if(req.params.kelas == 'XII TBSM'){
            var a = 'Selamat datang Di Kelas XII TBSM';
        }
        else{
            var a = 'Kelas Tidak Ada !!! '
        }
    }
    else{
       
    }

    res.send(
        'Jurusan : ' + req.params.jurusan + "<br>" +
        'kelas : ' + req.params.kelas + "<br>" +
        'status : ' + a 
    )


})



router.get('/soal1/:nama/:jenis/:menu/:jumlah' , (req,res) => {

    // var harganas = 10000;
    // var hargamie = 20000;
    // var hargayam = 30000;
    // var hargamineral = 5000;
    // var freshtea = 10000;
    // var jus = 15000

    if(req.params.jenis == "makanan") {
        if(req.params.menu == 'nasi goreng'){
            var harga = 10000;
        }
        else if(req.params.menu == 'mie goreng'){
            var harga = 20000;
        }
        else if(req.params.menu == 'ayam goreng'){
            var harga = 30000;
        }else{
            req.params.menu = 'tidak ada';
        }
        
    }

    else if(req.params.jenis == "minuman") {
        if(req.params.menu == 'air mineral'){
            var harga = 5000;
        }
        else if(req.params.menu == 'fresh Tea'){
            var harga = 10000;
        }
        else if(req.params.menu == 'jus'){
            var harga = 15000;
        }else{
            req.params.menu = 'tidak ada';
        }
    }
    var total = harga * req.params.jumlah;
  

    if(total > 100000){
        var potongan  = 10000;
    }else{
        var potongan = " ( Dapatkan Potongan Jika Total Belanja Rp.100.000 )"
    }


    if(total > 100000){
        var semua = total - potongan
    }else{
        var semua = total;
    }
    
    

    res.send(
        
      "<fieldset >" +
      '<center>' +  '<h2> Selamat Datang Di Warkop CAKBURAEH </h2>' + "</center>" +
      '<u> <b> Struk Pembayaran </b> </u>' +
      "<br>" +
      "<br>" +
      "<br>" +

      
    'Nama Pemesan : ' + req.params.nama + "<br>" +
    'Jenis Pesanan  &nbsp; : ' + req.params.jenis + "<br>" +
    'Menu Pesan &nbsp; &nbsp; : ' + req.params.menu + "<br>" +
    '<hr>' +
    'Harga &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  :  ' + harga + "<br>" +
    ' jumlah  Pesan &nbsp; : ' + req.params.jumlah + "<br>" +
    '<hr>' +
    'total harga &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : ' + total + "<br>" +
    'potongan  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : ' + potongan + "<br>" +
    '<hr>' +
    "<br>" +
    '<b> total bayar &nbsp;&nbsp;&nbsp;&nbsp;  </> : ' + semua + "<br><br><br>" +

    '*Terima Kasih Telah Datang Di restoran kami*' +
      "</fieldset>"
    )
})




router.get('/soal2/:nama/:jurusan/:kelas/:indonesia/:inggris/:matematika/:produktif/:pai' , (req,res) =>{

    var cari = parseInt(req.params.indonesia) +  parseInt(req.params.inggris) +  parseInt(req.params.matematika) +  parseInt(req.params.produktif) +  parseInt(req.params.pai)
    var rata_rata = cari / 5


    if(rata_rata > 90 && rata_rata< 100){
        var grade = 'Grade A'
         var Keterangan = "Sangat Baik"
    }else if(rata_rata > 80 && rata_rata < 89){
        var grade = 'Grade B'
        var Keterangan = "Baik"
    }
    else if(rata_rata > 70 && rata_rata < 79){
        var grade = 'Grade C'
        var Keterangan = "Cukup"
    }
    else if(rata_rata > 60 && rata_rata < 69){
        var grade = 'Grade D'
        var Keterangan = " Kurang Baik"
    }else{
        var grade = 'Grade E'
        var Keterangan = "Sangat Kurang"
    }

    if(rata_rata >= 80){
         var status = "LULUS"
    }else{
        var status = "TIDAK LULUS"
    }


    console.log(rata_rata)
    console.log(grade)
    console.log(Keterangan)
    console.log(status)

    res.send(
      '<table>' +
      '<tr>'+
           '<td>' + ' <b> Nama </b> ' + '</td>'+
           '<td>' + " : " + '</td>'+
           '<td>' + req.params.nama  +  '</td>'+
      '</tr>' +
      '<tr>'+
      '<td>' + ' <b> Jurusan </b> ' + '</td>'+
      '<td>' + " : " + '</td>'+
      '<td>' + req.params.jurusan  +  '</td>'+
      '</tr>' +
      '<tr>'+
      '<td>' + ' <b> Kelas </b> ' + '</td>'+
      '<td>' + " : " + '</td>'+
      '<td>' + req.params.kelas  +  '</td>'+
      '</tr>' +

      '<tr>'+
      '<td>' + ' <b> Nilai Bahasa Indonesia  </b> ' + '</td>'+
      '<td>' + " : " + '</td>'+
      '<td>' + req.params.indonesia  +  '</td>'+
      '</tr>' +

      '<tr>'+
      '<td>' + '<b> Nilai Bahasa Inggris </b> ' + '</td>'+
      '<td>' + " : " + '</td>'+
      '<td>' + req.params.inggris  +  '</td>'+
      '</tr>' +

      '<tr>'+
      '<td>' + ' <b> Nilai Matematika </b> ' + '</td>'+
      '<td>' + " : " + '</td>'+
      '<td>' + req.params.matematika  +  '</td>'+
      '</tr>' +

      '<tr>'+
      '<td>' + ' <b> Nilai Produktif </b> ' + '</td>'+
      '<td>' + " : " + '</td>'+
      '<td>' + req.params.produktif  +  '</td>'+
      '</tr>' +

      '<tr>'+
      '<td>' +  ' <b> Nilai Pai </b> ' + '</td>'+
      '<td>' + " : " + '</td>'+
      '<td>' + req.params.pai  +  '</td>'+
      '</tr>' +

      '<tr>'+
      '<td>' + ' Rata Rata  ' + '</td>'+
      '<td>' + " : " + '</td>'+
      '<td>' + rata_rata  +  '</td>'+
      '</tr>' +

      '<tr>'+
      '<td>' + ' Keterangan  ' + '</td>'+
      '<td>' + " : " + '</td>'+
      '<td>' + Keterangan  +  '</td>'+
      '</tr>' +

      '<tr>'+
      '<td>' + ' Status  ' + '</td>'+
      '<td>' + " : " + '</td>'+
      '<td>' + status  +  '</td>'+
      '</tr>'  +

      '</table>'
    )
})



export default router;
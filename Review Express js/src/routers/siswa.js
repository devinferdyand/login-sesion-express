const router = require('express').Router();
const { siswa } = require('../controllers');

//get localhost:8080/produk => ambil data semua produk
router.get('/', siswa.getDataSiswa);

//get localhost:8080/produk/2 => ambil data semua produk berdasarkan id = 2
// router.get('/:id', artikel.getDetailArtikel);

// //post localhost:8080/produk/add =>  tambah data produk ke database
router.post('/add', siswa.addDataSiswa);

// // // // //post localhost:8080/produk/2 => edit data produk
router.put('/edit/:nis', siswa.editDataSiswa);

// // // // //post localhost:8080/produk/delete => delete data produk
router.delete('/delete/:nis', siswa.deleteDataSiswa);

module.exports = router;
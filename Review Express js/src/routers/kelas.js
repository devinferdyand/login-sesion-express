const router = require('express').Router();
const { kelas } = require('../controllers');

//get localhost:8080/produk => ambil data semua produk
router.get('/', kelas.getDataKelas);

//get localhost:8080/produk/2 => ambil data semua produk berdasarkan id = 2
// router.get('/:id', artikel.getDetailArtikel);

// //post localhost:8080/produk/add =>  tambah data produk ke database
router.post('/add', kelas.addDataKelas);

// // // // //post localhost:8080/produk/2 => edit data produk
router.put('/edit/:id', kelas.editDataKelas);

// // // // //post localhost:8080/produk/delete => delete data produk
router.delete('/delete/:id', kelas.deleteDataKelas);

module.exports = router;
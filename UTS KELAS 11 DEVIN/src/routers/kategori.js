const router = require('express').Router();
const { kategori } = require('../controllers');

//get localhost:8080/produk => ambil data semua produk
router.get('/', kategori.getDataKategori);

//get localhost:8080/produk/2 => ambil data semua produk berdasarkan id = 2
router.get('/:id', kategori.getDetailKategori);

// //post localhost:8080/produk/add =>  tambah data produk ke database
router.post('/add', kategori.addDataKategori);

// // // //post localhost:8080/produk/2 => edit data produk
router.put('/edit/:id', kategori.editDataKategori);

// // // //post localhost:8080/produk/delete => delete data produk
router.delete('/delete/:id', kategori.deleteDataKategori);

module.exports = router;
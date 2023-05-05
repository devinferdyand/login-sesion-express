const router = require('express').Router();
const { artikel } = require('../controllers');

//get localhost:8080/produk => ambil data semua produk
router.get('/', artikel.getDataArtikel);

//get localhost:8080/produk/2 => ambil data semua produk berdasarkan id = 2
router.get('/:id', artikel.getDetailArtikel);

// //post localhost:8080/produk/add =>  tambah data produk ke database
router.post('/add', artikel.addDataArtikel);

// // // // //post localhost:8080/produk/2 => edit data produk
router.put('/edit/:id', artikel.editDataArtikel);

// // // // //post localhost:8080/produk/delete => delete data produk
router.delete('/delete/:id', artikel.deleteDataArtikel);

module.exports = router;
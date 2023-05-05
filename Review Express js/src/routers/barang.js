const router = require('express').Router();
const { barang } = require('../controllers');

//get localhost:8080/produk => ambil data semua produk
router.get('/', barang.getDataBarang);

//get localhost:8080/produk/2 => ambil data semua produk berdasarkan id = 2
// router.get('/:id', artikel.getDetailArtikel);

// //post localhost:8080/produk/add =>  tambah data produk ke database
router.post('/add', barang.addDataBarang);

// // // // //post localhost:8080/produk/2 => edit data produk
router.put('/edit/:kode_barang', barang.editDataBarang);

// // // // //post localhost:8080/produk/delete => delete data produk
router.delete('/delete/:kode_barang', barang.deleteDataBarang);

module.exports = router;
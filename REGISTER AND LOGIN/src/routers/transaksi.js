const router = require('express').Router();
const { transaksi } = require('../controllers');

//get localhost:8080/produk => ambil data semua produk
router.get('/', transaksi.getDataTransaksi);

//get localhost:8080/produk/2 => ambil data semua produk berdasarkan id = 2
// router.get('/:id', artikel.getDetailArtikel);

// //post localhost:8080/produk/add =>  tambah data produk ke database
router.post('/add', transaksi.addDataTransaksi);

// // // // //post localhost:8080/produk/2 => edit data produk
router.put('/edit/:no_transaksi', transaksi.editDataTransaksi);

// // // // //post localhost:8080/produk/delete => delete data produk
router.delete('/delete/:no_transaksi',transaksi.deleteDataTransaksi);

module.exports = router;
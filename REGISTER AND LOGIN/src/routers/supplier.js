const router = require('express').Router();
const { supplier } = require('../controllers');

//get localhost:8080/produk => ambil data semua produk
router.get('/', supplier.getDataSupplier);

//get localhost:8080/produk/2 => ambil data semua produk berdasarkan id = 2
// router.get('/:id', artikel.getDetailArtikel);

// //post localhost:8080/produk/add =>  tambah data produk ke database
router.post('/add', supplier.addDataSupplier);

// // // // //post localhost:8080/produk/2 => edit data produk
router.put('/edit/:kode_supplier', supplier.editDataSupplier);

// // // // //post localhost:8080/produk/delete => delete data produk
router.delete('/delete/:kode_supplier',supplier.deleteDataSupplier);

module.exports = router;
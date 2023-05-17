const router = require('express').Router();
const { user } = require('../controllers');

//get localhost:8080/produk => ambil data semua produk
router.get('/', user.getDataUser);

//get localhost:8080/produk/2 => ambil data semua produk berdasarkan id = 2
// router.get('/:id', artikel.getDetailArtikel);

// //post localhost:8080/produk/add =>  tambah data produk ke database
router.post('/add', user.addDataUser);

// // // // //post localhost:8080/produk/2 => edit data produk
router.put('/edit/:id', user.editDataUser);

// // // // //post localhost:8080/produk/delete => delete data produk
router.delete('/delete/:id', user.deleteDataUser);

module.exports = router;
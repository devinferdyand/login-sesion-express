const router = require('express').Router();
const { rapot } = require('../controllers');

//get localhost:8080/produk => ambil data semua produk
router.get('/', rapot.getDataRapot);

//get localhost:8080/produk/2 => ambil data semua produk berdasarkan id = 2
router.get('/:id', rapot.getDetailRapot);

// //post localhost:8080/produk/add =>  tambah data produk ke database
router.post('/add', rapot.addDatarapot);

// // // // //post localhost:8080/produk/2 => edit data produk
router.put('/edit/:id', rapot.editDataRapot);

// // // // //post localhost:8080/produk/delete => delete data produk
router.delete('/delete/:id', rapot.deleteDataRapot);

module.exports = router;
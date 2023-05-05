const router = require('express').Router();

const routeBarang = require('./barang');

// get localhost:8080/produk => ambil data semua produk 
router.use('/barang', routeBarang);


module.exports = router;
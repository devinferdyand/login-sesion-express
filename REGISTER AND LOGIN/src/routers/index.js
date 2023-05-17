const router = require('express').Router();

const routeUser = require('./user');
const routeKategori = require('./kategori');
const routeSupplier = require('./supplier');
const routeTransaksi = require('./transaksi');
// get localhost:8080/produk => ambil data semua produk 
router.use('/register', routeUser);
router.use('/kategori', routeKategori);
router.use('/supplier', routeSupplier);
router.use('/transaksi', routeTransaksi);


module.exports = router;
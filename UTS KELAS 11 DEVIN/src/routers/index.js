const router = require('express').Router();

const routeKategori = require('./kategori');
const routeArtikel = require('./artikel');

// get localhost:8080/produk => ambil data semua produk 
router.use('/kategori', routeKategori);
router.use('/artikel', routeArtikel);

module.exports = router;
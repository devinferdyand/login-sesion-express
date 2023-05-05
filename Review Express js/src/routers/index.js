const router = require('express').Router();

const routeBarang = require('./barang');
const routeSiswa = require('./siswa');
const routeKelas = require('./kelas');
const routeRapot = require('./rapot');
// get localhost:8080/produk => ambil data semua produk 
router.use('/barang', routeBarang);
router.use('/siswa', routeSiswa);
router.use('/kelas', routeKelas);
router.use('/rapot', routeRapot);


module.exports = router;
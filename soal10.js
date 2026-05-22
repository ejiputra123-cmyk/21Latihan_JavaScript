const prompt = require('prompt-sync') ({sigint : true});

const judulBuku = prompt('Masukkan judul buku : ');
const penrbit = String(prompt('Masukkan penerbit : '));
const jumlahBuku = parseInt(prompt('Masukkan jumlah buku : '));
const tanggalBeli = prompt('Masukkan tanggal beli : ');

console.log(`Judul buku : ${judulBuku}`);
console.log(`Penerbit : ${penrbit}`);
console.log(`Jumlah buku : ${jumlahBuku}`);
console.log(`Tanggal Pembelian : ${tanggalBeli}`);

const prompt = require('prompt-sync') ({sigint : true});

let judulBuku;
let penerbit;
let jumlahBuku;
let tanggalBeli;

while (true) {
    judulBuku = prompt('Masukkan judul buku: ')

    if (judulBuku.trim() === "") {
        console.log('Error: harus terisi!');
    } else {
        break;
    }

}

while(true) {
    penerbit = String(prompt('Masukkan penerbit : '));

    if (penerbit.trim() === "") {
        console.log('Error: harus terisi!');
    } else {
        break;
    }
    
}

while(true) {
    jumlahBuku = (prompt('Masukkan jumlah buku : '));

    if (jumlahBuku.trim() === "") {
        console.log('Error: harus terisi!');
    } else {
        break;
    }
}

while(true) {
    tanggalBeli = prompt('Masukkan tanggal beli : ');

    if (tanggalBeli.trim() === "") {
        console.log('Error: harus terisi!');
    } else {
        break;
    }
}

console.log(`\n--- DATA BUKU ---`);
console.log(`Judul buku : ${judulBuku}`);
console.log(`Penerbit : ${penerbit}`);
console.log(`Jumlah buku : ${jumlahBuku}`);
console.log(`Tanggal Pembelian : ${tanggalBeli}`);

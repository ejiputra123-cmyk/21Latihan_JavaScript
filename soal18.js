const prompt = require('prompt-sync') ({sigint : true});

const angka = parseFloat(prompt('Masukkan angka : '));
if (angka % 7 === 0) {
    console.log('Anda Beruntung!');
} else {
    console.log('Anda Belum Beruntung!');
}
const prompt = require('prompt-sync') ({sigint : true});

let nama = prompt('Masukkan nama : ');
if (nama === 'Eji') {
    console.log(`Apa kabar ${nama}? Wish you luck!`);
} else {
    console.log('Nama salah');
}
const prompt = require('prompt-sync') ({sigint : true});

const pilihan = prompt('Masukkan angka : 1/2/3 ');
switch (pilihan) {
    case '1':
        console.log('Selamat Anda Juara Utama');
        break;
    case '2':
        console.log('Selamat Anda Runner Up');
        break;
    case '3':
        console.log('Selamat Anda Juara Ketiga');
        break;
    default:
        console.log('Inputan Anda Salah');
}

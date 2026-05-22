const prompt = require('prompt-sync') ({sigint : true});

const angka = parseFloat(prompt('Masukkan angka : '));
if (angka >= 100) {
    console.log('Nilai kamu sempurna~');
} else if (angka < 100 && angka > 0) {
    console.log('Nilai kamu kurang sempurna~');
} else {
    console.log('Kamu mendapatkan nilai yang tidak valid~');
}
const prompt = require('prompt-sync') ({sigint : true});

const key = parseFloat(prompt('Masukkan angka : '));
if (key === 78821) {
    console.log('Selamat datang Eji!');
} else {
    console.log('You Shall Not Pass!');
}
const prompt = require('prompt-sync')  ({sigint : true});

const nilai = parseFloat(prompt('Masukkan nilai : '));
if (nilai >= 90 && nilai <= 100) {
    console.log('Nilai kamu A!');
} else if (nilai >= 80 && nilai < 90) {
    console.log('Nilai kamu B!');
} else if (nilai >= 70 && nilai < 80) {
    console.log('Nilai kamu C!');
} else if (nilai >= 60 && nilai < 70) {
    console.log('Nilai kamu D!');
} else {
    console.log('Nilai kamu E!');
}
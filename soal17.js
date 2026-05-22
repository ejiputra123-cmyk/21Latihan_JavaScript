const prompt = require('prompt-sync')({sigint : true});

const harga = parseFloat(prompt('Masukkan harga : '));
if (harga > 200000) {
    const hargaDiskon = harga * 0.075;
    console.log('Harga sebelum diskon:', harga);
    console.log('Harga setelah diskon:', hargaDiskon);
} else {
    console.log('Tidak ada diskon');
}


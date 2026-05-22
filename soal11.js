const prompt = require('prompt-sync') ({sigint : true});

const xrpl1 = parseFloat(prompt('Masukkan Nilai X RPL 1 : '));
const xrpl2 = parseFloat(prompt('Masukkan Nilai X RPL 2 : '));
const xtkj1 = parseFloat(prompt('Masukkan Nilai X TKJ 1 : '));
const xtkj2 = parseFloat(prompt('Masukkan Nilai X TKJ 2 : '));

const rataRata = hitungRataRata();
function hitungRataRata() {
    const rataRata = (xrpl1 + xrpl2 + xtkj1 + xtkj2) / 4;
    return rataRata;
}

console.log(`Rata-rata nilai X RPL 1 dan X RPL 2 dan X TKJ 1 dan X TKJ 2 : ${rataRata}`);
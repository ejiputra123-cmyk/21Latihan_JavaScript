const prompt = require('prompt-sync') ({sigint : true});

const harga = parseFloat(prompt('Masukkan harga : '));
const pajak = 0.1
const fee = 0.05;

const pajakDariHarga = hitungPajakdariHarga();
function hitungPajakdariHarga() {
    const pajakDariHarga = harga * pajak;
    return pajakDariHarga;
}

const feeDariHarga = hitungFeeDariHarga();
function hitungFeeDariHarga() {
    const feeDariHarga = harga * fee;
    return feeDariHarga;
}

const hargaBayar = hitungTotalHarga();
function hitungTotalHarga() {
    const totalHarga = harga + (harga * pajak);
    return totalHarga;
}

console.log('Harga Makanan : ', harga);
console.log('Pajak : ', pajakDariHarga);
console.log('Fee : ', feeDariHarga);
console.log('Harga Bayar : ', hargaBayar);
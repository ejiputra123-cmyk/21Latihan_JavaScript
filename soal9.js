const prompt = require('prompt-sync') ({sigint : true});

const panjang = parseFloat(prompt('Masukkan panjang : '));
const lebar = parseFloat(prompt('Masukkan lebar : '));

function hitungLuasPersegPanjang() {
    const luas = panjang * lebar;
    return luas;
}

hitungLuasPersegPanjang();

function hitungKelilingPersegPanjang() {
    const keliling = 2 * (panjang + lebar);
    return keliling;
}

hitungKelilingPersegPanjang();

console.log(`Luas persegi panjang : ${hitungLuasPersegPanjang()}`);
console.log(`Keliling persegi panjang : ${hitungKelilingPersegPanjang()}`);
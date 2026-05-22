const prompt = require('prompt-sync') ({sigint : true});

let nilai = [];

const nilaix = parseFloat(prompt('Masukkan nilai X : '));
nilai.push(nilaix);
console.log(`Nilai : ${nilai}`);

const nilaiy = parseFloat(prompt('Masukkan nilai Y : '));
nilai.push(nilaiy);
console.log(`Nilai : ${nilai}`);

const nilaiz = parseFloat(prompt('Masukkan nilai Z : '));
nilai.push(nilaiz);
console.log(`Nilai : ${nilai}`);

const palingKecil = Math.min(...nilai);
console.log(`Nilai paling kecil : ${palingKecil}`);
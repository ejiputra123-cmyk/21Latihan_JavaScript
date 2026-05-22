const prompt = require('prompt-sync') ({sigint : true});

const hurufVokal = ['a', 'i', 'u', 'e', 'o'];

let huruf = prompt('Masukkan huruf : ').toLowerCase();
if (hurufVokal.includes(huruf)) {
    console.log(`${huruf} adalah huruf vokal`);
} else {
    console.log(`${huruf} adalah huruf konsonan`);
}
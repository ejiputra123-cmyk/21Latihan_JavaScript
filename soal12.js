const prompt = require('prompt-sync') ({sigint : true});

function hitungVolumeBola() {
    const jariJari = parseFloat(prompt('Masukkan jari-jari : '));
    const volume = (4 / 3) * Math.PI * Math.pow(jariJari, 3);
    return volume;
}
console.log(`Volume bola : ${hitungVolumeBola()}`);

function hitungLuasPermukaanBola() {
    const jariJari = parseFloat(prompt('Masukkan jari-jari : '));
    const luasPermukaan = 4 * Math.PI * Math.pow(jariJari, 2);
    return luasPermukaan;
}

console.log(`Luas permukaan bola : ${hitungLuasPermukaanBola()}`);
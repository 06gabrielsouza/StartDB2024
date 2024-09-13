class Animal {
    constructor(especie, tamanho, biomas) {
        this.especie = especie;
        this.tamanho = tamanho;
        this.biomas = biomas;
    }

    podeViverNoBioma(bioma) {
        return this.biomas.includes(bioma) || (this.biomas.includes('savana') && bioma === 'savana e rio');
    }
}
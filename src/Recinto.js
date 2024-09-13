class Recinto {
    constructor(numero, bioma, tamanhoTotal, animais = []) {
        this.numero = numero;
        this.bioma = bioma;
        this.tamanhoTotal = tamanhoTotal;
        this.animais = animais;
    }

    espacoOcupado(animaisInfo) {
        return this.animais.reduce((total, { especie, quantidade }) => {
            return total + animaisInfo[especie].tamanho * quantidade;
        }, 0);
    }

    espacoDisponivel(animaisInfo, novoAnimal, quantidade) {
        const espacoNecessario = animaisInfo[novoAnimal].tamanho * quantidade;
        const espacoOcupado = this.espacoOcupado(animaisInfo);
        return this.tamanhoTotal - espacoOcupado - espacoNecessario;
    }

    podeReceberAnimal(animal, quantidade, animaisInfo) {
        const espacoNecessario = animal.tamanho * quantidade;
        const espacoOcupado = this.espacoOcupado(animaisInfo);

        if (espacoOcupado + espacoNecessario > this.tamanhoTotal) {
            return false;
        }

        return animal.podeViverNoBioma(this.bioma);
    }
}
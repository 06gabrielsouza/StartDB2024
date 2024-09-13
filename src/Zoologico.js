class Zoologico {
    constructor() {
        this.recintos = [
            new Recinto(1, 'savana', 10, [{ especie: 'MACACO', quantidade: 3 }]),
            new Recinto(2, 'floresta', 5, []),
            new Recinto(3, 'savana e rio', 7, [{ especie: 'GAZELA', quantidade: 1 }]),
            new Recinto(4, 'rio', 8, []),
            new Recinto(5, 'savana', 9, [{ especie: 'LEAO', quantidade: 1 }])
        ];

        this.animais = {
            LEAO: new Animal('LEAO', 3, ['savana']),
            LEOPARDO: new Animal('LEOPARDO', 2, ['savana']),
            CROCODILO: new Animal('CROCODILO', 3, ['rio']),
            MACACO: new Animal('MACACO', 1, ['savana', 'floresta']),
            GAZELA: new Animal('GAZELA', 2, ['savana']),
            HIPOPOTAMO: new Animal('HIPOPOTAMO', 4, ['savana', 'rio']),
        };
    }

    analisaRecintos(animalEspecie, quantidade) {
        const animal = this.animais[animalEspecie];

        if (!animal) {
            return { erro: "Animal inválido" };
        }

        if (typeof quantidade !== 'number' || quantidade <= 0) {
            return { erro: "Quantidade inválida" };
        }

        let recintosViaveis = this.recintos.filter(recinto => {
            return recinto.podeReceberAnimal(animal, quantidade, this.animais);
        });

        if (recintosViaveis.length > 0) {
            return {
                recintosViaveis: recintosViaveis.map(recinto => ({
                    numero: recinto.numero,
                    espacoDisponivel: recinto.espacoDisponivel(this.animais, animalEspecie, quantidade)
                }))
            };
        } else {
            return { erro: "Não há recinto viável" };
        }
    }
}

export { Zoologico };

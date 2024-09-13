import { Zoologico } from './Zoologico.js';  

function main() {
    const zoo = new Zoologico();

    console.log("=== Testando alocação de animais ===");

    let resultado1 = zoo.analisaRecintos('LEAO', 2);
    console.log("Resultado para 2 leões: ", resultado1);

    let resultado2 = zoo.analisaRecintos('MACACO', 3);
    console.log("Resultado para 3 macacos: ", resultado2);

    let resultado3 = zoo.analisaRecintos('CROCODILO', 1);
    console.log("Resultado para 1 crocodilo: ", resultado3);

    let resultado4 = zoo.analisaRecintos('DRAGAO', 1);
    console.log("Resultado para animal inválido: ", resultado4);

    let resultado5 = zoo.analisaRecintos('LEOPARDO', -1);
    console.log("Resultado para quantidade inválida de leopardo: ", resultado5);
}

main();


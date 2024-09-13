Aqui está o README com apenas a parte do desafio:

---

# Desafio: Recintos do Zoo

Este repositório contém a minha solução para o desafio **Recintos do Zoo**. O objetivo do desafio é organizar os recintos de um zoológico para que novos animais se sintam confortáveis, levando em consideração as regras de biomas, compatibilidade de espécies e espaço disponível.

## O Desafio

Você foi contratado para ajudar na organização de um zoológico. Sua missão é construir a lógica para indicar os recintos onde novos animais se sintam confortáveis, respeitando as regras descritas.

### Recintos Existentes

| Número | Bioma           | Tamanho Total | Animais Existentes |
|--------|-----------------|---------------|---------------------|
| 1      | Savana          | 10            | 3 macacos           |
| 2      | Floresta        | 5             | Vazio               |
| 3      | Savana e Rio    | 7             | 1 gazela            |
| 4      | Rio             | 8             | Vazio               |
| 5      | Savana          | 9             | 1 leão              |

### Animais

| Espécie   | Tamanho | Bioma                |
|-----------|---------|----------------------|
| Leão      | 3       | Savana               |
| Leopardo  | 2       | Savana               |
| Crocodilo | 3       | Rio                  |
| Macaco    | 1       | Savana ou Floresta   |
| Gazela    | 2       | Savana               |
| Hipopótamo| 4       | Savana ou Rio        |

### Regras para encontrar um recinto

1. O animal deve estar em um bioma adequado com espaço suficiente.
2. Animais carnívoros devem habitar apenas com sua própria espécie.
3. Animais já presentes devem continuar confortáveis com a inclusão de novos.
4. Hipopótamos só aceitam outras espécies em um recinto de Savana e Rio.
5. Macacos não ficam confortáveis sozinhos; precisam de companhia.
6. Se houver mais de uma espécie no recinto, é necessário 1 espaço extra.
7. Não é possível dividir lotes de animais ou mover os que já estão no recinto.

### Entradas e Saídas

1. O programa deve receber o tipo e a quantidade de animais.
2. A saída será uma lista de recintos viáveis ou uma mensagem de erro.

Exemplo de entrada válida:
```js
"MACACO", 2
```

Saída:
```js
{
  recintosViaveis: ["Recinto 1 (espaço livre: 5 total: 10)", 
  "Recinto 2 (espaço livre: 3 total: 5)", 
  "Recinto 3 (espaço livre: 2 total: 7)"]
}
```

Exemplo de entrada inválida:
```js
"UNICORNIO", 1
```

Saída:
```js
{
  erro: "Animal inválido"
}
```

### O Código

O arquivo principal está localizado na pasta `src` e se chama `recintos-zoo.js`. Para garantir a compatibilidade com os testes, o export da classe deve ser mantido conforme abaixo:
```js
export { RecintosZoo as RecintosZoo };
```

---

Este README foca exclusivamente na descrição do desafio e das regras para completá-lo.
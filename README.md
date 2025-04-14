## Design Patterns
- Soluções clássicas baseadas no livro Gof (Gang of four, "A gangue dos 4")
- São 23 soluções clássicas divididas em três categorias (Criação, Estrutura, Comportamento).

| Solução clássica | Command |
| - | - |
| Padrão de Projeto | aaaaa |

Arquivo - .env :
    ```
    DATABASE_URL="mysql://root@localhost:3306/trab-gof"
    PORT=6542
    ```
- 02 Exemplo do pattern **Builder** nas classes Pedido e Item
- builderPedido.js
```js
class Pedido{

    itens = [];

    constructor(id, cliente) {
        this.id = id;
        this.cliente = cliente;
        this.data = new Date();
    }

    addItem(item) {
        this.itens.push(item);
    }
}

module.exports = Pedido;
```
- builderItem
```js
class Item{
    constructor(id, produto, preco, quantidade) {
        this.id = id;
        this.produto = produto;
        this.preco = preco;
        this.quantidade = quantidade;
        this.subtotal = this.calcularSubtotal();
    }
    calcularSubtotal() {
        return this.preco * this.quantidade;
    }
}

module.exports = Item;
```
- 03 Exemplo do pattern **Composite** de estrutura
```js
const Pedido = require('../models/builderPedido');
const Item = require('../models/builderItem');

const pedido = new Pedido(1, "Arnaldo");

const readPedido = async (req, res) => {
    res.json(pedido);
}

const createItem = async (req, res) => {
    const { produto, preco, quantidade } = req.body;
    const item = new Item(pedido.itens.length + 1, produto, preco, quantidade)
    pedido.addItem(item);
    res.json(pedido);
}

module.exports = {
    readPedido,
    createItem
};
```


## Atividades
Em grupos escolha uma solução classica, comunique-se com os colegas de sala para não escolherem os mesmos patterns. estude a solução.
Monte uma pequena apresentação/demonstração para explicar para a turma após o almoço.
### Entrega
- Crie um repositorio no git chamado "pattenrs-nome-do-pattern"
- Crie um arquivo README.md com a pesquisa/apresentação.
- Coloque os arquivos necessários neste repositório.
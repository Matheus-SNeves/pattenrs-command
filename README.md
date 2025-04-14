## Design Patterns
- Soluções clássicas baseadas no livro Gof (Gang of four, "A gangue dos 4")

| Solução clássica:  | Command |
| ------------------ | ------- |
| Padrão de Projeto: | aaaaa   |


Terminal:
    ```
    cd gof
    npm i express cors dotenv
    prisma init --datasource-provider mysql
    ```

Arquivo - .env :
    ```
    DATABASE_URL="mysql://root@localhost:3306/trab-gof"
    PORT=6542
    ```

Insonmia:
|Comandos|Print|
|-|-|
| Ver o valor | ![Obter Valor](./images/print1.png) |
| Adicionar valor | ![Adicionar valor](./images/print2.png) |
| Diminuir o valor | ![Diminuir o valor](./images/print3.png) |
| Desfazer última ação | ![Desfazer ultima ação](./images/print4.png) |

### Participantes
- Isabelle Almeida
- Matheus Neves
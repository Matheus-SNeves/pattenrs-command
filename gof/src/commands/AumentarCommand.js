class AumentarCommand {
    constructor(contador) {
        this.contador = contador;
    }

    execute() {
        this.contador.aumentar();
    }

    undo() {
        this.contador.diminuir();
    }
}

module.exports = AumentarCommand;

class DiminuirCommand {
    constructor(contador) {
        this.contador = contador;
    }

    execute() {
        this.contador.diminuir();
    }

    undo() {
        this.contador.aumentar();
    }
}

module.exports = DiminuirCommand;
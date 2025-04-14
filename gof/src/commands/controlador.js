class Controlador {
    constructor() {
        this.commands = [];
    }

    executeCommand(command) {
        command.execute();
        this.commands.push(command);
    }

    undoLastCommand() {
        if (this.commands.length === 0) return;
        const lastCommand = this.commands.pop();
        lastCommand.undo();
    }
}

module.exports = Controlador;
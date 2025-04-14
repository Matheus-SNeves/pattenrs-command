const Contador = require('../models/Contador');
const AumentarCommand = require('../commands/AumentarCommand');
const DiminuirCommand = require('../commands/DiminuirCommand');
const Controlador = require('../commands/Controlador');

const contador = new Contador();
const controlador = new Controlador();

const aumentar = (req, res) => {
    const command = new AumentarCommand(contador);
    controlador.executeCommand(command);
    res.json({ valor: contador.getValor() });
};

const diminuir = (req, res) => {
    const command = new DiminuirCommand(contador);
    controlador.executeCommand(command);
    res.json({ valor: contador.getValor() });
};

const desfazer = (req, res) => {
    controlador.undoLastCommand();
    res.json({ valor: contador.getValor() });
};

const obterValor = (req, res) => {
    res.json({ valor: contador.getValor() });
};

module.exports = {
    aumentar,
    diminuir,
    desfazer,
    obterValor
};
class Contador {
  constructor() {
      this.valor = 0; // Valor inicial do contador
  }

  aumentar() {
      this.valor += 1;
      console.log(`Contador aumentado: ${this.valor}`);
  }

  diminuir() {
      this.valor -= 1;
      console.log(`Contador diminuído: ${this.valor}`);
  }

  getValor() {
      return this.valor;
  }
}

module.exports = Contador;
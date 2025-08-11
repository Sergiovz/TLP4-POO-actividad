//* Actividad Practica Punto 2
class CuentaBancaria {
  titular;
  #saldoInicial;

  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.#saldoInicial = saldoInicial;
  }

  getter() {
    console.log(
      `Titular ${this.titular} - Saldo actual: ${this.#saldoInicial}`
    );
  }

  setter(monto) {
    if (monto < 0) {
      console.log("El monto debe ser mayor a 0");
    }

    console.log(`Saldo: ${this.#saldoInicial}`);
    this.#saldoInicial += monto;
    console.log(`Monto Ingresado: -> ${monto}`);
    console.log(`Saldo Actual: ${this.#saldoInicial}`);
  }

  extraer(monto) {
    if (!(monto > 0 && this.#saldoInicial >= monto)) {
      console.log("Lo sentimos, fondos insuficientes");
    }

    this.#saldoInicial -= monto;

    console.log(`Saldo: $${this.#saldoInicial}`);
    console.log(`Extracción: -> $${monto}`);
    console.log(`Saldo Restante: $${this.#saldoInicial}`);
  }
}

const cuenta = new CuentaBancaria("Jhon Doe", 1000);

cuenta.getter();
cuenta.extraer(200);
cuenta.setter(2000);

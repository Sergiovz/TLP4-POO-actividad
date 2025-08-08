//* Actividad Practica Punto 2
class CuentaBancaria {
  titular;
  #saldoInicial;

  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.#saldoInicial = saldoInicial;
  }

  saldoInicial(nuevoSaldo) {
    if (nuevoSaldo < 0) {
      console.log(
        "Lo sentimos, el saldo no puede establacerse como un valor negativo"
      );
    }

    this.#saldoInicial = nuevoSaldo;
  }

  depositar(monto) {
    this.#saldoInicial += monto;
  }

  extraer(monto) {
    if (this.#saldoInicial >= monto) {
      this.#saldoInicial -= monto;
    } else {
      console.log("Lo sentimos, fondos insuficientes");
    }
  }

  getter() {
    console.log(`Saldo actual: ${this.#saldoInicial}`);
  }
}

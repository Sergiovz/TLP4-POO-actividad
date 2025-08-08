//* Actividad Practica Punto 1
function CuentaBancaria() {
  this.titular = titular;
  this.saldoInicial = saldoInicial;

  depositar = function (monto) {
    this.saldoInicial += monto;
  };

  extraer = function (monto) {
    if (this.saldoInicial >= monto) {
      this.saldoInicial -= monto;
    } else {
      console.log("Lo siento, fondos insuficientes");
    }
  };

  consultarSaldo = function () {
    console.log(`Saldo actual: ${this.saldoInicial}`);
  };
}

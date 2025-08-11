//* Actividad Practica Punto 1
function CuentaBancaria(titular, saldoInicial) {
  this.titular = titular;
  this.saldoInicial = saldoInicial;
}

CuentaBancaria.prototype.depositar = function (monto) {
  if (monto > 0) {
    this.saldoInicial += monto;
    console.log(`Depósito realizado. Nuevo saldo: $${this.saldoInicial}`);
  } else {
    console.log("El monto debe ser mayor a 0");
  }
};

CuentaBancaria.prototype.extraer = function (monto) {
  if (this.saldoInicial >= monto) {
    this.saldoInicial -= monto;
  } else {
    console.log("Lo siento, fondos insuficientes");
  }
};

CuentaBancaria.prototype.consultarSaldo = function () {
  console.log(`Titular: ${this.titular} - Saldo actual: ${this.saldoInicial}`);
};

const cuenta = new CuentaBancaria("Jhon", 1000);

cuenta.consultarSaldo();
cuenta.extraer(200);
cuenta.consultarSaldo();
cuenta.depositar(1000);

# Programación Orientada a Objetos en JavaScript (POO)

## Análisis Teórico

- ¿Qué diferencias, ventajas y desventajas encontrás entre usar funciones constructoras con prototype y usar class?

Ambas funciones constructoras internamente realizan lo mismo.
Las funciones constructoras de prototipo son distintas de las funciones constructoras de clases en la sintaxis.

Ejemplo:
Basado en Prototipos (ES5)
```javascript
    function CuentaBancaria(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    CuentaBancaria.prototype.depositar = function(monto) {
        this.saldo += monto;
    };

    CuentaBancaria.prototype.extraer = function(monto) {
        if (this.saldo >= monto) {
            this.saldo -= monto;
        }
    };
```

Basado en Clases (ES6+)
```Javascript
    class CuentaBancaria {
        constructor(titular, saldo) {
            this.titular = titular;
            this.saldo = saldo;
        }

        depositar(monto) {
            this.saldo += monto;
        }

        extraer(monto) {
            if (this.saldo >= monto) {
                this.saldo -= monto;
            }
        }
    }
```


- ¿Cuáles son las ventajas de usar getters y setters?



- ¿Qué problemas pueden surgir al modificar prototipos nativos como String?



- Teniendo en cuenta un objeto personPrototype que contiene un método greet, ¿qué diferencias encontrás entre asignar ese método directamente al prototype de una función constructora o usar Object.assign?

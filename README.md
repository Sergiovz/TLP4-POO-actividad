# Programación Orientada a Objetos en JavaScript (POO)

## Análisis Teórico

- **¿Qué diferencias, ventajas y desventajas encontrás entre usar funciones constructoras con prototype y usar class?**

> Ambas funciones constructoras internamente realizan lo mismo.
> Las funciones constructoras de prototipo son distintas de las funciones constructoras de clases en la sintaxis.

> **Funciones constructoras con prototype**: Usan la función tradicional y el prototipo para compartir métodos. Son compatibles con versiones antiguas de JavaScript.

> **Clases (class)**: Introducidas en ES6, ofrecen una sintaxis más clara y moderna, permiten propiedades privadas y herencia más sencilla, aunque internamente usan prototipos.

Ejemplo:
_Basado en Prototipos (ES5)_

```javascript
function CuentaBancaria(titular, saldo) {
  this.titular = titular;
  this.saldo = saldo;
}

CuentaBancaria.prototype.depositar = function (monto) {
  this.saldo += monto;
};

CuentaBancaria.prototype.extraer = function (monto) {
  if (this.saldo >= monto) {
    this.saldo -= monto;
  }
};
```

_Basado en Clases (ES6+)_

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

**Ventajas de class:** Sintaxis más clara, soporte para propiedades privadas y herencia más sencilla.  
**Ventajas de prototype:** Mayor compatibilidad y flexibilidad para modificar métodos en tiempo de ejecución.

---

- **¿Cuáles son las ventajas de usar getters y setters?**

_Ventajas de usar getter y setter:_

1. **Encapsulación**: poder controlar el acceso a las propiedades internas del objeto, para evitar modificaciones directas e indebidas
2. **Validación**: Se puede agregar lógica para validar los valores antes de asignarlos como evitar valores negativos
3. **Abstracción**: Poder ocultar la implementación interna y exponer solo lo que es necesario, para facilitar cambios futuros sin afectar el código que usa el objeto
4. **Lectura y escritura controlada**: Permitir ejecutar código adicional al leer o modificar una propiedad como registrar logs o actualizar otros valores
5. **Compatibilidad**: Permitir mantener una interfaz consistente aunque la implementación interna cambie.

> En pocas palabras los getters y setters mejoran la seguridad, mantenibilidad y flexibilidad del código orientado a objetos.

---

- **¿Qué problemas pueden surgir al modificar prototipos nativos como String?**

> Modificar prototipos nativos puede causar conflictos con futuras versiones de JavaScript, errores en librerías de terceros y dificultades para mantener el código.

por ejemplo 
```javascript
String.prototype.saludar = function () {
  return "Hola";
};
```
> Esto agrega el método a todas las cadenas, lo que puede causar problemas si otra librería o el propio JavaScript en el futuro usa el mismo nombre.

---

- **Teniendo en cuenta un objeto personPrototype que contiene un método greet, ¿qué diferencias encontrás entre asignar ese método directamente al prototype de una función constructora o usar Object.assign?**

> Al asignar directamente el método greet que contiene un objeto personPrototype a una función constructora estamos realizando una asignación directa, que sobre escribe el prototipo de personPrototype y también a su función constructor.

> Al realizar una asignación con Object.assign no estamos estableciendo el prototipo directamente, solo estamos realizando copias de sus propiedades en ese momento, cualquier cambio posterior en el prototipo no se vera afectado en el objeto

```javascript
const personPrototype = {
  greet() {
    console.log(`Hola, Bienvenido ${this.name}`);
  },
};

function Person(name) {
  this.name = name;
}

Person.prototype = personPrototype; // Se reemplaza totalmente el prototye

Object.assign(Person.prototype, personPrototype); // Se copian los métodos y propiedades solamente
```

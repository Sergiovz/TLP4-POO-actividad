String.prototype.concatenarPalabra = function (palabra) {
  return `${this} ${palabra}`;
};

let nombre = "Jhon Doe";

console.log(
  nombre.concatenarPalabra("Bienvenido,").concatenarPalabra("Como estás?")
);

console.log(
  "Jhon Doe"
    .concatenarPalabra("Estudiante")
    .concatenarPalabra("de Desarrolo")
    .concatenarPalabra("de Software")
);

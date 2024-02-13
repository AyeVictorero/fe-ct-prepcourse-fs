function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var mayoresADiez  = array.filter(num => num>10);
  var mayoresADiezContados = mayoresADiez.length;
  return mayoresADiezContados;
}

module.exports = contarElementosMayoresA10;

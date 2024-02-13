function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var arrayMayus = array.map(str => str.toUpperCase());

  return arrayMayus;
}

module.exports = convertirStringAMayusculas;

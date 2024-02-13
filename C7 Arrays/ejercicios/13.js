function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var numPares = array.filter(num => num%2===0);

  return numPares;
}

module.exports = filtrarNumerosPares;

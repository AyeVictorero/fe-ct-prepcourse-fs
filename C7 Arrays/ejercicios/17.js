function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var sumaElementos = arrayOfNums.reduce(function(num, suma){
    return num + suma;
  })
  return sumaElementos;
}

module.exports = agregarNumeros;

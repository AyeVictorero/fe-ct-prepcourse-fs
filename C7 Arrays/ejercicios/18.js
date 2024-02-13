function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var resultado = resultadosTest.reduce(function (acumulador, num){
    return(acumulador + num);
  });
  return resultado/resultadosTest.length;
}

module.exports = promedioResultadosTest;

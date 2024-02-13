function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  if (array.every(elemento => elemento === array[0])){
    return true;
}
return false;
}

module.exports = todosIguales;

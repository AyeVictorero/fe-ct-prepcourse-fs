function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   var indRandom= Math.floor(Math.random() * array.length);
   return array[indRandom];
}

module.exports = obtenerElementoAleatorio;

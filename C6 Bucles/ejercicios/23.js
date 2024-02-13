function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  var iterador = 8;
   var suma = num;

   do{
      suma +=5;
      iterador--;
   }while (iterador > 0)
   return suma;
}

module.exports = doWhile;
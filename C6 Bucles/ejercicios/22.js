function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"
   var combinado = [];
   var arg1 = str1.split('');
   var arg2 = str2.split('');
   var arg3 = str3.split('');

   var largoStr = Math.max(arg1.length, arg2.length, arg3.length);
   for (let i = 0; i < largoStr; i++) {
      if (i < arg1.length) {
          combinado.push(arg1[i]);
      }
      if (i < arg2.length) {
         combinado.push(arg2[i]);
     }
     if (i < arg3.length) {
         combinado.push(arg3[i]);
     }
 }
 var resultadoCombinado = combinado.join('');

    return resultadoCombinado;
}

module.exports = combine;

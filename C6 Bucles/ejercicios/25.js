function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:
   var palafrase = string.replace(/ /g, "").toLowerCase();
 var p = palafrase.length -1;
 for(var i = 0; i < palafrase.length; i++){
  if(palafrase[i] !== palafrase[p])return false;
    p--;
 }
 return true;
}

module.exports = esPalindromo;

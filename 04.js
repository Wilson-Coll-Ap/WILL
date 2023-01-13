/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  var i=num.toString(),e=i.length-1
    for(let q=0;q<i.length;q+=1){if(i[q]!==i[e]){return "No es simétrico"}e-=1}
    return "Es simétrico"}

var j=115

console.log(numeroSimetrico(j))
// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico
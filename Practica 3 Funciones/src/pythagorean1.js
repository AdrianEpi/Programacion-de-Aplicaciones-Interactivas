/* Universidad de La Laguna
   Escuela Superior de Ingeniería y Tecnología
   Grado en Ingeniería Informática
   Asignatura: Programación de Aplicaciones Interactivas
   Curso: 3º
   Práctica 2 PAI - Funciones
   Autor: Adrián Epifanio Rodríguez Hernández
   Correo: alu0101158280@ull.edu.es
   Fecha: 04/03/2020
   Contenido: Ejecicios clase miercoles 4 marzo
Referencias:  Enunciado de la práctica:
              https://github.com/fsande/PAI-P03-Funciones/blob/master/2019-2020_p03_Funciones.md

              Sum of Sequence of Odd Index Fib onacci Numbers
              https://proofwiki.org/wiki/Sum_of_Sequence_of_Odd_Index_Fibonacci_Numbers

              Repositorio git con este (y otros) códigos:
              https://github.com/ULL-ESIT-INF-PAI-2019-2020/pai-p03-functions-AdrianEpi
Historial de revisiones
              04/03/2020 - Creación (primera versión) del código
              04/03/2020 - Versión presentada para evaluación
*/


/**
 * Funcion a la que se le pasan 3 parámetros y devuelve true si es un trio pitagórico
 * y false si no lo es.
 * @param int firstNumber 
 * @param int secondNumber 
 * @param int c 
 */ 
function arePythagorean(firstNumber, secondNumber, thirdNumber) {
  console.log("Are ", firstNumber, ", ", secondNumber, ", ", thirdNumber, " pythagorean?");
  if(firstNumber * firstNumber + secondNumber * secondNumber === thirdNumber * thirdNumber) {
    console.log("True");
    return true;
  }
  else {
    console.log("False");
    return false;
  }
}
const myArgs = process.argv.slice(2);
if (myArgs.length != 3) {
  console.log("Error, el programa debe recibir 3 números como argumentos. \"node pythagorean1.js 3 4 5\"");
}
else {
  const parameter1 = parseInt(myArgs[0]);
  const parameter2 = parseInt(myArgs[1]);
  const parameter3 = parseInt(myArgs[2]);
  arePythagorean(parameter1, parameter2, parameter3);
}


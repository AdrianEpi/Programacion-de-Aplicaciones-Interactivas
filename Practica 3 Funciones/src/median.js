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

              arithmeticSum of Sequence of Odd Index Fib onacci Numbers
              https://proofwiki.org/wiki/Sum_of_Sequence_of_Odd_Index_Fibonacci_Numbers

              Repositorio git con este (y otros) códigos:
              https://github.com/ULL-ESIT-INF-PAI-2019-2020/pai-p03-functions-AdrianEpi
Historial de revisiones
              04/03/2020 - Creación (primera versión) del código
              04/03/2020 - Versión presentada para evaluación
*/

/**
 * Function que recibe cualquier cantidad de números enteros y devuelve la media harmónica
 * @param  int serie Cualquier cantidad de números pasados como argumentos
 */
function median(...serie) {
  let arithmeticSum = 0;
  let mean = 0;
  let medianVector = [];
  let counter = 0;
  for(let elemento of serie) {
    if(elemento <= medianVector[counter]) {
      medianVector[counter] = parseInt
    }
  }
  for(let counter of serie) {
    arithmeticSum += parseInt(counter);
  }
  mean = arithmeticSum / serie.length;
  console.log(mean);
}



// Librería necesaria para el performance.now();
const {
  performance,
  PerformanceObserver
} = require('perf_hooks');

const myArgs = process.argv.slice(2);
if (myArgs.length < 1) {
  console.log("Error, el programa debe recibir X números como argumentos. \"node harmonicMean.js X X X X X...\"");
}
else {
  let startClock = performance.now();
  median(...myArgs);
  let endClock = performance.now();
  let time = (endClock - startClock)/1000;
  console.log("Tiempo de ejecución: " + time.toFixed(3) + " segundos");  
  
}


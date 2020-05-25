/* Universidad de La Laguna
   Escuela Superior de Ingeniería y Tecnología
   Grado en Ingeniería Informática
   Asignatura: Programación de Aplicaciones Interactivas
   Curso: 3º
   Práctica 2 PAI - Funciones
   Autor: Adrián Epifanio Rodríguez Hernández
   Correo: alu0101158280@ull.edu.es
   Fecha: 20/02/2020
   Contenido: Contiene la implementación de la función oddFibSum.js que calcula la suma
              de los n primeros términos de la serie de Fibonacci, F(n) de índice impar, es decir:
              oddFibSum(n) = F(1) + F(3) + ... + F(2*n-1)
              El programa comprueba asimismo que oddFibSum(n) = F(2*n), es decir,
              el 2n-ésimo número de Fibonacci.
Referencias:  Enunciado de la práctica:
              https://github.com/fsande/PAI-P03-Funciones/blob/master/2019-2020_p03_Funciones.md

              Sum of Sequence of Odd Index Fib onacci Numbers
              https://proofwiki.org/wiki/Sum_of_Sequence_of_Odd_Index_Fibonacci_Numbers

              Repositorio git con este (y otros) códigos:
              https://github.com/ULL-ESIT-INF-PAI-2019-2020/pai-p03-functions-AdrianEpi
Historial de revisiones
              24/02/2020 - Creación (primera versión) del código
              24/02/2020 - Versión presentada para evaluación
*/


/**
 * Calcula la suma de los n primeros términos de la serie de Fibonacci, F(n) de índice impar.
 *
 * @param      {number}  parameter  The parameter
 */
function oddFibSum(parameter) {
  let resultado = 1;
  let num_fibonacci = 1;
  let numero_anterior = 1;
  let output_line = "";
  console.log("oddFibSum(1) = 1");
  for(let counter = 2; counter <= parameter*2; counter++) {
    num_fibonacci = num_fibonacci + numero_anterior;
    numero_anterior = num_fibonacci - numero_anterior;
    if((counter % 2) != 0) {
      console.log("oddFibSum(", parseInt(counter / 2) + 1, ") = ", num_fibonacci);
      resultado += num_fibonacci;
    }
  }
  console.log("La suma es: ", resultado);
}

/**
 * Muestra por pantalla los n primeros números de fibonacci
 *
 * @param      {number}  parameter  The parameter
 * @return     {number}  { description_of_the_return_value }
 */
function fibonacci(parameter) {
  let num_fibonacci = 1;
  let numero_anterior = 1;
  console.log("fibonacci( 1 ) = 1");
  console.log("fibonacci( 2 ) = 1");
  for(let counter = 2; counter < parameter; counter++) {
    num_fibonacci = num_fibonacci + numero_anterior;
    numero_anterior = num_fibonacci - numero_anterior;
    console.log("fibonacci(", counter + 1, ") = ", num_fibonacci);
  }
  return num_fibonacci;
}


const myArgs = process.argv.slice(2);
if (myArgs.length != 1) {
  console.log("Error, el programa debe recibir 1 número como argumento. \"node oddFibSum.js 25\"");
}
else {
  const parameter = parseInt(myArgs[0], 10);
  oddFibSum(parameter);
  //fibonacci(paramenter);
}


/* Universidad de La Laguna
   Escuela Superior de Ingeniería y Tecnología
   Grado en Ingeniería Informática
   Asignatura: Programación de Aplicaciones Interactivas
   Curso: 3º
   Práctica 2 PAI - Funciones
   Autor: Adrián Epifanio Rodríguez Hernández
   Correo: alu0101158280@ull.edu.es
   Fecha: 20/02/2020
   Contenido: Contiene la implementación de la función without2.js que pasados 2 parámetros al
              programa muestra por pantalla todos los números en base 3 que para los cuales ninguno
              de ellos se forme empleando "2 * 3 ^ x", es decir, los números cuya representación en
              base 3 no contiene el dígito 2.
Referencias:  Enunciado de la práctica:
              https://github.com/fsande/PAI-P03-Funciones/blob/master/2019-2020_p03_Funciones.md

              Repositorio git con este (y otros) códigos:
              https://github.com/ULL-ESIT-INF-PAI-2019-2020/pai-p03-functions-AdrianEpi
Historial de revisiones
              24/02/2020 - Creación (primera versión) del código
              24/02/2020 - Versión presentada para evaluación
*/



/**
 * Prints on screen all the numbers in base 3 without 2 between the interval [smal_number, big_number].
 *
 * @param      {number}  small_number  The small number
 * @param      {number}  big_number    The big number
 */
function without2(small_number, big_number) {
  let output_line = "";
  for(let result = small_number; result <= big_number; result++) {
    let ratio = result;
    for(; ratio > 3;) {
      if((ratio % 3 === 1) || (ratio % 3 === 0)) {
        ratio = parseInt(ratio / 3);
      }
      else {
        break;
      }
    }
    if((ratio % 3 === 1) || (ratio % 3 === 0)) {
      ratio = ratio / 3;
      output_line += result + " ";
    }
  }
  console.log(output_line);
}

const myArgs = process.argv.slice(2);

if (myArgs.length != 2) {
  console.log("Error, el programa debe recibir 2 números como argumentos. \"node without2.js 4 21\"");
}
else {
  const parameter1 = parseInt(myArgs[0]);
  const parameter2 = parseInt(myArgs[1]);
  if(parameter1 >= parameter2) {
    without2(parameter2, parameter1);
  }
  else {
    without2(parameter1, parameter2);
  }  
}


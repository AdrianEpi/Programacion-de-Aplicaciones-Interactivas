/* Universidad de La Laguna
   Escuela Superior de Ingeniería y Tecnología
   Grado en Ingeniería Informática
   Asignatura: Programación de Aplicaciones Interactivas
   Curso: 3º
   Práctica 2 PAI - Funciones
   Autor: Adrián Epifanio Rodríguez Hernández
   Correo: alu0101158280@ull.edu.es
   Fecha: 20/02/2020
   Contenido: Calcula los n primeros términos de la sucesión en la que cada uno de sus términos es el menor
              número natural tal que no está en PA con cualesquiera dos términos anteriores de la sucesión.
              Así por ejemplo, la ejecución
              $ node without3inAP.js 20
              debería dar como resultado la sucesión: 0,1,3,4,9,10,12,13,27,28,30,31,36,37,39,40,81,82,84,85

    Referencias:  Enunciado de la práctica:
                  https://github.com/fsande/PAI-P03-Funciones/blob/master/2019-2020_p03_Funciones.md
                  
                  Repositorio git con este (y otros) códigos:
                  https://github.com/ULL-ESIT-INF-PAI-2019-2020/pai-p03-functions-AdrianEpi
    Historial de revisiones
                  28/02/2020 - Creación (primera versión) del código
                  28/02/2020 - Versión presentada para evaluación
*/


/**
 * Calcula los n primeros términos de la sucesión en la que cada uno de sus términos es el menor 
 * número natural tal que no está en PA con cualesquiera dos términos anteriores de la sucesión.
 * 
 * @param {parameter} The parameter 
 */
function without3inAP(parameter) {
  let aux = [];
  aux.push(0);
  aux.push(1);
  let isInAP;
  let tryNumber = 2;
  let APCounter = 0;
  for(;APCounter < parameter-2;) {
    isInAP = false;
    for(let i = 0; i < aux.length; i++) {
      for(let j = 0; j < aux.length; j++) {
        if((aux[j] - aux[i]) === (tryNumber - aux[j])) {
          isInAP = true;
          break;
        }
      }
      if(isInAP === true) {
        break;
      }
    }
    if (isInAP === false) {
      aux.push(tryNumber);
      APCounter++;
    }
    tryNumber++;
  }
  let string = '';
  for(let i = 0; i < aux.length; i++) {
    string += aux[i] + " ";
  }
  console.log(string);
}

const myArgs = process.argv.slice(2);
if (myArgs.length != 1) {
  console.log("Error, el programa debe recibir 1 número como argumento. \"node without3inAP.js 25\"");
}
else {
  const parameter = parseInt(myArgs[0], 10);
  without3inAP(parameter);
}


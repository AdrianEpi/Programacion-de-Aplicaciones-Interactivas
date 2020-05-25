/* Universidad de La Laguna
   Escuela Superior de Ingeniería y Tecnología
   Grado en Ingeniería Informática
   Asignatura: Programación de Aplicaciones Interactivas
   Curso: 3º
   Práctica 4 PAI - El problema de las 8 reinas
   Autor: Adrián Epifanio Rodríguez Hernández
   Correo: alu0101158280@ull.edu.es
   Fecha: 04/03/2020
   Contenido: Ejecicios clase miercoles 4 marzo
Referencias:  Enunciado de la práctica:
              https://github.com/fsande/PAI-P04-8Queens/blob/master/2019-2020_p04_8Queens.md
              Repositorio git con este (y otros) códigos:
              https://github.com/ULL-ESIT-INF-PAI-2019-2020/practica-4-8queens-AdrianEpi
Historial de revisiones
              04/03/2020 - Creación (primera versión) del código
              04/03/2020 - Versión presentada para evaluación
*/

/**
 * Función que inicia el "juego" del problema de las 8 reinas
 * @param {int} queenNumber El número de reinas
 */
function solveProblem(queenNumber) {
  let board = [];
  for (let counter = 0; counter < queenNumber * queenNumber; counter++) {
    board[counter] = -1;
  }
  introduceQueen(0, queenNumber, ...board);
}

/**
 *  Introduce una reina en una posicion.
 * @param {int} row La fila en la que queremos introducir la reina
 * @param {int} queenNumber El número de reinas
 * @param  {...int} board El tablero del juego
 */
function introduceQueen(row, queenNumber, ...board) {
  if (row < queenNumber) {
    for (board[row] = 0; board[row] < queenNumber; board[row]++) {
      if (tryQueen(row, ...board) === 1) {
        introduceQueen(row + 1, queenNumber, ...board);
      }
    }
  }
  else {
    console.log();
    let startClockPause = performance.now();
    const press = readlineSync.question('Please, press for continue . . .');
    let endClockPause = performance.now();
    time_paused += (endClockPause - startClockPause) / 1000;
    printBoard(queenNumber, ...board);
  }
}


/**
 * Función que prueba si una reina puede ir en esa posición o no
 * @param {int} row La fila en la que queremos introducir la reina
 * @param  {...int} board El tablero del juego
 */
function tryQueen(row, ...board) {
  let position;
  for (position = 0; position < row; position++) {
    if ((board[position] === board[row]) || (Math.abs(row - position) === (Math.abs(board[row] - board[position])))) {
      return 0;
    }
  }
  return 1;
}


/**
 * Función que imprime por pantalla el tablero con la solución
 * @param {int} queenNumber El número de reinas
 * @param  {...int} board El tablero del juego
 */
function printBoard(queenNumber, ...board) {
  console.log();
  console.log("SOLUCION ", solution);
  solution++;
  console.log();
  console.log(' A B C D E F G H');
  let queensPositions = [];
  for(let counter = 0; counter < queenNumber; counter++) {
    queensPositions[counter] = '';
  }
  for (let row_ = 0; row_ < queenNumber; row_++) {
    let string = ' ';
    for (let column_ = 0; column_ < queenNumber; column_++) {
      if (board[row_] === column_) {
        string += 'Q' + ' ';
        queensPositions[row_] = '(' + String.fromCharCode(65 + column_) + ', ' + (row_ + 1) + ')';
      }
      else {
        string += '. ';
      }
    }
    console.log(string, (row_ + 1),  ' ->  ', queensPositions[row_]);
  }
}


// Librería necesaria para el performance.now();
const {
  performance,
  PerformanceObserver
} = require('perf_hooks');

// Librería para esperar hasta que se pulse una tecla
const readlineSync = require('readline-sync')


let time_paused = 0;
const myArgs = process.argv.slice(2);
let solution = 1;
if (myArgs.length != 1) {
  console.log("Error, el programa debe recibir 1 argumento como parámetro que sera utilizado para crear un tablero de NxN con N reinas. \"node 8queen.js n\"");
}
else {
  const parameter1 = parseInt(myArgs[0]);
  let startClock = performance.now();
  solveProblem(parameter1);
  let endClock = performance.now();
  let time = (endClock - startClock) / 1000;
  time = time - time_paused;
  console.log("Tiempo de ejecución: " + time.toFixed(3) + " segundos");
}
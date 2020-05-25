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
  for (let counter = 0; counter < (queenNumber * queenNumber); counter++) {
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
    if (restrictionQueens(queenNumber, ...board) === true) {
      console.log();
      let startClockPause = performance.now();
      const press = readlineSync.question('Please, press for continue . . .');
      let endClockPause = performance.now();
      time_paused += (endClockPause - startClockPause) / 1000;
      printBoard(queenNumber, ...board);      
    }
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
  const ASCIISTART = 65;
  console.log();
  console.log("SOLUCION ", solution);
  solution++;
  console.log();
  console.log(' A B C D E F G H');
  let queensPositions = [];
  for (let counter = 0; counter < queenNumber; counter++) {
    queensPositions[counter] = '';
  }
  for (let row_ = 0; row_ < queenNumber; row_++) {
    let string = ' ';
    for (let column_ = 0; column_ < queenNumber; column_++) {
      if (board[row_] === column_) {
        string += 'Q' + ' ';
        queensPositions[row_] = '(' + String.fromCharCode(ASCIISTART + column_) + ', ' + (row_ + 1) + ')';
      }
      else {
        string += '. ';
      }
    }
    console.log(string, (row_ + 1), ' ->  ', queensPositions[row_]);
  }
}

/**
 * Function that calcuates the equation of a line with 2 given points
 * @param {int, int} point1 Point (x1, y1) 
 * @param {int, int} point2 Point (x2, y2) 
 */
function lineFromTo(point1, point2) {
  let slope;
  let orderedAtOrigin;
  slope = parseFloat(point2[1] - point1[1]) / (point2[0] - point1[0]);
  orderedAtOrigin = point1[1] - (point1[0] * slope);
  let equation = [];
  equation[0] = slope;
  equation[1] = orderedAtOrigin;
  return equation;
}


/**
 * Function that returns true if the given point is on the equation or false if is not.
 * @param {int, int} point Point (x2, y2)
 * @param {float, int} line The line equation
 */
function isPointInLine(point, line) {
  if(point[1] === ((line[0] * point[0]) + line[1])) {
    return true;
  }
  return false;
}

/**
 * Función que comprueba que se cumpla nuestra restricción personal de que las reinas
 * no pueden estar alineadas.
 * @param {int} queenNumber El número de reinas
 * @param  {...int} board El tablero del juego
 */
function restrictionQueens(queenNumber, ...board) {
  let pointsCounter = 0;
  let point1 = [];
  let point2 = [];
  let point3 = [];
  let queensBank = [];
  for(let counter = 0; counter < queenNumber; counter++) {
    queensBank[counter] = [];
  }
  point1[0] = 0;
  for (let row_ = 0; row_ < queenNumber; row_++) {
    for (let column_ = 0; column_ < queenNumber; column_++) {
      if (board[row_] === column_) {
        queensBank[row_][0] = row_;
        queensBank[row_][1] = column_;
      }
    }
  }
  for(let queen = 0; queen < queenNumber; queen++) {
    point1[0] = queensBank[queen][0];
    point1[1] = queensBank[queen][1];
    for(let rows = (queen + 1); rows < queenNumber; rows++) {
      point2[0] = queensBank[rows][0];
      point2[1] = queensBank[rows][1];
      for(let columns = (rows +1); columns < queenNumber; columns++) {
        point3[0] = queensBank[columns][0];
        point3[1] = queensBank[columns][1];
        if(isPointInLine(point3, lineFromTo(point1, point2)) === true) {
          return false
        }
      }
    }
  }
  return true;
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


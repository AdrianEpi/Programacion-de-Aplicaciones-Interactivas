/*
* @Author: Adrián Epifanio
* @File Main program file
* @summary Universidad de La Laguna
*          Escuela Superior de Ingeniería y Tecnología
*          Grado en Ingeniería Informática
*          Asignatura: Programación de Aplicaciones Interactivas
*          Curso: 3º
*          Práctica 11 PAI - Chess
* @link  Enunciado de la práctica:
*         https://github.com/fsande/PAI-P11-Chess/blob/master/2019-2020_p10_Chess.md
*         Repositorio git con este (y otros) códigos:
*         https://github.com/ULL-ESIT-INF-PAI-2019-2020/pai-p11-chess-AdrianEpi
* @Date:   2020-05-01
*/

'use strict';
let problem8QueenSolution = 0;
let problem8QueenGeneralizedSolution = 0;
main();


/**
 * @desc Main function
 */
function main() {
  const canvas = document.getElementById('myCanvas');
  let ctx = canvas.getContext('2d');
  let backGround = new ChessBoard(canvas, ctx);
  backGround.printChessBoard();
  cleanDataCanvas();
}

/**
 * @desc Solves and prints on canvas the problem of the 8 queens next solution.
 */
function solve8Queen() {
  cleanDataCanvas();
  const canvas = document.getElementById('myCanvas');
  let ctx = canvas.getContext('2d');
  const canvas2 = document.getElementById('myDataCanvas');
  let ctx2 = canvas2.getContext('2d');
  const checkBox = document.getElementById('cbox1').checked;
  let backGround = new ChessBoard(canvas, ctx);
  backGround.printChessBoard();
  let game = new Chess(canvas, ctx);
  game.generateChess();

  if (checkBox === true) {
    game.solve8Queens(1);
    if (problem8QueenSolution < game.get_Solutions8Queens().length) {
      game.generate8QueenSolution(problem8QueenSolution);
      game.printBoard(ctx);
      game.printData(canvas2, ctx2, problem8QueenSolution);
      problem8QueenSolution++;
    }
    else {
      alert('Sorry, there are no more solutions for de 8 Queens Problem.');
    }
  }
  else {
    game.solve8Queens(0);
    if (problem8QueenGeneralizedSolution < game.get_Solutions8Queens().length) {
      game.generate8QueenSolution(problem8QueenGeneralizedSolution);
      game.printBoard(ctx);
      game.printData(canvas2, ctx2, problem8QueenGeneralizedSolution);
      problem8QueenGeneralizedSolution++;
    }
    else {
      alert('Sorry, there are no more solutions for the 8 Queens Generalized Problem.');
    }

  }
}

/**
 * @desc    Restarts the solution counter and prints the first solution.
 */
function generateSolution() {
  cleanDataCanvas();
  const checkBox = document.getElementById('cbox1').checked;
  if (checkBox === true) {
    problem8QueenSolution = 0;
  }
  else {
    problem8QueenGeneralizedSolution = 0;
  }
  solve8Queen();
}

/**
 * @desc     Initializes the board with the game starts positions.
 */
function startGame() {
  cleanDataCanvas();
  const canvas = document.getElementById('myCanvas');
  let ctx = canvas.getContext('2d');
  let backGround = new ChessBoard(canvas, ctx);
  backGround.printChessBoard();
  let game = new Chess(canvas, ctx);
  game.generateChess();
  game.startPosition();
  game.printBoard(ctx);
}

/**
 * @desc    Erases the visialization of the 2nd canvas in screen while not needed.
 */
function cleanDataCanvas() {
  const BGCOLOR = '#edebe9';
  const dataCanvas = document.getElementById('myDataCanvas');
  let ctx = dataCanvas.getContext('2d');
  ctx.beginPath();
  ctx.fillStyle = BGCOLOR;
  ctx.strokeStyle = BGCOLOR;
  ctx.fillRect(0, 0, dataCanvas.width, dataCanvas.height);
}

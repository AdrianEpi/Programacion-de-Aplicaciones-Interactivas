/*
* @Author: Adrián Epifanio
* @File Main Program
* @summary Universidad de La Laguna
*          Escuela Superior de Ingeniería y Tecnología
*          Grado en Ingeniería Informática
*          Asignatura: Programación de Aplicaciones Interactivas
*          Curso: 3º
*          Práctica 12 PAI - Life
* @link  Enunciado de la práctica:
*         https://github.com/fsande/PAI-P12-Life/blob/master/2019-2020_p12_Life.md
*         Repositorio git con este (y otros) códigos:
*         https://github.com/ULL-ESIT-INF-PAI-2019-2020/pai-p12-life-AdrianEpi
* @Date:   2020-05-08
*/

'use strict';
let finished = false;
let paused = true;
let firstTime = true;
const GRIDSIZE = 10;
let miliseconds = 25;
const canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let lifeGame = new LifeGame(GRIDSIZE, canvas, ctx);
let board = new Board(GRIDSIZE, 'black', canvas, ctx, 'white');

main();

/**
 * @desc Main function that creates the game and prints the initial empty board.
 */
async function main() {
  board.drawBoard();
  lifeGame.initializeGame();
}

/**
 * @desc Starts the game going automaticaly (printing one turn each X miliseconds)
 */
async function start() {
  if (firstTime === true) {
    initialize();
  }
  paused = false;
  lifeGame.paintCells();
  for (let i = 0; i < 9999999; i++) {
    if (finished === false) {
      updateSpeed()
      await new Promise(delay => setTimeout(delay, miliseconds));
      nextTurn();  
      if (paused === true) {
        break;
      }      
    }
  }
}

/**
 * @desc Calculates and prints on the canvas the next turn of the game.
 */
async function nextTurn() {
  if (firstTime === true) {
    initialize();
  }
  board.drawBoard();
  lifeGame.nextTurn();  
  lifeGame.paintCells();
}

/**
 * @desc Finishes de current game
 */
function finishGame() {
  finished = true;
}

/**
 * @desc Pauses the current game
 */
function pauseGame() {
  paused = true;
}

/**
 * @desc Initializes the game generating the random cells
 */
async function initialize() {
  firstTime = false;
  lifeGame = new LifeGame(GRIDSIZE, canvas, ctx);
  lifeGame.initializeGame();
  const randomCells = document.getElementById('randomCells').value;
  lifeGame.generateRandomAliveCells(randomCells);
}

/**
 * @desc Updates the speed between the turns of the game
 */
function updateSpeed() {
  const SPEED = new Array (25, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550);
  let speed = document.getElementById('speed').value
  miliseconds = SPEED[speed];
}
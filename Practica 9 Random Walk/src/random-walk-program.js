/*
* @Author: Adrián Epifanio
* @File Random Walk main program
* @summary Universidad de La Laguna
*          Escuela Superior de Ingeniería y Tecnología
*          Grado en Ingeniería Informática
*          Asignatura: Programación de Aplicaciones Interactivas
*          Curso: 3º
*          Práctica 8 PAI - Poker
* @link  Enunciado de la práctica:
*         https://github.com/fsande/PAI-P09-RandomWalk/blob/master/2019-2020_p09_RandomWalk.md
*         Repositorio git con este (y otros) códigos:
*         https://github.com/ULL-ESIT-INF-PAI-2019-2020/practica-9-random-walk-AdrianEpi
* @Date:   2020-04-15 12:35:56
* @Last Modified by:   Adrián Epifanio
*/
'use strict';
main();
/**
 * @desc Main function, starts the program.
 */
async function main() {
  const canvas = document.getElementById('myCanvas');
  let ctx = canvas.getContext('2d');
  let density = 0;
  while (density < 1 || density > 10) {
    density = prompt('Introduce the density (1 - 10):', '5');
  }
  let direction = 'A';
  let found = false;
  while (found === false) {
    direction = prompt('Introduce the main direction (N-S-W-E):', 'N');
    if (direction === 'N') {
      found = true;
    }
    else if (direction === 'S') {
      found = true;
    }
    else if (direction === 'E') {
      found = true;
    }
    else if (direction === 'W') {
      found = true;
    }
  }
  randomWalk(canvas, ctx, density, direction);
  
}

/**
 * @desc Initializes and generates the grid and prints the random walk on it.
 *
 * @param      {element}   canvas  The canvas
 * @param      {element}   ctx     The context
 * @param      {number}    density The density
 * @param      {char}      direction The main direction
 */
async function randomWalk(canvas, ctx, density, direction) {
  const SIZE = new Array(100, 100, 80, 50, 40, 25, 20, 16, 10, 10);
  const COLOR = "Gainsboro";
  const LINECOLOR = 'RED';
  ctx.beginPath();
  let grid = new Grid(SIZE[density - 1], canvas, ctx, COLOR);
  grid.drawGrid();
  ctx.closePath();
  await new Promise(delay => setTimeout(delay, 750));
  ctx.beginPath(); 
  ctx.lineWidth = 2;
  let randomWalk_ = new RandomWalk(canvas, ctx, LINECOLOR, SIZE[density - 1], direction);
  randomWalk_.set_PositionX(canvas.width / 2);
  randomWalk_.set_PositionY(canvas.height / 2);
  while (randomWalk_.drawNextLine() !== false) {
    randomWalk_.drawNextLine();
    await new Promise(delay => setTimeout(delay, 500));
  }
}
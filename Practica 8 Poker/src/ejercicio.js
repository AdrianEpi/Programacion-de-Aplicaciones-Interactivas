/*
* @Author: Adrián Epifanio
* @File Ejercicio clase
* @summary Universidad de La Laguna
*          Escuela Superior de Ingeniería y Tecnología
*          Grado en Ingeniería Informática
*          Asignatura: Programación de Aplicaciones Interactivas
*          Curso: 3º
*          Práctica 8 PAI - Poker
* @link  Enunciado de la práctica:
*         https://github.com/fsande/PAI-P08-Poker/blob/master/2019-2020_p08_Poker.md
*         Repositorio git con este (y otros) códigos:
*         https://github.com/ULL-ESIT-INF-PAI-2019-2020/practica-8-poker-AdrianEpi
* @Date:   2020-04-15 12:41:56
* @Last Modified by:   Adrián Epifanio
*/
main();

/**
 * @desc Starts the main program
 */
function main() {
  drawGrid();
}

/**
 * @desc Draws the grid on screen
 */
function drawGrid() {
  const canvas = document.getElementById('myCanvas');
  let ctx = canvas.getContext('2d');
  for (let width = 0; width < canvas.width; width = width + 10) {
    for (let height = 0; height < canvas.height; height = height + 10) {
      let point = new Point(width, height);
      drawCell(ctx, point);
    }
  }
  drawNumbers(ctx, canvas);
}

/**
 * @desc Draws a rectangle on screen for the grid
 * @param {element} ctx 
 * @param {object}  point 
 */
function drawCell(ctx, point) {
  const SIZE = 10;
  const COLOR = "Gainsboro"
  ctx.strokeStyle = COLOR;
  let rect = new Rectangle(point, SIZE, SIZE);
  rect.drawRectangle(ctx);
}

/**
 * @desc Draws the numbers on screen
 * @param {element} ctx 
 * @param {element} canvas 
 */
function drawNumbers(ctx, canvas) {
  ctx.beginPath();
  ctx.font = 'bold 20px sans-serif';
  for (let width = 0; width < canvas.length; width = width + 50) {
    ctx.fillText(toString(width), width, 15);
    ctx.stroke();
  }
  
}

/**
 * @desc Draws the grey lines of the grid
 * @param {element} ctx
 * @param {element} canvas
 */
function drawGrayLines(ctx, canvas) {
  const COLOR = "Gray"
  ctx.strokeStyle = COLOR;
  for (let width = 0; width < canvas.width; width = width + 50) {
      let point = new Point(50, 0);
      let point2 = new Point(50, canvas.height);
      let line = new Line(point, point2);
      line.drawLine(ctx);
  }
}
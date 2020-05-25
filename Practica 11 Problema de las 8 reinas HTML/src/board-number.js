/*
* @Author: Adrián Epifanio
* @File Ejercicio 2
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
* @Date:   2020-05-06
*/
'use strict';
main();

function main() {
  const canvas = document.getElementById('myCanvas');
  let ctx = canvas.getContext('2d');

  let grid = new Grid(100, canvas, ctx, 'black');
  grid.drawGrid();
}

function solveProblem() {
  const canvas = document.getElementById('myCanvas');
  let ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.stroke();
  ctx.closePath();
  let grid = new Grid(100, canvas, ctx, 'black');
  grid.drawGrid();
  let boardNumber = new BoardNumber(canvas, ctx, 7, 6);
  boardNumber.generateBoard();
  boardNumber.solveProblem();
  boardNumber.printBoard(ctx);
}

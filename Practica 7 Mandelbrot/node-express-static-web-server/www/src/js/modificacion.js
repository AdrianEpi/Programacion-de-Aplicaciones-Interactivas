/*
* @Author: Adrián Epifanio
* @File Modificacion
* @summary Universidad de La Laguna
*          Escuela Superior de Ingeniería y Tecnología
*          Grado en Ingeniería Informática
*          Asignatura: Programación de Aplicaciones Interactivas
*          Curso: 3º
*          Práctica 7 PAI - Mandelbrot
* @link  Enunciado de la práctica:
*         https://github.com/fsande/PAI-P07-Mandelbrot/blob/master/2019-2020_p07_Mandelbrot.md
*         Repositorio git con este (y otros) códigos:
*         https://github.com/ULL-ESIT-INF-PAI-2019-2020/practica-07-mandelbrot-AdrianEpi
* @Date:   2020-03-28 12:35:56
* @Last Modified by:   Adrián Epifanio
* @Last Modified time: 2020-04-01 12:58:02
*/
'use strict';

mainProgram();

/**
 * @desc The main program, starts the mod.
 */
function mainProgram() {
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  const BACKGROUND = "#e8edf1"
  ctx.fillStyle = BACKGROUND;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fill();
  drawFigure1(ctx);
  drawFigure2(ctx);
}


/**
 * @desc Makes a circle.
 *
 * @param      {string}  color      The color
 * @param      {number}  radius     The radius
 * @param      {number}  positionX  The position x
 * @param      {number}  positionY  The position y
 * @param      {element} ctx        The context
 */
function makeCircle(color, radius, positionX, positionY, ctx) {
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(positionX, positionY, radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

/**
 * @desc Draws the figure 2.
 *
 * @param      {element}  ctx     The context
 */
function drawFigure2(ctx) {
  const ORANGE = "#ff7e20";
  const GREY = "#93a3ba";
  const SMALLRADIUS = 20;
  const BIGRADIUS = 45;
  const STARTY = 250;
  const STARTX = 700;
  let posX = STARTX;
  let posY = STARTY;

  makeCircle(ORANGE, BIGRADIUS, posX, posY, ctx);
  posY -= 75;
  makeCircle(GREY, SMALLRADIUS, posX, posY, ctx);
  posY += 150;
  makeCircle(GREY, SMALLRADIUS, posX, posY, ctx);
  posY = STARTY;
  posX -= 75;
  makeCircle(GREY, SMALLRADIUS, posX, posY, ctx);
  posX += 150;
  makeCircle(GREY, SMALLRADIUS, posX, posY, ctx);
  posX = STARTX - 55;
  posY = STARTY - 55;
  makeCircle(GREY, SMALLRADIUS, posX, posY, ctx);
  posX += 110;
  makeCircle(GREY, SMALLRADIUS, posX, posY, ctx);
  posY += 110;
  makeCircle(GREY, SMALLRADIUS, posX, posY, ctx);
  posX -= 110;
  makeCircle(GREY, SMALLRADIUS, posX, posY, ctx);
}


/**
 * @desc Draws the figure 1.
 *
 * @param      {element}  ctx     The context
 */
function drawFigure1(ctx) {
  const ORANGE = "#ff7e20";
  const GREY = "#93a3ba";
  const SMALLRADIUS = 40;
  const BIGRADIUS = 70;
  const STARTX = 250;
  const STARTY = 250;

  let posX = STARTX;
  let posY = STARTY;
  makeCircle(ORANGE, SMALLRADIUS, posX, posY, ctx);
  posY -= 135;
  posX -= 80;
  makeCircle(GREY, BIGRADIUS, posX, posY, ctx);
  posX += 160;
  makeCircle(GREY, BIGRADIUS, posX, posY, ctx);
  posX = STARTX + 80;
  posY = STARTY + 135;
  makeCircle(GREY, BIGRADIUS, posX, posY, ctx);
  posX -= 160;
  makeCircle(GREY, BIGRADIUS, posX, posY, ctx);
  posX = STARTX + 170;
  posY = STARTY;
  makeCircle(GREY, BIGRADIUS, posX, posY, ctx);
  posX -= 340;
  makeCircle(GREY, BIGRADIUS, posX, posY, ctx);

}
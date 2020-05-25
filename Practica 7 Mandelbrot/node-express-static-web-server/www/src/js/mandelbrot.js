/*
* @Author: Adrián Epifanio
* @File Mandelbrot drawing
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
* @Last Modified time: 2020-03-30 18:33:37
*/
'use strict';

mainProgram();

/**
 * @desc The main program, starts the mandelbrot.
 */
function mainProgram() {
  let pointsNumber = prompt('Enter number of points:', '0');
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  let pointsVector = [];
  if (pointsNumber >= 1) {
    generateMandelbrot(canvas, ctx);
    pointsVector = generateRandomPoints(canvas, pointsNumber, pointsVector);
    monteCarloSampling(canvas, ctx, pointsVector);
  }
  else {
    alert('Canceled or Error in input: Input must be greater than 1.');
  }
}

/**
 * @desc Determines if the coordinates are in mandelbrot.
 *
 * @param      {number}   coordinateX  The coordinate x
 * @param      {number}   coordinateY  The coordinate y
 * @return     {boolean}  True if is in mandelbrot, False otherwise.
 */
function isInMandelbrot(coordinateX, coordinateY) {
  let realPart = coordinateX;
  let imaginaryPart = coordinateY;
  const MAXITER = 1000; // I have not put 10000 because it takes a long time and prints the same result
  for (let counter = 0; counter < MAXITER; counter++) {
    let temporalRealPart = (realPart * realPart) - (imaginaryPart * imaginaryPart) + coordinateX;
    let temporalImaginaryPart = (2 * realPart * imaginaryPart) + coordinateY;
    realPart = temporalRealPart;
    imaginaryPart = temporalImaginaryPart;

  }
  if (realPart * imaginaryPart <= 2) {
    return true;
  }
  return false;
}

/**
 * @desc Generates and prints the mandelbrot.
 *
 * @param      {element}  canvas  The canvas
 * @param      {element}  ctx     The context
 */
function generateMandelbrot(canvas, ctx) {
  const magnificationFactor = 200;
  let scaleX = 2;
  const scaleY = 1.5;
  for (let x = 0; x < canvas.width; x++) {
    for (let y = 0; y < canvas.height; y++) {
      if (isInMandelbrot((x / magnificationFactor - scaleX), (y / magnificationFactor - scaleY)) === true) {
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }
}

/**
 * @desc Generates random points in the interval [(-2.0, 0), (0.5, 1.125)].
 *
 * @param      {element}  canvas        The canvas
 * @param      {number}   pointsNumber  The points number
 * @param      {Array}    pointsVector  The points vector
 * @return     {Array}    The new vector with the random positions
 */
function generateRandomPoints(canvas, pointsNumber, pointsVector) {
  const XMIN = -2.0;
  const XMAX = 0.5;
  const YMIN = 0.0;
  const YMAX = 1.125;
  for (let pointsCounter = 0; pointsCounter < pointsNumber; pointsCounter++) {
    pointsVector[pointsCounter] = {
      x: getRandomNumber(XMIN, XMAX),
      y: getRandomNumber(YMIN, YMAX),
    }
  }
  return pointsVector;
}

/**
 * @desc Gets the a random x / y between te interval min and max.
 *
 * @param      {number}  min    The minimum x
 * @param      {number}  max    The maximum x
 * @return     {number}  The random x / y.
 */
function getRandomNumber(min, max) {
  let number = parseFloat(Math.random() * (max - min) + min);
  return number;
}

/**
 * @desc Uses the Monte Carlos's sampling for calculate the area and an error of the mandelbrot
 *
 * @param      {element}  canvas        The canvas
 * @param      {element}  ctx           The context
 * @param      {Array}    pointsVector  The points vector
 */
function monteCarloSampling(canvas, ctx, pointsVector) {
  let validPoints = 0;
  for (let counter = 0; counter < pointsVector.length; counter++) {
    if (isInMandelbrot(pointsVector[counter].x, pointsVector[counter].y) === true) {
      validPoints++;
    }
  }
  let area = 2 * 2.5 * 1.125 * validPoints / pointsVector.length;
  let error = area / Math.sqrt(pointsVector.length);
  ctx.font = 'bold 20px sans-serif';
  ctx.fillText('Area: ', 50, 50);
  ctx.fillText(area, 110, 50);
  ctx.fillText('Error: ', 50, 75);
  ctx.fillText(error, 110, 75);
}
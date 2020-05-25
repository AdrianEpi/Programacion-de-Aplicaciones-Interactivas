/**
 * @author Adrián Epifanio Rodríguez Hernández
 *         alu0101158280@ull.edu.es
 * @file Cálculo de la envolvente convexa
 * @since 19.03.2020
 * @summary Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Programación de Aplicaciones Interactivas
 * Curso: 3º
 * Práctica 4 PAI - El problema de las 8 reinas
 * @link  Enunciado de la práctica:
 *         https://github.com/fsande/PAI-P06-QuickHull/blob/master/2019-2020_p06_QuickHull.md
 *         Repositorio git con este (y otros) códigos:
 *         https://github.com/ULL-ESIT-INF-PAI-2019-2020/practica-06-quickhull-AdrianEpi
 * @version
 *            19/03/2020 - Creación (primera versión) del código
 *            23/03/2020 - Versión presentada para evaluación
 */

'use strict';
/**
 * @desc Main program
 *
 * @return      {Promise}  Delay the execution 1.75 seconds
 */
async function mainProgram() {
  let pointsNumber = prompt('Enter number of points:', '0');
  let pointsVector = [];
  const MYCANVAS = document.getElementById('myCanvas');
  if (pointsNumber > 2) {
    pointsVector = generatePoints(MYCANVAS, pointsNumber, pointsVector);
    printPoints(MYCANVAS, pointsNumber, pointsVector);
    let starter1 = findMinimumX(pointsNumber, pointsVector);
    let starter2 = findMaximumX(pointsNumber, pointsVector);
    printLine(starter1, starter2, MYCANVAS);
    upperQuickHull(starter1, starter2, MYCANVAS, pointsVector);
    lowerQuickHull(starter1, starter2, MYCANVAS, pointsVector);
    await new Promise(delay => setTimeout(delay, 7500));
    alert('FINISHED ALGORYTHM');
 }
  else {
    alert('Canceled or Error in input: Input must be greater than 2.');
  }
}

/**
 * @desc Generates random points.
 *
 * @param      {element}  canvas        The canvas
 * @param      {number}   pointsNumber  The points number
 * @param      {Array}    pointsVector  The points vector
 * @return     {Array}    The new vector with the random positions
 */
function generatePoints(canvas, pointsNumber, pointsVector) {
  for (let pointsCounter = 0; pointsCounter < pointsNumber; pointsCounter++) { 
    pointsVector[pointsCounter] = {
      x: Math.floor(Math.random() * canvas.width),
      y: Math.floor(Math.random() * canvas.height),
    }
  }
  return pointsVector;
}

/**
 * @desc Prints the points on screen.
 *
 * @param      {element}  canvas        The canvas
 * @param      {number}   pointsNumber  The points number
 * @param      {Array}    pointsVector  The points vector
 */
function printPoints(canvas, pointsNumber, pointsVector) {
  const RADIUS = 7;
  const WHITE = 'white';
  let ctx = canvas.getContext('2d');
  for (let pointsCounter = 0; pointsCounter < pointsNumber; pointsCounter++) { 
    ctx.beginPath();
    ctx.arc(pointsVector[pointsCounter].x, pointsVector[pointsCounter].y, RADIUS, 0, 2 * Math.PI);
    ctx.fillStyle = WHITE;
    ctx.fill();
    ctx.stroke();
  } 
}

/**
 * @desc the point with the minimum x coordinate.
 *
 * @param      {number}  pointsNumber  The points number
 * @param      {Array}   pointsVector  The points vector
 * @return     {Object}  The point with the minimum x coordinate.
 */
function findMinimumX(pointsNumber, pointsVector) {
  let minimumX = {
    x: pointsVector[0].x,
    y: pointsVector[0].y,
  }
  for (let counter = 1; counter < pointsNumber; counter++) {
    if (pointsVector[counter].x < minimumX.x) {
      minimumX.x = pointsVector[counter].x;
      minimumX.y = pointsVector[counter].y;
    }
    else if (pointsVector[counter] === minimumX.x) {
      if (pointsVector[counter].y < minimumX.x) {
        minimumX.x = pointsVector[counter].x;
        minimumX.y = pointsVector[counter].y;
      }
    }
  }
  return minimumX;
}

/**
 * @desc Finds the point with the maximum x coordinate.
 *
 * @param      {number}  pointsNumber  The points number
 * @param      {Array}   pointsVector  The points vector
 * @return     {Object}  The point with the maximum x coordinate.
 */
function findMaximumX(pointsNumber, pointsVector) {
  let maximumX = {
    x: pointsVector[0].x,
    y: pointsVector[0].y,
  }
  for (let counter = 1; counter < pointsNumber; counter++) {
    if (pointsVector[counter].x > maximumX.x) {
      maximumX.x = pointsVector[counter].x;
      maximumX.y = pointsVector[counter].y;
    }
    else if (pointsVector[counter] === maximumX.x) {
      if (pointsVector[counter].y > maximumX.x) {
        maximumX.x = pointsVector[counter].x;
        maximumX.y = pointsVector[counter].y;
      }
    }
  }
  return maximumX;
}


/**
 * @desc Calculates and print the upper half of the quick hull.
 *
 * @param      {Object}   point1        The point 1
 * @param      {Object}   point2        The point 2
 * @param      {Element}  canvas        The canvas
 * @param      {Array}    pointsVector  The points vector
 * @return     {Promise}  Delays the execution 1.25 seconds
 */
async function upperQuickHull(point1, point2, canvas, pointsVector) {
  if (pointsVector.length > 0) {
    let upperVector = [];
    let line = lineFromTo(point1, point2);
    for (let counter = 0; counter < pointsVector.length; counter++) {
      if (line.orderedAtOrigin > ((pointsVector[counter].x * (-line.slope)) + pointsVector[counter].y)) {
        upperVector.push(pointsVector[counter]);
      }
    }
    let pointA = furthestUpperPoint(line, upperVector);
    await new Promise(delay => setTimeout(delay, 1500));
    printLine(point1, pointA, canvas);
    printLine(pointA, point2, canvas);
    await new Promise(delay => setTimeout(delay, 500));
    if (upperVector.length >= 1) {
      eraseLine(point1, point2, canvas);
    }
    upperQuickHull(point1, pointA, canvas, upperVector);
    upperQuickHull(point2, pointA, canvas, upperVector);
  }
}

/**
 * @desc Calculates and print the lower half of the quick hull.
 *
 * @param      {Object}   point1        The point 1
 * @param      {Object}   point2        The point 2
 * @param      {Element}  canvas        The canvas
 * @param      {Array}    pointsVector  The points vector
 * @return     {Promise}  Delays the execution 1.75 seconds
 */
async function lowerQuickHull(point1, point2, canvas, pointsVector) {
  if (pointsVector.length > 0) {
    const TIME1 = 1500;
    const TIME2 = 500;
    let lowerVector = [];
    let line = lineFromTo(point1, point2);
    for (let counter = 0; counter < pointsVector.length; counter++) {
      if (line.orderedAtOrigin < ((pointsVector[counter].x * (-line.slope)) + pointsVector[counter].y)) {
        lowerVector.push(pointsVector[counter]);
      }
    }
    await new Promise(delay => setTimeout(delay, TIME1));
    let pointB = furthestLowerPoint(line, lowerVector);
    printLine(point1, pointB, canvas);
    printLine(pointB, point2, canvas);
    await new Promise(delay => setTimeout(delay, TIME2));
    if (lowerVector.length >= 1) {
      eraseLine(point1, point2, canvas);
    }
    lowerQuickHull(point1, pointB, canvas, lowerVector);
    lowerQuickHull(pointB, point2, canvas, lowerVector);
  }  
}

/**
 * @desc Finds the furthest point form the low half
 *
 * @param      {Object}  line          The line
 * @param      {Array}  pointsVector  The points vector
 * @return     {Object}  { description_of_the_return_value }
 */
function furthestLowerPoint(line, pointsVector) {
  let point = {
    x: pointsVector[0].x,
    y: pointsVector[0].y,
  }
  let distance = parseFloat(Math.abs( (-line.slope) * point.x + point.y + line.orderedAtOrigin) / Math.sqrt(line.slope * line.slope + 1));
  for (let counter = 0; counter < pointsVector.length; counter++) {
    let tryPoint = parseFloat(Math.abs(((- line.slope) * pointsVector[counter].x) + pointsVector[counter].y + line.orderedAtOrigin) / Math.sqrt(line.slope * line.slope + 1));
    if (distance < tryPoint) {
      point.x = pointsVector[counter].x;
      point.y = pointsVector[counter].y;
      distance = tryPoint;
    }
  }
  return point;
}

/**
 * @desc Finds the furthest point form the upper half.
 *
 * @param      {Object}  line          The line
 * @param      {Array}  pointsVector  The points vector
 * @return     {Object}  { description_of_the_return_value }
 */
function furthestUpperPoint(line, pointsVector) {
  let point = {
    x: pointsVector[0].x,
    y: pointsVector[0].y,
  }
  let distance = parseFloat(Math.abs( (-line.slope) * point.x + point.y + line.orderedAtOrigin) / Math.sqrt(line.slope * line.slope + 1));
  for (let counter = 0; counter < pointsVector.length; counter++) {
    let tryPoint = parseFloat((((- line.slope) * pointsVector[counter].x) + pointsVector[counter].y + line.orderedAtOrigin) / Math.sqrt(line.slope * line.slope + 1));
    if (distance > tryPoint) {
      point.x = pointsVector[counter].x;
      point.y = pointsVector[counter].y;
      distance = tryPoint;
    }
  }
  return point;
}

/**
 * @desc Calculates the line equation from 2 given points
 *
 * @param      {Object}  point1  The point 1
 * @param      {Object}  point2  The point 2
 * @return     {Array}   The line equation
 */
function lineFromTo(point1, point2) {
  let slope_;
  let orderedAtOrigin_;
  slope_ = parseFloat(point2.y - point1.y) / (point2.x - point1.x);
  orderedAtOrigin_ = point1.y - (point1.x * slope_);
  let line = {
    slope: slope_,
    orderedAtOrigin: orderedAtOrigin_,
  }
  return line;
}

/**
 * @desc Prints a line on screen.
 *
 * @param      {Object}  point1  The point 1
 * @param      {Object}  point2  The point 2
 * @param      {element}  canvas  The canvas
 */
function printLine(point1, point2, canvas) {
  let ctx = canvas.getContext('2d');
  const RED = 'red';
  ctx.lineWidth = 3;
  ctx.strokeStyle = RED;
  ctx.beginPath();
  ctx.moveTo(point1.x, point1.y);
  ctx.lineTo(point2.x, point2.y);
  ctx.stroke();
}

/**
 * @desc Erases a line on screen by printing a white line.
 *
 * @param      {Object}  point1  The point 1
 * @param      {Object}  point2  The point 2
 * @param      {element}  canvas  The canvas
 */
function eraseLine(point1, point2, canvas) {
  let ctx = canvas.getContext('2d');
  const WHITE = 'white';
  ctx.lineWidth = 3;
  ctx.strokeStyle = WHITE;
  ctx.beginPath();
  ctx.moveTo(point1.x, point1.y);
  ctx.lineTo(point2.x, point2.y);
  ctx.stroke();
}

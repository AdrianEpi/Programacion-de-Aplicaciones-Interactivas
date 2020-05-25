/*
* @Author: Adrián Epifanio
* @File RandomWalk Class
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
* @Date:   2020-04-19 11:35:56
* @Last Modified by:   Adrián Epifanio
*/
'use strict';

/**
 * @desc This class describes a random walk.
 *
 * @class      RandomWalk (name)
 */
class RandomWalk {

  /**
   * @desc Constructs a new instance.
   *
   * @param      {element}  canvas_     The canvas
   * @param      {element}  ctx_        The context
   * @param      {string}  gridColor_  The grid color
   * @param      {string}  lineColor_  The line color
   */
  constructor(canvas_, ctx_, lineColor_, gridSize_, direction_) {
    this.canvas = canvas_;
    this.ctx = ctx_;
    this.lineColor = lineColor_;
    this.gridSize = gridSize_;
    this.positionX = 0;
    this.positionY = 0;
    this.vector = [];
    this.mainDirection = direction_;
  }

  /**
   * @desc Gets the canvas.
   *
   * @return     {element}  The canvas.
   */
  get_Canvas () {
    return this.canvas;
  }

  /**
   * @desc Gets the context.
   *
   * @return     {element}  The context.
   */
  get_Context () {
    return this.ctx;
  }

  /**
   * @desc Gets the line color.
   *
   * @return     {string}  The line color.
   */
  get_LineColor () {
    return this.lineColor;
  }

  /**
   * @desc Gets the grid size.
   *
   * @return     {number}  The grid size.
   */
  get_GridSize () {
    return this.gridSize;
  }

  /**
   * @desc Gets the position x.
   *
   * @return     {number}  The position x.
   */
  get_PositionX () {
    return this.positionX;
  }

  /**
   * @desc Gets the position y.
   *
   * @return     {number}  The position y.
   */
  get_PositionY () {
    return this.positionY;
  }

  /**
   * @desc Sets the canvas.
   *
   * @param      {element}  canvas_  The canvas
   */
  set_Canvas (canvas_) {
    this.canvas = canvas_;
  }

  /**
   * @desc Sets the context.
   *
   * @param      {element}  ctx_    The context
   */
  set_Context (ctx_) {
    this.ctx = ctx_;
  }

  /**
   * @desc Sets the line color.
   *
   * @param      {string}  lineColor_  The line color
   */
  set_LineColor (lineColor_) {
    this.lineColor = lineColor_;
  }

  /**
   * @desc Sets the grid size.
   *
   * @param      {number}  gridSize_  The grid size
   */
  set_GridSize(gridSize_) {
    this.gridSize = gridSize_;
  }

  /**
   * @desc Sets the position x.
   *
   * @param      {number}  positionX_  The position x
   */
  set_PositionX (positionX_) {
    this.positionX = positionX_;
  }

  /**
   * @desc Sets the position Y.
   *
   * @param      {number}  positionY_  The position Y
   */
  set_PositionY (positionY_) {
    this.positionY = positionY_;
  }

  /**
   * @desc Draws the next line of the random walk
   *
   * @return     {boolean}  True if it can continue drawing, false otherwise
   */
  /* istanbul ignore next */
  drawNextLine () {
    let classPoint;
    let classLine;
    if (typeof require !== 'undefined') {
      classPoint = require('./class-point.js'.Point);
      classLine = require('./class-line.js'.Line);
    }
    else {
      classPoint = Point;
      classLine = Line;
    }
    
    let pointA = new classPoint(this.positionX, this.positionY);
    pointA.erasePoint(this.ctx, this.gridSize / 4);
    let pointB = new classPoint(this.positionX, this.positionY);
    this.ctx.beginPath();
     
    while (this.isInVector(pointB) === true) {
      let direction = this.selectRandomDirection();
      if (direction === 'UP') {
        pointB = new classPoint(this.positionX, (this.positionY + this.gridSize));
      }
      else if (direction === 'DOWN') {
        pointB = new classPoint(this.positionX, (this.positionY - this.gridSize));
      }
      else if (direction === 'LEFT') {
        pointB = new classPoint((this.positionX - this.gridSize), this.positionY);
      }
      else if (direction === 'RIGHT') {
        pointB = new classPoint((this.positionX + this.gridSize), this.positionY);
      }
      else {
        alert('ERROR, wrong way');
      }
    }
    this.set_PositionX(pointB.get_CoordinateX());
    this.set_PositionY(pointB.get_CoordinateY());
    this.vector.push(pointB);
    this.ctx.strokeStyle = this.lineColor;
    let line = new classLine(pointA, pointB);
    line.drawLine(this.ctx);
    this.ctx.closePath();
    pointB.drawPoint(this.ctx, this.gridSize / 4);
    if ((this.get_PositionX() <= 0) || (this.get_PositionX() >= this.canvas.width) || (this.get_PositionY() <= 0) || (this.get_PositionY() >= this.canvas.height)) {
      return false;
    }
    else {  
      return true;
    }
  }

  /**
   * @desc Select the random direction of the next line.
   *
   * @return     {string}  The random position
   */
  selectRandomDirection () {
    const DIRECTIONS = new Array('UP', 'DOWN', 'LEFT', 'RIGHT');
    let randomPosition = this.randomNumber(0, DIRECTIONS.length);
    let direcion = DIRECTIONS[randomPosition];
    return direcion;
  }


  /**
   * @desc Selects a random number of the attributes in DIRECTIONS array
   *
   * @param      {number}  lowLimit  The low limit
   * @param      {number}  upLimit   The up limit
   * @return     {number}  The random position in the array
   */
  randomNumber (lowLimit, upLimit) {
    let totalPosibilites = upLimit - lowLimit;
    let randomNumber_ = (Math.random() * (totalPosibilites));// + 6));
    randomNumber_ = Math.floor(randomNumber_);
    randomNumber_ += parseInt(lowLimit);
    /*if (randomNumber_ > 6) {
      if (this.mainDirection === 'N') {
        randomNumber_ = 0;
      }
      else if (this.mainDirection === 'S') {
        randomNumber_ = 1;
      }
      else if (this.mainDirection === 'W') {
        randomNumber_ = 2;
      }
      else if (this.mainDirection === 'E') {
        randomNumber_ = 3;
      }
    }
    else if (randomNumber_ > 3) {
      randomNumber_ /= 2;
    }*/
    return randomNumber_;
  }

  /**
   * @desc Compares if a given point is in the vector or not
   * @param {object} point 
   */
  isInVector(point) {
    for (let counter = 0; counter < this.vector.length; counter++) {
      if ((this.vector[counter].get_CoordinateX() === point.get_CoordinateX()) && (this.vector[counter].get_CoordinateY() === point.get_CoordinateY())) {
        return true;
      }
    }
    return false;
  }

}

if (typeof require !== 'undefined') {
  module.exports = { RandomWalk: RandomWalk };
}
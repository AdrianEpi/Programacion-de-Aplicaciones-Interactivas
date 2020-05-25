/*
* @Author: Adrián Epifanio
* @File Point Class
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

/**
 * @desc Class point
 */
class Point {

  /**
   * @desc Creates a new point
   * @param {int} coordinateX_ 
   * @param {int} coordinateY_ 
   */
  constructor(coordinateX_, coordinateY_) {
    this.coordinateX = coordinateX_;
    this.coordinateY = coordinateY_;
  }

  /**
   * @desc Returns the cordinateX
   * @return The coordinateX
   */
  get_CoordinateX() {
    return this.coordinateX;
  }

  /**
   * @desc Returns the cordinateY
   * @return The coordinateY
   */
  get_CoordinateY() {
    return this.coordinateY;
  }

  /**
   * @desc Sets the coordinateX
   * @param {int} newCoord 
   */
  set_CoordinateX(newCoord) {
    this.coordinateX = newCoord;
  }

  /**
   * @desc Sets the coordinateY
   * @param {int} newCoord 
   */
  set_CoordinateY(newCoord) {
    this.coordinateY = newCoord;
  }

  /**
   * @desc Draws a blue circle on canvas
   * @param {element} ctx 
   */
  /* istanbul ignore next */
  drawPoint(ctx, size,) {
    const RADIUS = size;
    ctx.beginPath();
    ctx.strokeStyle = 'BLUE';
    ctx.fillStyle = 'BLUE';
    ctx.arc(this.coordinateX, this.coordinateY, RADIUS, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }

  /**
   * @desc Paints a white point to erase the old point of the canvas
   * @param {element} ctx 
   */
  /* istanbul ignore next */
  erasePoint(ctx, size) {
    const RADIUS = size;
    ctx.beginPath();
    ctx.strokeStyle = 'WHITE';
    ctx.fillStyle = 'WHITE';
    ctx.arc(this.coordinateX, this.coordinateY, RADIUS, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }
}

if (typeof require !== 'undefined') {
  module.exports = { Point: Point };
}
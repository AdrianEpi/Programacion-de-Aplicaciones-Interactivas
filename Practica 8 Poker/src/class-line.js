/*
* @Author: Adrián Epifanio
* @File Line Class
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
* @Date:   2020-04-15 12:35:56
* @Last Modified by:   Adrián Epifanio
*/
'use strict';

/**
 * @desc Class Line
 */
class Line {

  /**
   * @desc Creates a new Line
   * @param {int} pointA_ 
   * @param {int} pointB_ 
   */
  constructor(pointA_, pointB_) {
    this.pointA = pointA_;
    this.pointB = pointB_;
  }

  /**
   * @desc Returns the cordinateX
   * @return The pointA
   */
  get_pointA() {
    return this.pointA;
  }

  /**
   * @desc Returns the cordinateY
   * @return The pointB
   */
  get_pointB() {
    return this.pointB;
  }

  /**
   * @desc Sets the pointA
   * @param {object} newCoord 
   */
  set_PointA(newPoint) {
    this.pointA = newPoint;
  }

  /**
   * @desc Sets the pointB
   * @param {object} newPoint 
   */
  set_PointB(newPoint) {
    this.pointB = newPoint;
  }

  /**
   * @desc Draws a line on canvas
   * @param {element} ctx 
   */
  drawLine(ctx) {
    ctx.moveTo(this.pointA.get_CoordinateX(), this.pointA.get_CoordinateY());
    ctx.lineTo(this.pointB.get_CoordinateX(), this.pointB.get_CoordinateY());
    ctx.stroke();
  }
}

if (typeof require !== 'undefined') {
  module.exports = { Line: Line };
}
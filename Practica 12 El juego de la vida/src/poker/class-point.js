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
*         https://github.com/fsande/PAI-P08-Poker/blob/master/2019-2020_p08_Poker.md
*         Repositorio git con este (y otros) códigos:
*         https://github.com/ULL-ESIT-INF-PAI-2019-2020/practica-8-poker-AdrianEpi
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

}

if (typeof require !== 'undefined') {
  module.exports = { Point: Point };
}
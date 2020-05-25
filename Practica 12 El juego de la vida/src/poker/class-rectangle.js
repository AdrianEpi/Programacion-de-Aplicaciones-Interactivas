/*
* @Author: Adrián Epifanio
* @File Rectangle Class
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
 * @desc Class Rectangle
 */
class Rectangle {

  /**
   * @desc Creates a new Rectangle
   * @param {point} startPoint_ 
   * @param {int} width_ 
   */
  constructor(startPoint_, width_, height_) {
    this.startPoint = startPoint_;
    this.width = width_;
    this.height = height_;
  }

  /**
   * @desc Returns the start point
   * @return The startPoint
   */
  get_startPoint() {
    return this.startPoint;
  }

  /**
   * @desc Returns the width
   * @return The width
   */
  get_Width() {
    return this.width;
  }

  /**
   * @desc Returns the height
   * @return The height
   */
  get_Height() {
    return this.height;
  }

  /**
   * @desc Sets the startPoint
   * @param {int} newPoint 
   */
  set_Point(newPoint) {
    this.startPoint = newPoint;
  }

  /**
   * @desc Sets the width
   * @param {int} width 
   */
  set_Width(width_) {
    this.width = width_;
  }

  /**
   * @desc Sets the height
   * @param {int} height 
   */
  set_Height(height_) {
    this.height = height_;
  }

  /**
   * @desc Draws a rectangle on canvas
   * @param {element} ctx 
   */
  drawRectangle(ctx) {    
    ctx.rect(this.startPoint.get_CoordinateX(), this.startPoint.get_CoordinateY(), this.width, this.height);
    ctx.stroke();
  }
}

if (typeof require !== 'undefined') {
  module.exports = { Rectangle: Rectangle };
}
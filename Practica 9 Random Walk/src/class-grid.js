/*
* @Author: Adrián Epifanio
* @File Grid Class
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
 * @desc Class Grid
 */
class Grid {

  /**
   * @desc Constructs a new instance.
   *
   * @param      {int}  size_   The size
   * @param      {element}  canvas  The canvas
   * @param      {element}  ctx     The context
   * @param      {string}  color   The color
   */
  constructor(size_, canvas_, ctx_, color_) {
    this.size = size_;
    this.canvas = canvas_;
    this.ctx = ctx_;
    this.color = color_;
  }

  /**
   * @desc Gets the size.
   *
   * @return     {int}  The size.
   */
  get_Size () {
    return this.size;
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
   * @desc Gets the color.
   *
   * @return     {string}  The color.
   */
  get_Color () {
    return this.color;
  }

  /**
   * @desc Sets the size.
   *
   * @param      {int}  size_   The size
   */
  set_Size (size_) {
    this.size = size_;
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
   * @desc Sets the color.
   *
   * @param      {string}  color_  The color
   */
  set_Color (color_) {
    this.color = color_;
  }

  /**
   * @desc Draws the grid on the canvas.
   */
  /* istanbul ignore next */
  drawGrid() {
    this.ctx.strokeStyle = this.color;
    for (let width = 0; width < this.canvas.width; width = width + this.size) {
      let startPoint = new Point(width, 0);
      let endPoint = new Point(width, this.canvas.width);
      let line = new Line(startPoint, endPoint);
      line.drawLine(this.ctx);
    }
    for (let height = 0; height < this.canvas.height; height = height + this.size) {
      let startPoint = new Point(0, height);
      let endPoint = new Point(this.canvas.width, height);
      let line = new Line(startPoint, endPoint);
      line.drawLine(this.ctx);
    }
  }

}

if (typeof require !== 'undefined') {
  module.exports = { Grid: Grid };
}
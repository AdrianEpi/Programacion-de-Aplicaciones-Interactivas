/*
* @Author: Adrián Epifanio
* @File BackGround Class
* @summary Universidad de La Laguna
*          Escuela Superior de Ingeniería y Tecnología
*          Grado en Ingeniería Informática
*          Asignatura: Programación de Aplicaciones Interactivas
*          Curso: 3º
*          Práctica 9 PAI - Projectile
* @link  Enunciado de la práctica:
*         https://github.com/fsande/PAI-P10-Projectile/blob/master/2019-2020_p10_Projectile.md
*         Repositorio git con este (y otros) códigos:
*         https://github.com/ULL-ESIT-INF-PAI-2019-2020/pai-p10-projectile-AdrianEpi
* @Date:   2020-04-24 11:35:56
* @Last Modified by:   Adrián Epifanio
*/
'use strict';

/**
 * @desc        This class describes a back ground.
 *
 * @class      BackGround (name)
 */
class BackGround {

  /**
   * @desc        Creates a BackGround object
   *
   * @param      {string}   color_   The color
   * @param      {element}  canvas_  The canvas
   * @param      {element}  ctx_     The context
   */
  constructor(color_, canvas_, ctx_) {
    this.color = color_;
    this.canvas = canvas_;
    this.ctx = ctx_;
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
   * @desc Generates the background pinting the axis and paint the canvas with the backgorund color adapting it to the canvas size.
   */
  /* istanbul ignore next */
  generateBackGround() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.stroke();
    this.ctx.closePath();
    let startPointVertical = new Point(50, 0);
    let endPointVertical = new Point(50, this.canvas.height - 50);
    let endPointHorizontal = new Point(this.canvas.width, this.canvas.height - 50)
    let axisY = new Line(startPointVertical, endPointVertical);
    let axisX = new Line(endPointVertical, endPointHorizontal);
    this.ctx.fillStyle = 'BLACK';
    this.ctx.lineWidth = 2;
    this.printAxisX();
    this.printAxisY();
  }

  /**
   * @desc        Prints the axis X with its own numeration adapting it to the canvas size.
   */
  /* istanbul ignore next */
  printAxisX() {
    this.ctx.fillStyle = 'BLACK';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    for (let height = this.canvas.height - 50; height > 0; height = height - 20) {
      let size = 10;
      if (((height - 50) % 100) === 0) {
        size = 20;
      }
      let startPoint = new Point(50, height);
      let leftPoint = new Point(50 - size, height);
      let upperPoint = new Point(50, height + 20);
      let horizontalLine = new Line(startPoint, leftPoint);
      let verticalLine = new Line(startPoint, upperPoint);
      horizontalLine.drawLine(this.ctx);
      verticalLine.drawLine(this.ctx);
    }
    this.ctx.font = 'bold 16px sans-serif';
    let counter = 0;
    for (let height = this.canvas.height - 50; height > 0; height = height - 100) {
      this.ctx.fillText((counter), 5, height);
      counter += 100;
    }
    this.ctx.stroke();
    this.ctx.closePath();
  }

  /**
   * @desc        Prints the axis Y with its own numeration adapting it to the canvas size.
   */
  /* istanbul ignore next */
  printAxisY() {
    this.ctx.fillStyle = 'BLACK';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    for (let width = 50; width < this.canvas.width; width = width + 20) {
      let size = 40;
      if (((width - 50) % 100) === 0) {
        size = 30;
      }
      let startPoint = new Point(width, this.canvas.height - 50);
      let leftPoint = new Point(width + 50, this.canvas.height - 50);
      let upperPoint = new Point(width, this.canvas.height - size);
      let horizontalLine = new Line(startPoint, leftPoint);
      let verticalLine = new Line(startPoint, upperPoint);
      horizontalLine.drawLine(this.ctx);
      verticalLine.drawLine(this.ctx);
    }
    this.ctx.font = 'bold 16px sans-serif';
    for (let width = 50; width < this.canvas.width; width = width + 100) {
      this.ctx.fillText((width - 50), width - 10, this.canvas.height - 15);
    }
    this.ctx.stroke();
    this.ctx.closePath();
  }

}

if (typeof require !== 'undefined') {
  module.exports = { BackGround: BackGround };
}
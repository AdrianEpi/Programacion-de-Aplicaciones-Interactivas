/*
* @Author: Adrián Epifanio
* @File Arrow Class
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
* @Date:   2020-04-24
* @Last Modified by:   Adrián Epifanio
*/
'use strict';

/**
 * @desc  This class describes an arrow.
 *
 * @class      Arrow (name)
 */
class Arrow {

  /**
   * @desc  Constructs a new instance.
   *
   * @param      {element}  ctx_     The context
   * @param      {number}  startX_  The start x
   * @param      {number}  startY_  The start y
   * @param      {number}  finalX_  The final x
   * @param      {number}  finalY_  The final y
   */
  constructor(ctx_, startX_, startY_, finalX_, finalY_) {
    this.ctx = ctx_;
    this.startX = startX_;
    this.startY = startY_;
    this.finalX = finalX_;
    this.finalY = finalY_;
  }

  /**
   * @desc  Gets the context.
   *
   * @return     {element}  The context.
   */
  get_Ctx() {
    return this.ctx;
  }

  /**
   * @desc  Gets the start x.
   *
   * @return     {number}  The start x.
   */
  get_StartX() {
    return this.startX;
  }

  /**
   * @desc  Gets the start y.
   *
   * @return     {number}  The start y.
   */
  get_StartY() {
    return this.startY;
  }

  /**
   * @desc  Gets the final x.
   *
   * @return     {number}  The final x.
   */
  get_FinalX() {
    return this.finalX;
  }

  /**
   * @desc  Gets the final y.
   *
   * @return     {number}  The final y.
   */
  get_FinalY() {
    return this.finalY;
  }

  /**
   * @desc  Sets the context.
   *
   * @param      {element}  ctx_    The context
   */
  set_Ctx(ctx_) {
    this.ctx = ctx_;
  }

  /**
   * @desc  Sets the start x.
   *
   * @param      {number}  startX_  The start x
   */
  set_StartX(startX_) {
    this.startX = startX_;
  }

  /**
   * @desc  Sets the start y.
   *
   * @param      {number}  startY_  The start y
   */
  set_StartY(startY_) {
    this.startY = startY_;
  }

  /**
   * @desc  Sets the final x.
   *
   * @param      {number}  finalX_  The final x
   */
  set_FinalX(finalX_) {
    this.finalX = finalX_;
  }

  /**
   * @desc  Sets the final y.
   *
   * @param      {number}  finalY_  The final y
   */
  set_FinalY(finalY_) {
    this.finalY = finalY_;
  }

  /**
   * @desc  Draws an arrow con the ctx that was sent to costructor.
   */
  /* istanbul ignore next */
  drawArrow() {
    let headlen = 10;
    let distanceX = this.finalX - this.startX;
    let distanceY = this.finalY - this.startY;
    let angle = Math.atan2(distanceY, distanceX);
    this.ctx.beginPath();
    this.ctx.moveTo(this.startX, this.startY);
    this.ctx.lineTo(this.finalX, this.finalY);
    this.ctx.lineTo(this.finalX - headlen * Math.cos(angle - Math.PI / 6), this.finalY - headlen * Math.sin(angle - Math.PI / 6));
    this.ctx.moveTo(this.finalX, this.finalY);
    this.ctx.lineTo(this.finalX - headlen * Math.cos(angle + Math.PI / 6), this.finalY - headlen * Math.sin(angle + Math.PI / 6));
    this.ctx.stroke();
    this.ctx.closePath();
  }
}

if (typeof require !== 'undefined') {
  module.exports = { Arrow: Arrow };
}
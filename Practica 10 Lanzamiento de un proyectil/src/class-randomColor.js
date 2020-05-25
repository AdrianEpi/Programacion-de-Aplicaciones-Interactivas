/*
* @Author: Adrián Epifanio
* @File RandomColor Class
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
 * @desc This class describes and generates random colors.
 *
 * @class      RandomColor (name)
 */
class RandomColor {

  /**
   * @desc Constructs a new instance.
   */
  constructor () {
    this.randomColor = this.selectRandomColor();
  }

  /**
   * @desc Gets a new random color each time it is called.
   *
   * @return     {string}  The random color.
   */
  get_RandomColor () {
    this.randomColor = this.selectRandomColor();
    return this.randomColor;
  }

  /**
   * @desc Sets the random color.
   *
   * @param      {string}  color   The color
   */
  set_RandomColor (color) {
    this.randomColor = color;
  }

  /**
   * @desc Selects a random color between the 10 available colors in the array.
   *
   * @return     {string}  The color name.
   */
  selectRandomColor () {
    const COLORS = new Array('SALMON', 'LIME', 'PINK', 'BLUE', 'FUCHSIA', 'DARKORANGE', 'FLORALWHITE', 'GREEN', 'RED', 'BROWN');
    let randomPosition = this.randomNumber(0, COLORS.length);
    let color = COLORS[randomPosition];
    return color;
  }

  /**
   * @desc Generates a random number between two given numbers.
   *
   * @param      {number}  lowLimit  The low limit
   * @param      {number}  upLimit   The up limit
   * @return     {number}  Random position in the colors array
   */
  randomNumber (lowLimit, upLimit) {
    let totalPosibilites = upLimit - lowLimit;
    let randomNumber_ = (Math.random() * (totalPosibilites));
    randomNumber_ = Math.floor(randomNumber_);
    randomNumber_ += parseInt(lowLimit);
    return randomNumber_;
  }
}

if (typeof require !== 'undefined') {
  module.exports = { RandomColor: RandomColor };
}
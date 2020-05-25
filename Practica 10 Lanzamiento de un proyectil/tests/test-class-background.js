/*
* @Author: Adrián Epifanio
* @File Test class BackGround
* @summary Universidad de La Laguna
*          Escuela Superior de Ingeniería y Tecnología 
*          Grado en Ingeniería Informática
*          Asignatura: Programación de Aplicaciones Interactivas
*          Curso: 3º
*          Práctica 10 PAI - Projectile
 @link  Enunciado de la práctica:
*         https://github.com/fsande/PAI-P10-Projectile/blob/master/2019-2020_p10_Projectile.md
*         Repositorio git con este (y otros) códigos:
*         https://github.com/ULL-ESIT-INF-PAI-2019-2020/pai-p10-projectile-AdrianEpi
* @Date:   2020-04-24
* @Last Modified by:   Adrián Epifanio
*/
let assert;

let classBackGround;
if (typeof require !== 'undefined') {
  assert = require('chai').assert;
  classBackGround = require('../src/class-backGround.js').BackGround;
}
else {
  assert = chai.assert;
  classBackGround = Arrow;
}


describe('Tests Class BackGround', function () {
  const color = 'black';
  const ctx = 'ctx';
  const canvas = 'canvas';
  const newValue = 'X';

  describe('Getters', function () {
    it('Get color', function () {
      let background_ = new classBackGround(color, canvas, ctx);
      assert.equal(background_.get_Color(), color);
    });
    it('Get ctx', function () {
      let background_ = new classBackGround(color, canvas, ctx);
      assert.equal(background_.get_Context(), ctx);
    });
    it('Get canvas', function () {
      let background_ = new classBackGround(color, canvas, ctx);
      assert.equal(background_.get_Canvas(), canvas);
    });
  });
  describe('Setters', function () {
    it('Set color', function () {
      let background_ = new classBackGround(color, canvas, ctx);
      background_.set_Color(newValue);
      assert.equal(background_.get_Color(), newValue);
    });
    it('Set ctx', function () {
      let background_ = new classBackGround(color, canvas, ctx);
      background_.set_Context(newValue);
      assert.equal(background_.get_Context(), newValue);
    });
    it('Set canvas', function () {
      let background_ = new classBackGround(color, canvas, ctx);
      background_.set_Canvas(newValue);
      assert.equal(background_.get_Canvas(), newValue);
    });
  });


});

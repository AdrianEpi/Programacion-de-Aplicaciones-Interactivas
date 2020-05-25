/*
* @Author: Adrián Epifanio
* @File Test class arrow
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

let classArrow;
if (typeof require !== 'undefined') {
  assert = require('chai').assert;
  classArrow = require('../src/class-arrow.js').Arrow;
}
else {
  assert = chai.assert;
  classArrow = Arrow;
}


describe('Tests Class Arrow', function () {
  const ctx = 'ctx';
  const startX = 0;
  const startY = 0;
  const finalX = 5;
  const finalY = 5;
  const newValue = 'X';
  describe('Getters', function () {
    it('Get ctx  ', function () {
      let arrow = new classArrow(ctx, startX, startY, finalX, finalY);
      assert.equal(arrow.get_Ctx(), ctx);
    });
    it('Get point startX  ', function () {
      let arrow = new classArrow(ctx, startX, startY, finalX, finalY);
      assert.equal(arrow.get_StartX(), startX);
    });
    it('Get point startY  ', function () {
      let arrow = new classArrow(ctx, startX, startY, finalX, finalY);
      assert.equal(arrow.get_StartY(), startY);
    });
    it('Get point finalX  ', function () {
      let arrow = new classArrow(ctx, startX, startY, finalX, finalY);
      assert.equal(arrow.get_FinalX(), finalX);
    });
    it('Get point finalY  ', function () {
      let arrow = new classArrow(ctx, startX, startY, finalX, finalY);
      assert.equal(arrow.get_FinalY(), finalY);
    });
    
  });
  describe('Setters', function () {
    it('Set ctx  ', function () {
      let arrow = new classArrow(ctx, startX, startY, finalX, finalY);
      arrow.set_Ctx(newValue);
      assert.equal(arrow.get_Ctx(), newValue);
    });
    it('Set point startX  ', function () {
      let arrow = new classArrow(ctx, startX, startY, finalX, finalY);
      arrow.set_StartX(newValue);
      assert.equal(arrow.get_StartX(), newValue);
    });
    it('Set point startY  ', function () {
      let arrow = new classArrow(ctx, startX, startY, finalX, finalY);
      arrow.set_StartY(newValue);
      assert.equal(arrow.get_StartY(), newValue);
    });
    it('Set point finalX  ', function () {
      let arrow = new classArrow(ctx, startX, startY, finalX, finalY);
      arrow.set_FinalX(newValue);
      assert.equal(arrow.get_FinalX(), newValue);
    });
    it('Set point finalY  ', function () {
      let arrow = new classArrow(ctx, startX, startY, finalX, finalY);
      arrow.set_FinalY(newValue);
      assert.equal(arrow.get_FinalY(), newValue);
    });
  });

});

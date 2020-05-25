/*
* @Author: Adrián Epifanio
* @File Test class point
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
* @Date:   2020-04-06 12:35:56
* @Last Modified by:   Adrián Epifanio
* @Last Modified time: 2020-04-19 12:16:15
*/
let assert;

let classPoint;
if (typeof require !== 'undefined') {
  assert = require('chai').assert;
  classPoint = require('../src/class-point.js').Point;
}
else {
  assert = chai.assert;
  classPoint = Point;
}


describe('Tests Class Point', function () {
  describe('Getters', function () {
    it('Get point coordinate X  ', function () {
      let point_ = new classPoint(50, 50);
      assert.equal(point_.get_CoordinateX(), 50);
    });
    it('Get point coordinate Y  ', function () {
      let point_ = new classPoint(50, 50);
      assert.equal(point_.get_CoordinateY(), 50);
    });
  });
  describe('Setters', function () {
    it('Set point coordinate X  ', function () {
      let point_ = new classPoint(50, 50);
      point_.set_CoordinateX(10);
      assert.equal(point_.get_CoordinateX(), 10);
    });
    it('Set point coordinate Y  ', function () {
      let point_ = new classPoint(50, 50);
      point_.set_CoordinateY(10);
      assert.equal(point_.get_CoordinateY(), 10);
    });
  });
});

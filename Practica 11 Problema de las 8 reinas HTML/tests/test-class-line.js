/*
* @Author: Adrián Epifanio
* @File Test class line
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
* @Last Modified time: 2020-04-19 12:15:59
*/
let assert;

let classLine;
let classPoint;
if (typeof require !== 'undefined') {
  assert = require('chai').assert;
  classLine = require('../src/class-line.js').Line;
  classPoint = require('../src/class-point.js').Point;
}
else {
  assert = chai.assert;
  classLine = Line;
  classPoint = Point;
}


describe('Tests Class Line', function () {
  describe('Getters', function () {
    it('Get point A  ', function () {
      let point_ = new classPoint(50, 50);
      let point_2 = new classPoint(100, 100);
      let line = new classLine(point_, point_2);
      assert.equal(line.get_pointA(), point_);
    });
    it('Get point B', function () {
      let point_ = new classPoint(50, 50);
      let point_2 = new classPoint(100, 100);
      let line = new classLine(point_, point_2);
      assert.equal(line.get_pointB(), point_2);
    });
  });
  describe('Setters', function () {
    it('Set point A  ', function () {
      let point_ = new classPoint(50, 50);
      let point_2 = new classPoint(100, 100);
      let line = new classLine(point_, point_2);
      line.set_PointA(point_2);
      assert.equal(line.get_pointA(), point_2);
    });
    it('Set point B  ', function () {
      let point_ = new classPoint(50, 50);
      let point_2 = new classPoint(100, 100);
      let line = new classLine(point_, point_2);
      line.set_PointB(point_);
      assert.equal(line.get_pointA(), point_);
    });
  });
});

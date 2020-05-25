/*
* @Author: Adrián Epifanio
* @File Test class Rectanle
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
*/
let assert;

let classPoint;
let classRectangle;
if (typeof require !== 'undefined') {
  assert = require('chai').assert;
  classPoint = require('../src/class-point.js').Point;
  classRectangle = require('../src/class-rectangle.js').Rectangle;
}
else {
  assert = chai.assert;
  classPoint = Point;
  classRectangle = Rectangle;
}

describe('TESTS CLASS RECTANGLE', function () {
  it('Get start point', function () {
    let point = new classPoint(50, 50);
    let rectangle = new classRectangle(point, 10, 10);
    assert.equal(rectangle.get_startPoint(), point);
  });
  it('Get width', function () {
    let point = new classPoint(50, 50);
    let rectangle = new classRectangle(point, 10, 10);
    assert.equal(rectangle.get_Width(), 10);
  });
  it('Get height', function () {
    let point = new classPoint(50, 50);
    let rectangle = new classRectangle(point, 10, 10);
    assert.equal(rectangle.get_Height(), 10);
  });
  it('Set start point', function () {
    let point = new classPoint(50, 50);
    let point2 = new classPoint(70, 70);
    let rectangle = new classRectangle(point, 10, 10);
    rectangle.set_Point(point2);
    assert.equal(rectangle.get_startPoint(), point2);
  });
  it('Set width', function () {
    let point = new classPoint(50, 50);
    let rectangle = new classRectangle(point, 10, 10);
    rectangle.set_Width(20);
    assert.equal(rectangle.get_Width(), 20);
  });
  it('Set height', function () {
    let point = new classPoint(50, 50);
    let rectangle = new classRectangle(point, 10, 10);
    rectangle.set_Height(20);
    assert.equal(rectangle.get_Height(), 20);
  });
  
});
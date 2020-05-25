/*
* @Author: Adrián Epifanio
* @File Test ejercicios
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
* @Date:   2020-04-06 12:35:56
* @Last Modified by:   Adrián Epifanio
* @Last Modified time: 2020-04-15 13:03:15
*/
let assert = chai.assert;

let classLine = Line;
let classPoint = Point;
let classRectangle = Rectangle;

describe('TESTS CLASS POINT', function () {
  it('Get point coordinate X  ', function () {
    let point_ = new classPoint(50, 50);
    assert.equal(point_.get_CoordinateX(), 50);
  });
  it('Get point coordinate Y  ', function () {
    let point_ = new classPoint(50, 50);
    assert.equal(point_.get_CoordinateY(), 50);
  });
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

describe('TESTS CLASS LINE', function () {
  it('Get point A  ', function () {
    let point_ = new classPoint(50, 50);
    let point_2 = new classPoint(100, 100);
    let line = new Line(point_, point_2);
    assert.equal(line.get_pointA(), point_);
  });
  it('Get point B', function () {
    let point_ = new classPoint(50, 50);
    let point_2 = new classPoint(100, 100);
    let line = new Line(point_, point_2);
    assert.equal(line.get_pointB(), point_2);
  });
  it('Set point A  ', function () {
    let point_ = new classPoint(50, 50);
    let point_2 = new classPoint(100, 100);
    let line = new Line(point_, point_2);
    line.set_PointA(point_2);
    assert.equal(line.get_pointA(), point_2);
  });
  it('Set point B  ', function () {
    let point_ = new classPoint(50, 50);
    let point_2 = new classPoint(100, 100);
    let line = new Line(point_, point_2);
    line.set_PointB(point_);
    assert.equal(line.get_pointA(), point_);
  });
});

describe('TESTS CLASS RECTANGLE', function () {
  it('Get start point', function () {
    let point = new classPoint(50, 50);
    let rectangle = new Rectangle(point, 10, 10);
    assert.equal(rectangle.get_startPoint(), point);
  });
  it('Get width', function () {
    let point = new classPoint(50, 50);
    let rectangle = new Rectangle(point, 10, 10);
    assert.equal(rectangle.get_Width(), 10);
  });
  it('Get height', function () {
    let point = new classPoint(50, 50);
    let rectangle = new Rectangle(point, 10, 10);
    assert.equal(rectangle.get_Height(), 10);
  });
  it('Set start point', function () {
    let point = new classPoint(50, 50);
    let point2 = new classPoint(70, 70);
    let rectangle = new Rectangle(point, 10, 10);
    rectangle.set_Point(point2);
    assert.equal(rectangle.get_startPoint(), point2);
  });
  it('Set width', function () {
    let point = new classPoint(50, 50);
    let rectangle = new Rectangle(point, 10, 10);
    rectangle.set_Width(20);
    assert.equal(rectangle.get_Width(), 20);
  });
  it('Set height', function () {
    let point = new classPoint(50, 50);
    let rectangle = new Rectangle(point, 10, 10);
    rectangle.set_Height(20);
    assert.equal(rectangle.get_Height(), 20);
  });
  
});
/*
* @Author: Adrián Epifanio
* @File Cell Tests
* @summary Universidad de La Laguna
*          Escuela Superior de Ingeniería y Tecnología
*          Grado en Ingeniería Informática
*          Asignatura: Programación de Aplicaciones Interactivas
*          Curso: 3º
*          Práctica 12 PAI - Life
* @link  Enunciado de la práctica:
*         https://github.com/fsande/PAI-P12-Life/blob/master/2019-2020_p12_Life.md
*         Repositorio git con este (y otros) códigos:
*         https://github.com/ULL-ESIT-INF-PAI-2019-2020/pai-p12-life-AdrianEpi
* @Date:   2020-05-08
*/
let assert;

let classCell;

if (typeof require !== 'undefined') {
  assert = require('chai').assert;
  classCell = require('../src/class-cell.js').Cell;
}
else {
  assert = chai.assert;
  classCell = Cell;
}

describe('Tests Class Cell', function () {
  const ID_ = 10;
  const coordinateX_ = 10;
  const coordinateY_ = 10;
  const posX_ = 10;
  const posY_ = 10;
  describe('Getters', function () {
    it('Get ID  ', function () {
      let cell_ = new classCell(ID_, coordinateX_, coordinateY_, posX_, posY_);
      assert.equal(cell_.get_ID(), 10);
    });
    it('Get Coordinate x', function () {
      let cell_ = new classCell(ID_, coordinateX_, coordinateY_, posX_, posY_);
      assert.equal(cell_.get_CoordinateX(), 10);
    });
    it('Get Coordinate Y', function () {
      let cell_ = new classCell(ID_, coordinateX_, coordinateY_, posX_, posY_);
      assert.equal(cell_.get_CoordinateY(), 10);
    });
    it('Get Pos x ', function () {
      let cell_ = new classCell(ID_, coordinateX_, coordinateY_, posX_, posY_);
      assert.equal(cell_.get_PosX(), 10);
    });
    it('Get Pos Y', function () {
      let cell_ = new classCell(ID_, coordinateX_, coordinateY_, posX_, posY_);
      assert.equal(cell_.get_PosY(), 10);
    });
    it('Get State', function () {
      let cell_ = new classCell(ID_, coordinateX_, coordinateY_, posX_, posY_);
      assert.equal(cell_.get_State(), false);
    });
    it('Get AliveNeighbours', function () {
      let cell_ = new classCell(ID_, coordinateX_, coordinateY_, posX_, posY_);
      assert.equal(cell_.get_AliveNeighbours(), 0);
    });
  });

  describe('Setters', function () {
    it('Set ID  ', function () {
      let cell_ = new classCell(ID_, coordinateX_, coordinateY_, posX_, posY_);
      cell_.set_ID(5);
      assert.equal(cell_.get_ID(), 5);
    });
    it('Set Coordinate x', function () {
      let cell_ = new classCell(ID_, coordinateX_, coordinateY_, posX_, posY_);
      cell_.set_CoordinateX(5);
      assert.equal(cell_.get_CoordinateX(), 5);
    });
    it('Set Coordinate Y', function () {
      let cell_ = new classCell(ID_, coordinateX_, coordinateY_, posX_, posY_);
      cell_.set_CoordinateY(5);
      assert.equal(cell_.get_CoordinateY(), 5);
    });
    it('Set Pos x ', function () {
      let cell_ = new classCell(ID_, coordinateX_, coordinateY_, posX_, posY_);
      cell_.set_PosX(5);
      assert.equal(cell_.get_PosX(), 5);
    });
    it('Set Pos Y', function () {
      let cell_ = new classCell(ID_, coordinateX_, coordinateY_, posX_, posY_);
      cell_.set_PosY(5);
      assert.equal(cell_.get_PosY(), 5);
    });
    it('Set State', function () {
      let cell_ = new classCell(ID_, coordinateX_, coordinateY_, posX_, posY_);
      cell_.set_State(true);
      assert.equal(cell_.get_State(), true);
    });
    it('Set AliveNeighbours', function () {
      let cell_ = new classCell(ID_, coordinateX_, coordinateY_, posX_, posY_);
      cell_.set_AliveNeighbours(5);
      assert.equal(cell_.get_AliveNeighbours(), 5);
    });
  });

  describe('Function', function () {
    it('Update State', function () {
      let cell_ = new classCell(ID_, coordinateX_, coordinateY_, posX_, posY_);
      cell_.updateState();
      assert.equal(cell_.get_State(), false);
    });
  });
});
/*
* @Author: Adrián Epifanio
* @File Test class grid
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

let classGrid;
if (typeof require !== 'undefined') {
  assert = require('chai').assert;
  classGrid = require('../src/class-grid.js').Grid;
}
else {
  assert = chai.assert;
  classGrid = Grid;
}


describe('Tests Class Grid', function () {
  const SIZE = 50;
  const COLOR = 'RED';
  const CANVAS = 'test-canvas-as-string';
  const CTX = 'test-ctx-as-string';
  describe('Getters', function () {
    it('Get size', function () {
      let  grid = new classGrid(SIZE, CANVAS, CTX, COLOR);
      assert.equal(grid.get_Size(), SIZE);
    });
    it('Get Canvas', function () {
      let  grid = new classGrid(SIZE, CANVAS, CTX, COLOR);
      assert.equal(grid.get_Canvas(), CANVAS);
    });
    it('Get Context', function () {
      let  grid = new classGrid(SIZE, CANVAS, CTX, COLOR);
      assert.equal(grid.get_Context(), CTX);
    });
    it('Get Color', function () {
      let  grid = new classGrid(SIZE, CANVAS, CTX, COLOR);
      assert.equal(grid.get_Color(), COLOR);
    });
  });


  describe('Setters', function () {
    it('Set size', function () {
      let  grid = new classGrid(SIZE, CANVAS, CTX, COLOR);
      grid.set_Size(21);
      assert.equal(grid.get_Size(), 21);
    });
    it('Set Canvas', function () {
      let  grid = new classGrid(SIZE, CANVAS, CTX, COLOR);
      grid.set_Canvas('newCanvas');
      assert.equal(grid.get_Canvas(), 'newCanvas');
    });
    it('Set Context', function () {
      let  grid = new classGrid(SIZE, CANVAS, CTX, COLOR);
      grid.set_Context('newContext');
      assert.equal(grid.get_Context(), 'newContext');
    });
    it('Set Color', function () {
      let  grid = new classGrid(SIZE, CANVAS, CTX, COLOR);
      grid.set_Color('Blue');
      assert.equal(grid.get_Color(), 'Blue');
    });
  });
});

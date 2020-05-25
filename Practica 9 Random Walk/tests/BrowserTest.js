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
let classGrid;
let classRandomWalk;
if (typeof require !== 'undefined') {
  assert = require('chai').assert;
  classLine = require('../src/class-line.js').Line;
  classPoint = require('../src/class-point.js').Point;
  classGrid = require('../src/class-grid.js').Grid;
  classRandomWalk = require('../src/class-random-walk.js').RandomWalk;
}
else {
  assert = chai.assert;
  classLine = Line;
  classPoint = Point;
  classGrid = Grid;
  classRandomWalk = RandomWalk;
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


describe('Tests Class Grid', function () {
  const SIZE = 50;
  const COLOR = 'RED';
  const CANVAS = 'test-canvas-as-string';
  const CTX = 'test-ctx-as-string';
  describe('Getters', function () {
    it('Get size', function () {
      let grid = new classGrid(SIZE, CANVAS, CTX, COLOR);
      assert.equal(grid.get_Size(), SIZE);
    });
    it('Get Canvas', function () {
      let grid = new classGrid(SIZE, CANVAS, CTX, COLOR);
      assert.equal(grid.get_Canvas(), CANVAS);
    });
    it('Get Context', function () {
      let grid = new classGrid(SIZE, CANVAS, CTX, COLOR);
      assert.equal(grid.get_Context(), CTX);
    });
    it('Get Color', function () {
      let grid = new classGrid(SIZE, CANVAS, CTX, COLOR);
      assert.equal(grid.get_Color(), COLOR);
    });
  });


  describe('Setters', function () {
    it('Set size', function () {
      let grid = new classGrid(SIZE, CANVAS, CTX, COLOR);
      grid.set_Size(21);
      assert.equal(grid.get_Size(), 21);
    });
    it('Set Canvas', function () {
      let grid = new classGrid(SIZE, CANVAS, CTX, COLOR);
      grid.set_Canvas('newCanvas');
      assert.equal(grid.get_Canvas(), 'newCanvas');
    });
    it('Set Context', function () {
      let grid = new classGrid(SIZE, CANVAS, CTX, COLOR);
      grid.set_Context('newContext');
      assert.equal(grid.get_Context(), 'newContext');
    });
    it('Set Color', function () {
      let grid = new classGrid(SIZE, CANVAS, CTX, COLOR);
      grid.set_Color('Blue');
      assert.equal(grid.get_Color(), 'Blue');
    });
  });
});


describe('Tests Class Random Walk', function () {
  const LINECOLOR = "RED";
  const CANVAS = 'test-canvas-as-string';
  const CTX = 'test-ctx-as-string';
  describe('Getters', function () {
    it('Get Canvas', function () {
      let randomWalk = new classRandomWalk(CANVAS, CTX, LINECOLOR);
      assert.equal(randomWalk.get_Canvas(), CANVAS);
    });
    it('Get Context', function () {
      let randomWalk = new classRandomWalk(CANVAS, CTX, LINECOLOR);
      assert.equal(randomWalk.get_Context(), CTX);
    });
    it('Get LineColor', function () {
      let randomWalk = new classRandomWalk(CANVAS, CTX, LINECOLOR);
      assert.equal(randomWalk.get_LineColor(), LINECOLOR);
    });
    it('Get PositionX', function () {
      let randomWalk = new classRandomWalk(CANVAS, CTX, LINECOLOR);
      assert.equal(randomWalk.get_PositionX(), 0);
    });
    it('Get PositionY', function () {
      let randomWalk = new classRandomWalk(CANVAS, CTX, LINECOLOR);
      assert.equal(randomWalk.get_PositionY(), 0);
    });
  });
  describe('Setters', function () {
    it('Set Canvas', function () {
      let randomWalk = new classRandomWalk(CANVAS, CTX, LINECOLOR);
      randomWalk.set_Canvas('newCanvas');
      assert.equal(randomWalk.get_Canvas(), 'newCanvas');
    });
    it('Set Context', function () {
      let randomWalk = new classRandomWalk(CANVAS, CTX, LINECOLOR);
      randomWalk.set_Context('newContext');
      assert.equal(randomWalk.get_Context(), 'newContext');
    });
    it('Set LineColor', function () {
      let randomWalk = new classRandomWalk(CANVAS, CTX, LINECOLOR);
      randomWalk.set_LineColor('BLUE');
      assert.equal(randomWalk.get_LineColor(), 'BLUE');
    });
    it('Set PositionX', function () {
      let randomWalk = new classRandomWalk(CANVAS, CTX, LINECOLOR);
      randomWalk.set_PositionX(50);
      assert.equal(randomWalk.get_PositionX(), 50);
    });
    it('Set PositionY', function () {
      let randomWalk = new classRandomWalk(CANVAS, CTX, LINECOLOR);
      randomWalk.set_PositionY(50);
      assert.equal(randomWalk.get_PositionY(), 50);
    });
  });

  describe('Functions', function () {
    it('Select random number', function () {
      let randomWalk = new classRandomWalk(CANVAS, CTX, LINECOLOR);
      let random1 = randomWalk.randomNumber(0, 50);
      let random2 = randomWalk.randomNumber(51, 100);
      if (random1 != random2) {
        assert.equal(true, true);
      }
    });
    it('Select random Direction', function () {
      let randomWalk = new classRandomWalk(CANVAS, CTX, LINECOLOR);
      let randomDirection = randomWalk.selectRandomDirection();
      if (randomDirection === 'UP') {
        assert.equal(true, true);
      }
      else if (randomDirection === 'DOWN') {
        assert.equal(true, true);
      }
      else if (randomDirection === 'LEFT') {
        assert.equal(true, true);
      }
      else if (randomDirection === 'RIGHT') {
        assert.equal(true, true);
      }
    });
  });
});
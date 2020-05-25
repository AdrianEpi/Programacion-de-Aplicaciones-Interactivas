/*
* @Author: Adrián Epifanio
* @File Browser Tests
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

let classLine;
let classPoint;
let classGrid;
let classBoard;
let classCell;

if (typeof require !== 'undefined') {
  assert = require('chai').assert;
  classLine = require('../src/class-line.js').Line;
  classPoint = require('../src/class-point.js').Point;
  classGrid = require('../src/class-grid.js').Grid;
  classBoard = require('../src/class-board.js').Board;
  classCell = require('../src/class-cell.js').Cell;

}
else {
  assert = chai.assert;
  classLine = Line;
  classPoint = Point;
  classGrid = Grid;
  classBoard = Board;
  classCell = Cell;

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



describe('Tests Class Board', function () {
  const gridSize_ = 10;
  const backGroundColor_ = 'black';
  const canvas_ = 'Canvas';
  const ctx_ = 'Ctx';
  const gridColor_ = 'white';
  describe('Getters', function () {
    it('Get canvas  ', function () {
      let board_ = new classBoard(gridSize_, backGroundColor_, canvas_, ctx_, gridColor_);
      assert.equal(board_.get_Canvas(), 'Canvas');
    });
    it('Get Ctx  ', function () {
      let board_ = new classBoard(gridSize_, backGroundColor_, canvas_, ctx_, gridColor_);
      assert.equal(board_.get_Ctx(), 'Ctx');
    });
    it('Get GridSize  ', function () {
      let board_ = new classBoard(gridSize_, backGroundColor_, canvas_, ctx_, gridColor_);
      assert.equal(board_.get_GridSize(), 10);
    });
    it('Get Background color  ', function () {
      let board_ = new classBoard(gridSize_, backGroundColor_, canvas_, ctx_, gridColor_);
      assert.equal(board_.get_BackGroundColor(), 'black');
    });
    it('Get Grid Color  ', function () {
      let board_ = new classBoard(gridSize_, backGroundColor_, canvas_, ctx_, gridColor_);
      assert.equal(board_.get_GridColor(), 'white');
    });
  });

  describe('Setters', function () {
    it('Set canvas  ', function () {
      let board_ = new classBoard(gridSize_, backGroundColor_, canvas_, ctx_, gridColor_);
      board_.set_Canvas('aa');
      assert.equal(board_.get_Canvas(), 'aa');
    });
    it('Set Ctx  ', function () {
      let board_ = new classBoard(gridSize_, backGroundColor_, canvas_, ctx_, gridColor_);
      board_.set_Ctx('aa');
      assert.equal(board_.get_Ctx(), 'aa');
    });
    it('Set GridSize  ', function () {
      let board_ = new classBoard(gridSize_, backGroundColor_, canvas_, ctx_, gridColor_);
      board_.set_GridSize('aa');
      assert.equal(board_.get_GridSize(), 'aa');
    });
    it('Set Background color  ', function () {
      let board_ = new classBoard(gridSize_, backGroundColor_, canvas_, ctx_, gridColor_);
      board_.set_BackGroundColor('aa');
      assert.equal(board_.get_BackGroundColor(), 'aa');
    });
    it('Set Grid Color  ', function () {
      let board_ = new classBoard(gridSize_, backGroundColor_, canvas_, ctx_, gridColor_);
      board_.set_GridColor('aa');
      assert.equal(board_.get_GridColor(), 'aa');
    });
  });
});



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
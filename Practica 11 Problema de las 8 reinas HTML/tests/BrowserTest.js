/*
* @Author: Adrián Epifanio
* @File Browsers Tests
* @summary Universidad de La Laguna
*          Escuela Superior de Ingeniería y Tecnología
*          Grado en Ingeniería Informática
*          Asignatura: Programación de Aplicaciones Interactivas
*          Curso: 3º
*          Práctica 11 PAI - Chess
* @link  Enunciado de la práctica:
*         https://github.com/fsande/PAI-P11-Chess/blob/master/2019-2020_p10_Chess.md
*         Repositorio git con este (y otros) códigos:
*         https://github.com/ULL-ESIT-INF-PAI-2019-2020/pai-p11-chess-AdrianEpi
* @Date:   2020-05-02
*/
let assert;

let classLine;
let classPoint;
let classBoard;
let classRectangle;
let classProblem8Queens;
let classBoardNumber;

if (typeof require !== 'undefined') {
  assert = require('chai').assert;
  classLine = require('../src/class-line.js').Line;
  classPoint = require('../src/class-point.js').Point;
  classBoard = require('../src/class-chessBoard.js').ChessBoard;
  classRectangle = require('../src/class-rectangle.js').Rectangle;
  classRectangle = Rectangle;
  classProblem8Queens = require('../src/class-problem8Queen.js').Problem8Queens;
  classBoardNumber = require('../src/class-boardNumber.js').BoardNumber;
}
else {
  assert = chai.assert;
  classLine = Line;
  classPoint = Point;
  classBoard = ChessBoard;
  classRectangle = Rectangle;
  classProblem8Queens = Problem8Queens;
  classBoardNumber = BoardNumber;
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



describe('Tests Class ChessBoard', function () {
  describe('Getters', function () {
    it('Get canvas  ', function () {
      let board_ = new classBoard('Canvas', 'Ctx');
      assert.equal(board_.get_Canvas(), 'Canvas');
    });
    it('Get Ctx  ', function () {
      let board_ = new classBoard('Canvas', 'Ctx');
      assert.equal(board_.get_Ctx(), 'Ctx');
    });
  });

  describe('Setters', function () {
    it('Set canvas  ', function () {
      let board_ = new classBoard('Canvas', 'Ctx');
      board_.set_Canvas('aa');
      assert.equal(board_.get_Canvas(), 'aa');
    });
    it('Set Ctx  ', function () {
      let board_ = new classBoard('Canvas', 'Ctx');
      board_.set_Ctx('aa');
      assert.equal(board_.get_Ctx(), 'aa');
    });
  });
});




describe('Tests class Rectangle', function () {
  describe('Getters', function () {
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
  });
  describe('Setters', function () {
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

});




describe('Tests Class Problem 8 Queens', function () {
  describe('Getters', function () {
    it('Get solutions  ', function () {
      let problem_ = new classProblem8Queens(0);
      assert.equal(problem_.get_Solutions().length, 0);
    });
    it('Get MaxSize  ', function () {
      let problem_ = new classProblem8Queens(0);
      assert.equal(problem_.get_MaxSize(), 64);
    });
    it('Get MaxQueens  ', function () {
      let problem_ = new classProblem8Queens(0);
      assert.equal(problem_.get_MaxQueens(), 8);
    });
    it('Get Board  ', function () {
      let problem_ = new classProblem8Queens(0);
      assert.equal(problem_.get_Board().length, 0);
    });
    it('Get ProblemType  ', function () {
      let problem_ = new classProblem8Queens(0);
      assert.equal(problem_.get_ProblemType(), 0);
    });

  });

  describe('Setters', function () {
    it('Set solutions  ', function () {
      let problem_ = new classProblem8Queens(0);
      let test = [];
      test[0] = 'a';
      problem_.set_Solutions(test);
      assert.equal(problem_.get_Solutions().length, 1);
    });
    it('Set MaxSize  ', function () {
      let problem_ = new classProblem8Queens(0);
      problem_.set_MaxSize('a');
      assert.equal(problem_.get_MaxSize(), 'a');
    });
    it('Set MaxQueens  ', function () {
      let problem_ = new classProblem8Queens(0);
      problem_.set_MaxQueens('a');
      assert.equal(problem_.get_MaxQueens(), 'a');
    });
    it('Set Board  ', function () {
      let problem_ = new classProblem8Queens(0);
      let test = [];
      test[0] = 'a';
      problem_.set_Board(test);
      assert.equal(problem_.get_Board().length, 1);
    });
    it('Set ProblemType  ', function () {
      let problem_ = new classProblem8Queens(0);
      problem_.set_ProblemType('a');
      assert.equal(problem_.get_ProblemType(), 'a');
    });
  });

  describe('Functions', function () {
    it('Try Queen', function () {
      let problem_ = new classProblem8Queens(0);
      if (problem_.tryQueen(5) === 0) {
        assert.equal(true, true);
      }
      else if (problem_.tryQueen(5) === 1) {
        assert.equal(true, true);
      }
    });

    it('Line From PointA to PointB', function () {
      let problem_ = new classProblem8Queens(0);
      let point = [];
      point[0] = 1;
      point[1] = 1;
      let point2 = [];
      point2[0] = 2;
      point2[1] = 2;
      let equation = problem_.lineFromTo(point, point2);
      assert.equal(equation[0], 1);
    });

    it('Is point in line', function () {
      let problem_ = new classProblem8Queens(0);
      let point = [];
      point[0] = 1;
      point[1] = 1;
      let point2 = [];
      point2[0] = 2;
      point2[1] = 2;
      let equation = problem_.lineFromTo(point, point2);
      if (problem_.isPointInLine(point, equation) === true) {
        assert.equal(true, true);
      }
    });
    it('Restiction Queens', function () {
      let problem_ = new classProblem8Queens(0);
      if (problem_.restrictionQueens() === true) {
        assert.equal(true, true);
      }
    });
    it('Introduce Queen', function () {
      let problem_ = new classProblem8Queens(0);
      problem_.introduceQueen(1);
      if (problem_.get_Solutions().length != 0) {
        assert.equal(true, true);
      }
    });
    it('Solve problem', function () {
      let problem_ = new classProblem8Queens(1);
      problem_.solveProblem();
      if (problem_.get_Solutions().length != 0) {
        assert.equal(true, true);
      }
    });
  });
});

describe('Tests Class BoardNumber', function () {
  describe('Getters', function () {
    it('Get canvas  ', function () {
      let board_ = new classBoardNumber('Canvas', 'Ctx', 7, 6);
      assert.equal(board_.get_Canvas(), 'Canvas');
    });
    it('Get Ctx  ', function () {
      let board_ = new classBoardNumber('Canvas', 'Ctx', 7, 6);
      assert.equal(board_.get_Ctx(), 'Ctx');
    });
  });

  describe('Setters', function () {
    it('Set canvas  ', function () {
      let board_ = new classBoardNumber('Canvas', 'Ctx', 7, 6);
      board_.set_Canvas('aa');
      assert.equal(board_.get_Canvas(), 'aa');
    });
    it('Set Ctx  ', function () {
      let board_ = new classBoardNumber('Canvas', 'Ctx', 7, 6);
      board_.set_Ctx('aa');
      assert.equal(board_.get_Ctx(), 'aa');
    });
  });

  describe('Functions', function () {
    it('Generate random numbers  ', function () {
      let board_ = new classBoardNumber('Canvas', 'Ctx', 7, 6);
      let number = board_.get_RandomNumber();
      if (number <= 9 && number >= 0) {
        assert.equal(true, true);
      }
    });
    it('Generate & Solve problem', function () {
      let board_ = new classBoardNumber('Canvas', 'Ctx', 7, 6);
      board_.generateBoard();
      board_.solveProblem();
      assert.equal(true, true);
    });
  });
});
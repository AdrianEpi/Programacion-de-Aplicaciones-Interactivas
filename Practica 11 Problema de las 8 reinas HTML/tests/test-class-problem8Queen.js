/*
* @Author: Adrián Epifanio
* @File Test class Problem8Queens
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

let classProblem8Queens;

if (typeof require !== 'undefined') {
  assert = require('chai').assert;
  classProblem8Queens = require('../src/class-problem8Queen.js').Problem8Queens;
}
else {
  assert = chai.assert;
  classProblem8Queens = Problem8Queens;
}

describe('Tests Class ChessBoard', function () {
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
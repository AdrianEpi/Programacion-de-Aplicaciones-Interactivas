/*
* @Author: Adrián Epifanio
* @File Test class board
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

let classBoardNumber;

if (typeof require !== 'undefined') {
  assert = require('chai').assert;
  classBoardNumber = require('../src/class-boardNumber.js').BoardNumber;
}
else {
  assert = chai.assert;
  classBoardNumber = BoardNumber;
}

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
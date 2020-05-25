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

let classBoard;

if (typeof require !== 'undefined') {
  assert = require('chai').assert;
  classBoard = require('../src/class-chessBoard.js').ChessBoard;
}
else {
  assert = chai.assert;
  classBoard = ChessBoard;
}

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
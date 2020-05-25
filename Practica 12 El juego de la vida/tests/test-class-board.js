/*
* @Author: Adrián Epifanio
* @File Board Tests
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

let classBoard;

if (typeof require !== 'undefined') {
  assert = require('chai').assert;
  classBoard = require('../src/class-board.js').Board;
}
else {
  assert = chai.assert;
  classBoard = Board;
}

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
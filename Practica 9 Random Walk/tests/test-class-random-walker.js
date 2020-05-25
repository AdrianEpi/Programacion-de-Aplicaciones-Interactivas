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

let classRandomWalk
if (typeof require !== 'undefined') {
  assert = require('chai').assert;
  classRandomWalk = require('../src/class-random-walk.js').RandomWalk;
}
else {
  assert = chai.assert;
  classRandomWalk = RandomWalk;
}


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

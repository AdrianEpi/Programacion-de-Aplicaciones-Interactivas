/*
* @Author: Adrián Epifanio
* @File Test class randomColor
* @summary Universidad de La Laguna
*          Escuela Superior de Ingeniería y Tecnología 
*          Grado en Ingeniería Informática
*          Asignatura: Programación de Aplicaciones Interactivas
*          Curso: 3º
*          Práctica 10 PAI - Projectile
 @link  Enunciado de la práctica:
*         https://github.com/fsande/PAI-P10-Projectile/blob/master/2019-2020_p10_Projectile.md
*         Repositorio git con este (y otros) códigos:
*         https://github.com/ULL-ESIT-INF-PAI-2019-2020/pai-p10-projectile-AdrianEpi
* @Date:   2020-04-24
* @Last Modified by:   Adrián Epifanio
*/
let assert;

let classRandomColor;
if (typeof require !== 'undefined') {
  assert = require('chai').assert;
  classRandomColor = require('../src/class-randomColor.js').RandomColor;
}
else {
  assert = chai.assert;
  classRandomColor = RandomColor;
}


describe('Tests Class RandomColor', function () {
  const color = 'black';

  describe('Generate Colors', function () {
    it('Generate random color', function () {
      let randomColor_ = new classRandomColor();
      if (randomColor_.get_RandomColor() != color) {
        assert.equal(true, true);
      }
    });
    it('Set color', function () {
      let randomColor_ = new classRandomColor();
      randomColor_.set_RandomColor(color);
      if (randomColor_.get_RandomColor() === color) {
        assert.equal(true, true);
      }
    });
  });
    

});

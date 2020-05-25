/*
* @Author: Adrián Epifanio
* @File Complex test
* @summary Universidad de La Laguna
*          Escuela Superior de Ingeniería y Tecnología
*          Grado en Ingeniería Informática
*          Asignatura: Programación de Aplicaciones Interactivas
*          Curso: 3º
*          Práctica 7 PAI - Mandelbrot
* @link  Enunciado de la práctica:
*         https://github.com/fsande/PAI-P07-Mandelbrot/blob/master/2019-2020_p07_Mandelbrot.md
*         Repositorio git con este (y otros) códigos:
*         https://github.com/ULL-ESIT-INF-PAI-2019-2020/practica-07-mandelbrot-AdrianEpi
* @Date:   2020-03-28 12:35:56
* @Last Modified by:   Adrián Epifanio
* @Last Modified time: 2020-04-01 10:18:48
*/

const expect = require('chai').expect;
let complexNumber = require("../src/js/complexNumber");

let complexNumber_ = new complexNumber(0, 0);

describe("Test for complex numbers:",
function() {
  describe("Trying getters", function() {
  
    /**
    * @desc Expect to receive the real part
    * @returns If it's correct or not
    */
    it ("get_RealPart() ", function() {
      let realPart = complexNumber_.get_RealPart();
      expect(realPart).to.equal(0);
    });

    /**
    * @desc Expect to receive the imaginary part
    * @returns If it's correct or not
    */
    it ("get_ImaginaryPart() ", function() {
      let imaginaryPart = complex_number.get_ImaginaryPart();
      expect(imaginaryPart).to.equal(0);
    });
  });

  describe("\nTry setters", function(){

    /**
    * @desc Expect to set a the real part
    * @returns If it's correct or not
    */
    it ("set_RealPart() ", function() {
      complexNumber_.set_RealPart(10);
      expect(complexNumber_.get_RealPart()).to.equal(10);
    });

    /**
    * @desc Expect to set the imaginary part
    * @returns If it's correct or not
    */
    it ("set_ImaginaryPart() ", function() {
      complexNumber_.set_ImaginaryPart(10);
      expect(complexNumber_.get_ImaginaryPart()).to.equal(10);
    });
  });

});

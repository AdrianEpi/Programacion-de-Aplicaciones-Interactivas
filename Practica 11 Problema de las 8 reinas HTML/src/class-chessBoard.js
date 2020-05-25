/*
* @Author: Adrián Epifanio
* @File ChessBoard Class
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
* @Date:   2020-05-01
*/
'use strict';

/**
 * @desc      This class describes a ChessBoard. This class adapt the size of the chess board to the canvas size and paints it on screen.
 *
 * @class      ChessBoard (name)
 */
class ChessBoard {

  /**
   * @desc Constructs a new instance of a ChessBoard class
   *
   * @param      {element}  canvas_  The canvas
   * @param      {element}  ctx_     The context
   */
  constructor(canvas_, ctx_) {
    this.canvas = canvas_;
    this.ctx = ctx_;
    this.color1 = 'PAPAYAWHIP';
    this.color2 = 'TAN';
  }

  /**
   * @desc       Gets the canvas.
   *
   * @return     {element}  The canvas.
   */
  get_Canvas() {
    return this.canvas;
  }

  /**
   * @desc       Gets the context.
   *
   * @return     {element}  The context.
   */
  get_Ctx() {
    return this.ctx;
  }

  /**
   * @desc       Sets the canvas.
   *
   * @param      {element}  canvas_  The canvas
   */
  set_Canvas(canvas_) {
    this.canvas = canvas_;
  }

  /**
   * @desc       Sets the context.
   *
   * @param      {element}  ctx_    The context
   */
  set_Ctx(ctx_) {
    this.ctx = ctx_;
  }

  /**
   * @desc    Print the chess board on the canvas adapting it to the canvas size, the canvas must be divisible per 8 for a correct visualization.
   */
  /* istanbul ignore next */
  printChessBoard() {
    const SIZE = this.canvas.width / 8;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let height = 0; height < 8; height++) {
      for (let width = 0; width < 8; width++) {
        let startPoint = new Point(width * SIZE, height * SIZE);
        let rect = new Rectangle(startPoint, SIZE, SIZE);
        if (height % 2 === 0) {
          if (width % 2 === 0) {
            rect.drawRectangle(this.ctx, this.color1);
          }
          else {
            rect.drawRectangle(this.ctx, this.color2);
          }
        }
        else {
          if (width % 2 === 0) {
            rect.drawRectangle(this.ctx, this.color2);
          }
          else {
            rect.drawRectangle(this.ctx, this.color1);
          }
        }
      }
    }
    this.printLetters();
    this.printNumbers();
  }

  /**
   * @desc       Prints the letters at the bottom side of the chess board.
   */
  /* istanbul ignore next */
  printLetters() {
    const LETTERS = new Array('h', 'g', 'f', 'e', 'd', 'c', 'b', 'a');
    const height = this.canvas.height - 5;
    this.ctx.beginPath();
    this.ctx.font = 'bold 16px sans-serif';
    for (let counter = 0; counter < 8; counter++) {
      if (counter % 2 === 0) {
        this.ctx.fillStyle = this.color1;
      }
      else {
        this.ctx.fillStyle = this.color2;
      } 
      this.ctx.fillText(LETTERS[counter], (counter * this.canvas.width / 8) + 5, height)   
      this.ctx.stroke();
    }
    this.ctx.closePath();
  }

  /**
   * @desc       Prints the numbers at the right side of the chess board.
   */
  /* istanbul ignore next */
  printNumbers() {
    const LETTERS = new Array('h', 'g', 'f', 'e', 'd', 'c', 'b', 'a');
    const width = this.canvas.width - 10;
    this.ctx.beginPath();
    this.ctx.font = 'bold 16px sans-serif';
    for (let counter = 0; counter < 8; counter++) {
      if (counter % 2 === 0) {
        this.ctx.fillStyle = this.color1;
      }
      else {
        this.ctx.fillStyle = this.color2;
      } 
      this.ctx.fillText(counter + 1, width - 10, (counter * this.canvas.width / 8) + 20)   
      this.ctx.stroke();
    }
    this.ctx.closePath();
  }

}

if (typeof require !== 'undefined') {
  module.exports = { ChessBoard: ChessBoard };
}
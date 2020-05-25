/*
* @Author: Adrián Epifanio
* @File ChessPieces Class
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
 * @desc      This class describes the ChessPieces. It is used to store all images of the pieces used during the chess game.
 *
 * @class      ChessPieces (name)
 */
class ChessPieces {
  /**
   * @desc   Constructs a new instance of the object.
   */
  constructor() {
    this.whitePawn = new Image();
    this.whiteBishop = new Image();
    this.whiteKnight = new Image();
    this.whiteRook = new Image();
    this.whiteQueen = new Image();
    this.whiteKing = new Image();
    this.blackPawn = new Image();
    this.blackBishop = new Image();
    this.blackKnight = new Image();
    this.blackRook = new Image();
    this.blackQueen = new Image();
    this.blackKing = new Image();
  }

  /**
   * @desc    Sets the images assigning them the images path.
   */
  set_Images() {
    this.whitePawn.src = '../img/whitePawn.svg';
    this.whiteBishop.src = '../img/whiteBishop.svg';
    this.whiteKnight.src = '../img/whiteKnight.svg';
    this.whiteRook.src = '../img/whiteRook.svg';
    this.whiteQueen.src = '../img/whiteQueen.svg';
    this.whiteKing.src = '../img/whiteKing.svg';
    this.blackPawn.src = '../img/blackPawn.svg';
    this.blackBishop.src = '../img/blackBishop.svg';
    this.blackKnight.src = '../img/blackKnight.svg';
    this.blackRook.src = '../img/blackRook.svg';
    this.blackQueen.src = '../img/blackQueen.svg';
    this.blackKing.src = '../img/blackKing.svg';
  }

  /**
   * Gets the white pawn image.
   *
   * @return     {image}  The white pawn.
   */
  get_WhitePawn() {
    return this.whitePawn.src;
  }

  /**
   * Gets the white bishop image.
   *
   * @return     {image}  The white bishop.
   */
  get_WhiteBishop() {
    return this.whiteBishop.src;
  }

  /**
   * Gets the white knight image.
   *
   * @return     {image}  The white knight.
   */
  get_WhiteKnight() {
    return this.whiteKnight.src;
  }

  /**
   * Gets the white rook image.
   *
   * @return     {image}  The white rook.
   */
  get_WhiteRook() {
    return this.whiteRook.src;
  }

  /**
   * Gets the white queen image.
   *
   * @return     {image}  The white queen.
   */
  get_WhiteQueen() {
    return this.whiteQueen.src;
  }

  /**
   * Gets the white king image.
   *
   * @return     {image}  The white king.
   */
  get_WhiteKing() {
    return this.whiteKing.src;
  }

  /**
   * Gets the black pawn image.
   *
   * @return     {image}  The black pawn.
   */
  get_BlackPawn() {
    return this.blackPawn.src;
  }

  /**
   * Gets the black bishop image.
   *
   * @return     {image}  The black bishop.
   */
  get_BlackBishop() {
    return this.blackBishop.src;
  }

  /**
   * Gets the black knight image.
   *
   * @return     {image}  The black knight.
   */
  get_BlackKnight() {
    return this.blackKnight.src;
  }

  /**
   * Gets the black rook image.
   *
   * @return     {image}  The black rook.
   */
  get_BlackRook() {
    return this.blackRook.src;
  }

  /**
   * Gets the black queen image.
   *
   * @return     {image}  The black queen.
   */
  get_BlackQueen() {
    return this.blackQueen.src;
  }

  /**
   * Gets the black king image.
   *
   * @return     {image}  The black king.
   */
  get_BlackKing() {
    return this.blackKing.src;
  }

}

if (typeof require !== 'undefined') {
  module.exports = { ChessPieces: ChessPieces };
}
/*
* @Author: Adrián Epifanio
* @File Class BoardNumber
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
* @Date:   2020-05-06
*/

/**
 * @desc This class is going to generate random numbers 0-9 and print them on the canvas.
 */
class BoardNumber {

  /**
   * @desc Builds a new object of class BoardNumber
   * 
   * @param {element} canvas_ 
   * @param {element} ctx_ 
   * @param {number} widthCells_ 
   * @param {number} heightCells_ 
   */
  constructor(canvas_, ctx_, widthCells_, heightCells_) {
    this.canvas = canvas_;
    this.ctx = ctx_;
    this.numbersAmmount = widthCells_ * heightCells_;
    this.board = [];
    this.widthCells = widthCells_;
    this.heightCells = heightCells_;
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
   * @desc       Gets the numbers ammount.
   *
   * @return     {number}  The numbers ammount.
   */
  get_NumbersAmmount() {
    return this.numbersAmmount;
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
   * @desc       Sets the numbers ammount.
   *
   * @param      {number}  numbersAmmount_    The numbers ammount
   */
  set_NumbersAmmount(numbersAmmount_) {
    this.numbersAmmount = numbersAmmount_;
  }

  /**
   * @desc       Generates a random number from 0 to 9.
   * 
   * @return     {number}  The random number.
   */
  get_RandomNumber() {
    const NUMBERS = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
    let totalPosibilites = NUMBERS.length;
    let randomNumber_ = (Math.random() * (totalPosibilites));
    randomNumber_ = Math.floor(randomNumber_)
    return randomNumber_;
  }

  /**
   * @desc Generates and initializes de board assigning random numbers to each position.
   */
  generateBoard() {
    for (let counter = 0; counter < this.numbersAmmount; counter++) {
      let tmpNumber = {
        color: 'red',
        number: this.get_RandomNumber(),
      }
      this.board[counter] = tmpNumber;
    }
  }

  /**
   * @desc Prints the board with their respective numbers on canvas.
   * 
   * @param {elemet} ctx The context
   */
  /* istanbul ignore next */
  printBoard(ctx) {
    ctx.font = 'bold 90px sans-serif';
    let counter = 0;
    for (let height = 90; height < this.canvas.height + 100; height = height + 100) {
      for (let width = 20; width < this.canvas.width; width = width + 100) {
        if (counter >= (this.widthCells * this.heightCells)) {
          break;
        }
        ctx.beginPath();
        ctx.fillStyle = this.board[counter].color;
        ctx.fillText(this.board[counter].number, width, height);
        ctx.stroke();
        ctx.closePath();
        counter++;
      }
    }
  }

  /**
   * @desc Solves the problem of finding 4 consecutive numbers in row, column or diagonal
   */
  solveProblem() {
    // Solve Rows
    for (let height = 0; height < this.heightCells; height++) {
      let counter = 0;
      let number = this.board[height * this.widthCells].number;
      let positions = [];
      positions[0] = height * this.widthCells;
      for (let width = 1; width < this.widthCells; width++) {
        if (this.board[(height * this.widthCells) + width].number === number) {
          positions[positions.length] = (height * this.widthCells) + width;
          counter++;
        }
        else if (counter < 3) {
          counter = 0;
          positions = [];
          positions[0] = (height * this.widthCells) + width;
          number = this.board[(height * this.widthCells) + width].number;
        }
        else {
          break;
        }
      }
      if (counter === 3) {
        for (let pos = 0; pos < positions.length; pos++) {
          this.board[positions[pos]].color = 'yellow'
        }
      }
    }

    // Solve Columns
    for (let height = 0; height < this.heightCells; height++) {
      let counter = 0;
      let number = this.board[height * this.widthCells].number;
      let positions = [];
      positions[0] = height * this.widthCells;
      for (let width = 0; width < (this.widthCells * this.heightCells) - height; width = width + 7) {
        if (this.board[width].number === number) {
          positions[positions.length] = width;
          counter++;
        }
        else if (counter < 3) {
          counter = 0;
          positions = [];
          positions[0] = width;
          number = this.board[width].number;
        }
        else {
          break;
        }
      }
      if (counter === 3) {
        for (let pos = 0; pos < positions.length; pos++) {
          this.board[positions[pos]].color = 'yellow'
        }
      }
    }
  }
}

if (typeof require !== 'undefined') {
  module.exports = { BoardNumber: BoardNumber };
}
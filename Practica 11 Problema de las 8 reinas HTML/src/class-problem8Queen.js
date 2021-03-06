/*
* @Author: Adrián Epifanio
* @File Problem8Queen Class
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

/**
 * @desc       This class describes problem 8 queens. This class finds all the possible solutions to the problem received by parameter on the constructor. If it receive a 0 it will find all the solutions to the normal 8 queens problem, if it receives 1 it will find the solutions to the problem with the aditional restriction of "there can't be more than 2 queens on the same diagonal".
 *
 * @class      Problem8Queens (name)
 */
class Problem8Queens {

  /**
   * @desc       Constructs a new instance.
   *
   * @param      {number}  problemType_  The problem type
   */
  constructor(problemType_) {
    this.solutions = [];
    this.MAXSIZE = 64; // 8 rows * 8 columns
    this.MAXQUEENS = 8;
    this.board = [];
    this.problemType = problemType_; // 0 if its the normal problem and 1 if it's the generalized
  }

  /**
   * @desc       Gets the solutions.
   *
   * @return     {Array}  The solutions.
   */
  get_Solutions() {
    return this.solutions;
  }

  /**
   * @desc       Gets the maximum size.
   *
   * @return     {number}  The maximum size.
   */
  get_MaxSize() {
    return this.MAXSIZE;
  }

  /**
   * @desc       Gets the maximum queens.
   *
   * @return     {number}  The maximum queens.
   */
  get_MaxQueens() {
    return this.MAXQUEENS;
  }

  /**
   * @desc       Gets the board.
   *
   * @return     {Array}  The board.
   */
  get_Board() {
    return this.board;
  }

  /**
   * @desc       Gets the problem type.
   *
   * @return     {number}  The problem type.
   */
  get_ProblemType() {
    return this.problemType;
  }

  /**
   * @desc       Sets the solutions.
   *
   * @param      {Array}  solutions_  The solutions
   */
  set_Solutions(solutions_) {
    this.solutions = solutions_;
  }

  /**
   * @desc       Sets the maximum size.
   *
   * @param      {number}  MAXSIZE_  The maxsize
   */
  set_MaxSize(MAXSIZE_) {
    this.MAXSIZE = MAXSIZE_;
  }

  /**
   * @desc       Sets the maximum queens.
   *
   * @param      {number}  MAXQUEENS_  The maxqueens
   */
  set_MaxQueens(MAXQUEENS_) {
    this.MAXQUEENS = MAXQUEENS_;
  }

  /**
   * @desc       Sets the board.
   *
   * @param      {Array}  board_  The board
   */
  set_Board(board_) {
    this.board = board_;
  }

  /**
   * @desc       Sets the problem type.
   *
   * @param      {number}  problemType_  The problem type
   */
  set_ProblemType(problemType_) {
    this.problemType = problemType_;
  }

  /**
   * @desc       Starts solving the problem and initializes the board.     
   */
  solveProblem() {
    for (let counter = 0; counter < this.MAXSIZE; counter++) {
      this.board[counter] = -1;
    }
    this.introduceQueen(0);
  }

  /**
   * @desc       Introduces a queen on a valid position.
   *
   * @param      {number}  row     The row
   */
  introduceQueen(row) {
    if (row < this.MAXQUEENS) {
      for (this.board[row] = 0; this.board[row] < this.MAXQUEENS; this.board[row]++) {
        if (this.tryQueen(row) === 1) {
          this.introduceQueen(row + 1, this.MAXQUEENS);
        }
      }
    }
    else {
      const LETTERS = new Array('h', 'g', 'f', 'e', 'd', 'c', 'b', 'a');

      if (this.problemType === 1) { // Personalized problem
        if (this.restrictionQueens() === true) {
          let tmpSolution = [];
          for (let sol = 0; sol < this.MAXQUEENS; sol++) {
            let solution_ = {
              row: sol,
              column: this.board[sol],
              letter: LETTERS[this.board[sol]],
              number: sol + 1,
            }
            tmpSolution[sol] = solution_;
          }
          this.solutions[this.solutions.length] = tmpSolution;  
        }
      }
      else { // General problem
        let tmpSolution = [];
        for (let sol = 0; sol < this.MAXQUEENS; sol++) {
          let solution_ = {
            row: sol,
            column: this.board[sol],
            letter: LETTERS[this.board[sol]],
            number: sol + 1,
          }
          tmpSolution[sol] = solution_;
        }
        this.solutions[this.solutions.length] = tmpSolution;  
      }
    }
  }

  /**
   * @desc       Tryes to put a queen on a position, returns 0 if it's not a valid position and 1 if its a valid position.
   *
   * @param      {number}  row     The row
   * @return     {number}  { description_of_the_return_value }
   */
  tryQueen(row) {
    let position;
    for (position = 0; position < row; position++) {
      if ((this.board[position] === this.board[row]) || (Math.abs(row - position) === (Math.abs(this.board[row] - this.board[position])))) {
        return 0;
      }
    }
    return 1;
  }

  /**
   * @desc       Function that calculates the equation of a line with 2 given points
   *
   * @param      {point} point1 Point (x1, y1) 
   * @param      {point} point2 Point (x2, y2) 
   */
  lineFromTo(point1, point2) {
    let slope;
    let orderedAtOrigin;
    slope = parseFloat(point2[1] - point1[1]) / (point2[0] - point1[0]);
    orderedAtOrigin = point1[1] - (point1[0] * slope);
    let equation = [];
    equation[0] = slope;
    equation[1] = orderedAtOrigin;
    return equation;
  }

  /**
   * @desc       Function that returns true if the given point is on the equation or false if is not.
   * 
   * @param      {point} point Point (x2, y2)
   * @param      {line} line The line equation
   */
  isPointInLine(point, line) {
    if(point[1] === ((line[0] * point[0]) + line[1])) {
      return true;
    }
    return false;
  }

  /**
   * @desc        Function that asserts that our restrictions mentioned on the class definition is satisfied.
   *
   * @return      {boolean}  True if the restriction is satisfied, false otherwhise
   */
  restrictionQueens() {
    let point1 = [];
    let point2 = [];
    let point3 = [];
    let queensBank = [];
    for(let counter = 0; counter < this.MAXQUEENS; counter++) {
      queensBank[counter] = [];
    }
    point1[0] = 0;
    for (let row_ = 0; row_ < this.MAXQUEENS; row_++) {
      for (let column_ = 0; column_ < this.MAXQUEENS; column_++) {
        if (this.board[row_] === column_) {
          queensBank[row_][0] = row_;
          queensBank[row_][1] = column_;
        }
      }
    }
    for(let queen = 0; queen < this.MAXQUEENS; queen++) {
      point1[0] = queensBank[queen][0];
      point1[1] = queensBank[queen][1];
      for(let rows = (queen + 1); rows < this.MAXQUEENS; rows++) {
        point2[0] = queensBank[rows][0];
        point2[1] = queensBank[rows][1];
        for(let columns = (rows +1); columns < this.MAXQUEENS; columns++) {
          point3[0] = queensBank[columns][0];
          point3[1] = queensBank[columns][1];
          if(this.isPointInLine(point3, this.lineFromTo(point1, point2)) === true) {
            return false
          }
        }
      }
    }
    return true;
  }

}

if (typeof require !== 'undefined') {
  module.exports = { Problem8Queens: Problem8Queens };
}
/*
* @Author: Adrián Epifanio
* @File Class LifeGame
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

/**
 * @desc       This class describes a life game and executes the turns by calculating the alive cells and painting them on the canvas.
 *
 * @class      LifeGame (name)
 */
class LifeGame {

  /**
   * @desc       Constructs a new instance.
   *
   * @param      {number}  gridSize_  The grid size
   * @param      {element}  canvas_    The canvas
   * @param      {element}  ctx_       The context
   */
  constructor(gridSize_, canvas_, ctx_) {
    this.cells = [];
    this.gridSize = gridSize_;
    this.canvas = canvas_;
    this.ctx = ctx_;
    this.rows = (parseInt(canvas_.height / gridSize_) + 2);
    this.columns = (parseInt(canvas_.width / gridSize_) + 2);
  }

  /**
   * @desc       Gets the cells.
   *
   * @return     {Array}  The cells.
   */
  get_Cells() {
    return this.cells;
  }

  /**
   * @desc       Gets the grid size.
   *
   * @return     {number}  The grid size.
   */
  get_GridSize() {
    return this.gridSize;
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
   * @desc       Gets the rows.
   *
   * @return     {number}  The rows.
   */
  get_Rows() {
    return this.rows;
  }

  /**
   * @desc       Gets the columns.
   *
   * @return     {number}  The columns.
   */
  get_Columns() {
    return this.columns;
  }

  /**
   * @desc       Sets the cells.
   *
   * @param      {Array}  cells_  The cells
   */
  set_Cells(cells_) {
    this.cells = cells_;
  }

  /**
   * @desc       Sets the grid size.
   *
   * @param      {number}  gridSize_  The grid size
   */
  set_GridSize(gridSize_) {
    this.gridSize = gridSize_;
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
   * @desc       Sets the rows.
   *
   * @param      {number}  rows_   The rows
   */
  set_Rows(rows_) {
    this.rows = rows_;
  }

  /**
   * @desc       Sets the columns.
   *
   * @param      {number}  columns_  The columns
   */
  set_Columns(columns_) {
    this.columns = columns_;
  }

  /**
   * @desc       Initializes the game creating all the cells death.
   */
  /* istanbul ignore next */
  initializeGame() {
    let counter = 0;
    for (let row = 0; row < this.rows; row++) {
      for (let column = 0; column < this.columns; column++) {
        this.cells[(row * this.columns) + column] = new Cell(counter, (row * this.gridSize), (column * this.gridSize), row, column);
        counter++;
      }
    }
  }

  /**
   * @desc       Creates alive random cells from the death ones in the game.
   *
   * @param      {number}  ammount  The ammount
   */
  generateRandomAliveCells(ammount) {
    for (let counter = 0; counter < ammount; ) {
      let number = this.get_RandomCell();
      if (this.cells[number].get_State() === false) {
        this.cells[number].set_State(true);
        counter++;
      }
    }
  }

  /**
   * @desc       Gets a random cell form the cell vector attribute.
   *
   * @return     {number}  The random cell.
   */
  get_RandomCell() {
    let totalPosibilites = this.cells.length;
    let randomNumber_ = (Math.random() * (totalPosibilites));
    randomNumber_ = Math.floor(randomNumber_)
    return randomNumber_;
  }

  /**
   * @desc       Paint the alive cells on canvas in their respective positon.
   */
  /* istanbul ignore next */
  paintCells() {
    for (let row = 1; row < (this.rows - 3); row++) {
      for (let column = 1; column < (this.columns - 3); column++) {  
        if (this.cells[(row * this.columns) + column].get_State() === true) {
          this.ctx.beginPath();
          this.ctx.fillStyle = 'lime';
          this.ctx.fillRect(this.cells[(row * this.columns) + column].get_CoordinateX(), this.cells[(row * this.columns) + column].get_CoordinateY(), this.gridSize, this.gridSize);
          this.ctx.stroke();
          this.ctx.closePath();
        }
      }
    }
  }

  /**
   * @desc       Calculates the next turn of the game by calculating which cells stay alive, death and wich ones changes of state.
   */
  nextTurn() {
    for (let row = 1; row < (this.rows - 1); row++) {
      for (let column = 1; column < (this.columns - 1); column++) {
        this.cells[(row * this.columns) + column].countNeighbours(this.cells, this.columns);
      }
    }
    for (let row = 1; row < (this.rows - 1); row++) {
      for (let column = 1; column < (this.columns - 1); column++) {
        this.cells[(row * this.columns) + column].updateState();
      }
    }
  }
}
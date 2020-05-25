/*
* @Author: Adrián Epifanio
* @File Class Cell
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
 * @desc       This class describes a cell. The cell must have  coordinates and the alive neighbours counter for know when can its chang from being alive to be death.
 *
 * @class      Cell (name)
 */
class Cell {

  /**
   * @desc Constructs a new instance.
   *
   * @param       {number}  ID_           { parameter_description }
   * @param       {number}  coordinateX_  The coordinate x
   * @param       {number}  coordinateY_  The coordinate y
   */
  constructor(ID_, coordinateX_, coordinateY_, posX_, posY_) {
    this.ID = ID_;
    this.posX = posX_;
    this.posY = posY_;
    this.coordinateX = coordinateX_;
    this.coordinateY = coordinateY_;
    this.state = false; // False = death, true = alive
    this.aliveNeighbours = 0;
  }

  /**
   * @desc       Gets the id.
   *
   * @return     {number}  The id.
   */
  get_ID() {
    return this.ID;
  }

  /**
     * @desc       Gets the pos x.
     *
     * @return     {number}  The pos x.
     */
  get_PosX() {
    return this.posX;
  }

  /**
   * @desc       Gets the pos y.
   *
   * @return     {number}  The pos y.
   */
  get_PosY() {
    return this.posY;
  }
  /**
   * @desc       Gets the coordinate x.
   *
   * @return     {number}  The coordinate x.
   */
  get_CoordinateX() {
    return this.coordinateX;
  }

  /**
   * @desc       Gets the coordinate y.
   *
   * @return     {number}  The coordinate y.
   */
  get_CoordinateY() {
    return this.coordinateY;
  }

  /**
   * @desc       Gets the state.
   *
   * @return     {boolean}  The state.
   */
  get_State() {
    return this.state;
  }

  /**
   * @desc       Gets the alive neighbours.
   *
   * @return     {number}  The alive neighbours.
   */
  get_AliveNeighbours() {
    return this.aliveNeighbours;
  }

  /**
   * @desc       Sets the id.
   *
   * @param      {number}  ID_     The new value
   */
  set_ID(ID_) {
    this.ID = ID_;
  }

  /**
   * @desc       Sets the pos x.
   *
   * @param      {number}  posX_  The pos x
   */
  set_PosX(posX_) {
    this.posX = posX_;
  }

  /**
   * @desc       Sets the pos y.
   *
   * @param      {number}  posY_  The pos y
   */
  set_PosY(posY_) {
    this.posY = posY_;
  }

  /**
   * @desc       Sets the coordinate x.
   *
   * @param      {number}  coordinateX_  The coordinate x
   */
  set_CoordinateX(coordinateX_) {
    this.coordinateX = coordinateX_;
  }
  
  /**
   * @desc       Sets the coordinate y.
   *
   * @param      {number}  coordinateY_  The coordinate y
   */
  set_CoordinateY(coordinateY_) {
    this.coordinateY = coordinateY_;
  }
  
  /**
   * @desc       Sets the state.
   *
   * @param      {boolean}  state_  The state
   */
  set_State(state_) {
    this.state = state_;
  }
  
  /**
   * @desc       Sets the alive neighbours.
   *
   * @param      {number}  aliveNeighbours_  The alive neighbours
   */
  set_AliveNeighbours(aliveNeighbours_) {
    this.aliveNeighbours = aliveNeighbours_;
  }


  /**
   * @desc       Updates the state of a cell to alive or death depending on the rules of transition:
   *             1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
   *             2. Any live cell with two or three live neighbours lives on to the next generation.
   *             3. Any live cell with more than three live neighbours dies, as if by overpopulation.
   *             4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
   */
  updateState() {
    if (this.get_State() === true) {
      if ((this.get_AliveNeighbours() < 2) || (this.get_AliveNeighbours() > 3)) {
        this.set_State(false);
      }
    }
    else {
      if (this.get_AliveNeighbours() === 3) {
        this.set_State(true);
      }
    }
  }

  /**
   * @desc       Counts the number of alive neighbours cells to this cell.
   *
   * @param      {Array}   board         The board
   * @param      {number}  totalColumns  The total columns
   */
  /* istanbul ignore next */
  countNeighbours(board, totalColumns) {
    let counter = 0;
    for (let row = (this.posX - 1); row <= (this.posX + 1); row++) {
      for (let column = (this.posY - 1); column <= (this.posY + 1); column++) {
        if ((row !== this.posX) || (column !== this.posY)) {
          if (board[(row * totalColumns) + column].get_State() === true)
            counter++;
        }
      }
    }
    this.set_AliveNeighbours(counter);
  }
}

if (typeof require !== 'undefined') {
  module.exports = { Cell: Cell };
}
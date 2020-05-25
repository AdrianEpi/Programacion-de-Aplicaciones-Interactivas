/*
* @Author: Adrián Epifanio
* @File Class Board
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
 * @desc       This class describes a board. It's in charge of painting the background board of the game and the grid on it.
 *
 * @class      Board (name)
 */
class Board {

  /**
   * @desc       Constructs a new instance.
   *
   * @param      {number}  gridSize_         The grid size
   * @param      {string}  backGroundColor_  The back ground color
   * @param      {element}  canvas_           The canvas
   * @param      {element}  ctx_              The context
   * @param      {string}  gridColor_        The grid color
   */
  constructor(gridSize_, backGroundColor_, canvas_, ctx_, gridColor_) {
    this.gridSize = gridSize_;
    this.backGroundColor = backGroundColor_;
    this.canvas = canvas_;
    this.ctx = ctx_;
    this.gridColor = gridColor_;
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
   * @desc       Gets the back ground color.
   *
   * @return     {string}  The back ground color.
   */
  get_BackGroundColor() {
    return this.backGroundColor;
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
   * @desc       Gets the grid color.
   *
   * @return     {string}  The grid color.
   */
  get_GridColor() {
    return this.gridColor;
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
   * @desc       Sets the back ground color.
   *
   * @param      {string}  backGroundColor_  The back ground color
   */
  set_BackGroundColor(backGroundColor_) {
    this.backGroundColor = backGroundColor_; 
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
   * @desc       Sets the grid color.
   *
   * @param      {string}  gridColor_  The grid color
   */
  set_GridColor(gridColor_) {
    this.gridColor = gridColor_; 
  }

  /**
   * @desc        Draws the board with the grid on canvas.
   */
  /* istanbul ignore next */
  drawBoard() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.backGroundColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.stroke();
    this.ctx.closePath();
    let grid = new Grid(this.gridSize, this.canvas, this.ctx, this.gridColor);
    grid.drawGrid();
    
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.backGroundColor;
    this.ctx.lineWidth = 2 * this.gridSize;
    let point = [];
    point[0] = new Point(0, 0);
    point[1] = new Point(this.canvas.width, 0);
    point[2] = new Point(0, this.canvas.height);
    point[3] = new Point(this.canvas.width, this.canvas.height);
    let line = [];
    line[0] = new Line(point[0], point[1]);
    line[1] = new Line(point[0], point[2]);
    line[2] = new Line(point[1], point[3]);
    line[3] = new Line(point[2], point[3]);
    for (let counter = 0; counter < line.length; counter++) {
      line[counter].drawLine(this.ctx);
    }
    this.ctx.closePath();
  }
}

if (typeof require !== 'undefined') {
  module.exports = { Board: Board };
}
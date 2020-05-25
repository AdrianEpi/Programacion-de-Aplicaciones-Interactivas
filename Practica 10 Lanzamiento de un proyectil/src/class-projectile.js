/*
* @Author: Adrián Epifanio
* @File Projectile Class
* @summary Universidad de La Laguna
*          Escuela Superior de Ingeniería y Tecnología
*          Grado en Ingeniería Informática
*          Asignatura: Programación de Aplicaciones Interactivas
*          Curso: 3º
*          Práctica 9 PAI - Projectile
* @link  Enunciado de la práctica:
*         https://github.com/fsande/PAI-P10-Projectile/blob/master/2019-2020_p10_Projectile.md
*         Repositorio git con este (y otros) códigos:
*         https://github.com/ULL-ESIT-INF-PAI-2019-2020/pai-p10-projectile-AdrianEpi
* @Date:   2020-04-24 11:35:56
* @Last Modified by:   Adrián Epifanio
*/
'use strict';

/**
 * @desc       This class describes a projectile.
 *
 * @class      Projectile (name)
 */
class Projectile {

  /**
   * @description Constructs a new instance.
   *
   * @param       {element}  canvas_          The canvas
   * @param       {element}  ctx_             The context
   * @param       {string}   color_           The color
   * @param       {bool}     paintProjectil_  The paint projectil
   * @param       {number}   speed_           The speed
   * @param       {number}   angle_           The angle
   */
  constructor(canvas_, ctx_, color_, paintProjectil_, speed_, angle_, scale_, friction_) {
    this.speed = speed_;
    this.angle = angle_;
    this.time = 0.0;
    this.distanceX = 0;
    this.distanceY = 0;
    this.maxDistanceY = 0;
    this.canvas = canvas_;
    this.ctx = ctx_;
    this.color = color_;
    this.paintProjectil = paintProjectil_;
    this.pointsVector = [];
    this.scale = scale_;
    this.friction = friction_;
    this.frictionVector = [];
  }

  /**
   * @desc       Gets the speed.
   *
   * @return     {number}  The speed.
   */
  get_Speed() {
    return this.speed;
  }

  /**
   * @desc       Gets the angle.
   *
   * @return     {number}  The angle.
   */
  get_Angle() {
    return this.angle;
  }
  /**
   * @desc       Gets the time.
   *
   * @return     {String}  The time.
   */
  get_Time() {
    return this.time;
  }

  /**
   * @desc       Gets the distance x.
   *
   * @return     {number}  The distance x.
   */
  get_DistanceX() {
    return this.distanceX;
  }

  /**
   * @desc       Gets the distance y.
   *
   * @return     {number}  The distance y.
   */
  get_DistanceY() {
    return this.distanceY;
  }

  /**
   * @desc       Gets the maximum distance y.
   *
   * @return     {number}  The maximum distance y.
   */
  get_MaxDistanceY() {
    return this.maxDistanceY;
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
   * @desc       Gets the color.
   *
   * @return     {string}  The color.
   */
  get_Color() {
    return this.color;
  }

  /**
   * @desc       Gets the paint projectil.
   *
   * @return     {bool}  The paint projectil.
   */
  get_PaintProjectil() {
    return this.paintProjectil;
  }

  /**
   * @desc       Gets the points vector.
   *
   * @return     {Array}  The points vector.
   */
  get_PointsVector() {
    return this.pointsVector;
  }

  /**
   * @desc       Gets the scale.
   *
   * @return     {number}  The scale.
   */
  get_Scale() {
    return this.scale;
  }

  /**
   * @desc       Sets the speed.
   *
   * @param      {number}  speed_  The speed
   */
  set_Speed(speed_) {
    this.speed = speed_;
  }

  /**
   * @desc       Sets the angle.
   *
   * @param      {number}  angle_  The angle
   */
  set_Angle(angle_) {
    this.angle = angle_;
  }

  /**
   * @desc       Sets the time.
   *
   * @param      {String}  time_   The time
   */
  set_Time(time_) {
    this.time = time_;
  }

  /**
   * @desc       Sets the distance x.
   *
   * @param      {number}  distanceX_  The distance x
   */
  set_DistanceX(distanceX_) {
    this.distanceX = distanceX_;
  }

  /**
   * @desc       Sets the distance y.
   *
   * @param      {number}  distanceY_  The distance y
   */
  set_DistanceY(distanceY_) {
    this.distanceY = distanceY_;
  }

  /**
   * @desc       Sets the maximum distance y.
   *
   * @param      {number}  maxDistanceY_  The maximum distance y
   */
  set_MaxDistanceY(maxDistanceY_) {
    this.maxDistanceY = maxDistanceY_;
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
   * @desc       Sets the color.
   *
   * @param      {string}  color_  The color
   */
  set_Color(color_) {
    this.color = color_;
  }

  /**
   * @desc       Sets the paint projectil.
   *
   * @param      {bool}  paintProjectil_  The paint projectil
   */
  set_PaintProjectil(paintProjectil_) {
    this.paintProjectil = paintProjectil_;
  }

  /**
   * @desc       Sets the points vector.
   *
   * @param      {Array}  pointsVector_  The points vector
   */
  set_PointsVector(pointsVector_) {
    this.pointsVector = pointsVector_;
  }

  /**
   * @desc       Sets the scale.
   *
   * @param      {Array}  pointsVector_  The scale
   */
  set_Scale(scale_) {
    this.scale = scale_;
  }

  /**
   * @desc Calculates the vertical speed. 
   *       VerticalSpeed = speed * sin(angle)
   *
   * @return     {number}  The vertical speed.
   */
  calculateVerticalSpeed() {
    let verticalSpeed = 0;
    verticalSpeed = parseFloat(this.speed * Math.sin(this.angle));
    return verticalSpeed;
  }

  /**
   * @desc Calculates the horizontal speed. 
   *       HorizontalSpeed = speed * cos(angle)
   *
   * @return     {number}  The horizontal speed.
   */
  calculateHorizontalSpeed() {
    let horizontalSpeed = 0;
    horizontalSpeed = parseFloat(this.speed * Math.cos(this.angle));
    return horizontalSpeed;
  }

  /**
   * @desc Calculates the total time.
   *       TotalTime = (FinalSpeed - VerticalSpeed) / (-gravity)
   *
   * @return     {number}  The time.
   */
  calculateTime() {
    let time;
    let gravity = 9.8;
    time = (0 - this.calculateVerticalSpeed() * (- gravity)); // Up time
    time *= 2;
    this.set_Time(time);
    return time;
  }

  /**
   *  @desc Calculates the horizontal distance.
   *        HorizontalDistance = TotalTime * HorizontalSpeed
   *
   * @return     {number}  The horizontal distance.
   */
  calculateHorizontalDistance() {
    let distance;
    distance = parseFloat(this.time * this.calculateHorizontalSpeed());
    if (distance < 0) {
      distance *= -1;
    }
    this.set_DistanceX(distance);
    return distance;
  }

  /**
   * @desc Calculates the maximum height.
   *       MaximumHeight = (VerticalSpeed / 2) * (TotalTime / 2)
   *
   * @return     {number}  The height.
   */
  calculateHeight() {
    let height;
    height = parseFloat((this.calculateVerticalSpeed() / 2) * (this.calculateTime() / 2));
    if (height < 0) {
      height *= -1;
    }
    this.set_MaxDistanceY(height);
    return height;
  }

  /**
   * @desc Generates the parabolic equation that follows the projectile where (Vx, Vy) are the coordinates of the vertex of the parabola, and (x, y) the coordinates of one point of the parabola. As we are shooting fom the x and y axis the point (0, 0) will always be part of our parabolic function so we use it as default..
   *       (x - Vy)^2 = c(y - Vx) 
   *        c = ((x - Vy)^2) / (y - Vx) 
   *        y = (((x - Vy)^2) / c) + Vx
   *
   * @return     {object}  Equation of the parabole
   */
  generateEquation() {
    let x = 0;
    let y = 0;
    let Vx_ = this.calculateHorizontalDistance() / 2;
    let Vy_ = this.calculateHeight();
    let constant = ((Math.pow((x - Vy_), 2)) / (y - Vx_));
    let equation = {
      Vx : Vx_,
      Vy : Vy_,
      c : constant,
    }
    return equation;
  }

  /**
   * @desc Generates the parabolic equation with the friction that follows the projectile where (Vx, Vy) are the coordinates of the vertex of the parabola, and (x, y) the coordinates of one point of the parabola. As we are shooting fom the x and y axis the point (0, 0) will always be part of our parabolic function so we use it as default.
   *        c = ((x - Vy)^2) / (y - Vx)
   *
   * @return     {object}  Equation of the parabole
   */
  generateFrictionEquation() {
    let x = 0;
    let y = 0;
    let Vx_ = this.calculateX() / 2;
    let Vy_ = this.calculateY();
    let constant = ((Math.pow((x - Vy_), 2)) / (y - Vx_));
    //constant = 60000000;
    //5156027
    //alert(constant);
    let equation = {
      Vx: Vx_,
      Vy: Vy_,
      c: constant,
    }
    return equation;
  }

  /**
   *  @desc Calculates the horizontal distance with friction.
   *
   * @return     {number}  The horizontal distance.
   */
  calculateX () {
   let X = (this.calculateVerticalSpeed() / this.friction) * (1 - Math.exp(- (this.friction * this.time)));
   return X;
  }

  /**
   * @desc Calculates the maximum height on with friction.
   *
   * @return     {number}  The height.
   */
  calculateY() {
    let gravity = 9.8;
    let Y = (1 / this.friction) * ((gravity / this.friction) + this.calculateHorizontalSpeed()) * (1 - Math.exp(- (this.friction * this.time))) - ((gravity * this.time) / this.friction);
    if (Y < 0) {
      Y *= -1;
    }
    return Y;
  }

  /**
   * @desc      Generates some points that follows the projectile trace with the air friction.
   */
  generateFrictionPoints() {
    let distance = this.calculateHorizontalDistance();
    let frictionEquation = this.generateFrictionEquation();
    for (let coordinateX = 0; coordinateX < distance; coordinateX = coordinateX + (10)) {
      let coordinateY = parseInt((Math.pow((coordinateX - frictionEquation.Vy), 2) / frictionEquation.c) + frictionEquation.Vx);
      if ((coordinateY / this.scale) > this.canvas.height - 50) {
        break;
      }
      if ((this.canvas.height - (50 + coordinateY)) <= (this.canvas.height - 50)) {
        let point = new Point((coordinateX / this.scale) + 50, (this.canvas.height - (50 + (coordinateY / this.scale))));
        this.frictionVector.push(point);
      }
    }
  }
  /**
   * @desc      Generates some points that follows the projectile trace.
   */
  generatePoints() {
    let time = this.calculateTime();
    let verticalSpeed = this.calculateVerticalSpeed();
    let horizontalSpeed = this.calculateHorizontalSpeed();
    let distance = this.calculateHorizontalDistance();
    let equation = this.generateEquation();
    for (let coordinateX = 0; coordinateX < distance * this.scale; coordinateX = coordinateX + (10 * this.scale)) {
      let coordinateY = parseInt((Math.pow((coordinateX - equation.Vy), 2) / equation.c) + equation.Vx);
      if ((coordinateY / this.scale) > this.canvas.height - 50) {
        break;
      }
      if ((this.canvas.height - (50 + coordinateY)) <= (this.canvas.height - 50)) {
        let point = new Point((coordinateX / this.scale) * 2 + 50, (this.canvas.height - (50 + (coordinateY / this.scale))));
        this.pointsVector.push(point);
      }
    }
    this.generateFrictionPoints();
  }

  /**
   * @desc      Draws the points in the vector of the projectile trace on screen.
   */
  /* istanbul ignore next */
  drawTrace() {
    const COLOR = 'RED';
    this.ctx.beginPath();
    for (let point in this.pointsVector) {
      this.pointsVector[point].drawPoint(this.ctx, 2, this.color);
    }
    //alert(this.frictionVector.length);
   /* for (let point in this.frictionVector) {
      this.frictionVector[point].drawPoint(this.ctx, 2, COLOR);
    }*/
    this.ctx.closePath();
  }

  /**
   * @desc      Starts the execution of our projectile, calculating and drawing on screen the projectile trace if the checkbox is marked.
   */
  /* istanbul ignore next */
  shootProjectile() {
    this.generatePoints();
    if (this.paintProjectil === true) {
      this.drawTrace();
      this.ctx.beginPath();
      this.ctx.strokeStyle = 'Black';
      if (this.pointsVector.length > 3) {
        let arrow = new Arrow(this.ctx, 50, (this.canvas.height - 50), this.pointsVector[2].get_CoordinateX(), this.pointsVector[2].get_CoordinateY());
        arrow.drawArrow();
      }
      this.ctx.closePath();
    }
  }

  /**
   * @desc       Prints the projectile information stats (speed, height, time, angle, color...)
   *
   * @param      {element}  ctx     The context
   * @param      {element}  canvas  The canvas
   */
  /* istanbul ignore next */
  printData(ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = 'bold 16px sans-serif';
    let time = 'Time: ' + (this.time / 100).toFixed(2) + ' s';
    let distance = 'Distance: ' + (this.distanceX / 100).toFixed(2) + ' m';
    let maxHeight = 'Max-Height: '+ (this.maxDistanceY / 100).toFixed(2) + ' m';
    let color = 'Color: ' + this.color;
    let verticalSpeed = 'Vertical-Speed: ' + this.calculateVerticalSpeed().toFixed(2) + ' m/s';
    let horizontalSpeed = 'Horizontal-Speed: ' + this.calculateHorizontalSpeed().toFixed(2) + ' m/s';
    let scale = 'Scale: 1 / '+ this.scale;
    let angle = 'Angle: ' + (this.angle).toFixed(2) + ' rads';
    let speed = 'Speed: ' + this.speed + ' m/s';
    let paintedProjectile = 'Painted-Projectile: ' + this.paintProjectil;
    let equation = this.generateEquation();
    let equationInfo = 'Equation: y = (((x - ' + equation.Vy.toFixed(2) + ') / ' + equation.c.toFixed(2) + ') + ' + equation.Vx.toFixed(2);
    let points = 'Points used for generation: ' + this.pointsVector.length;
    ctx.beginPath();
    ctx.fillText(time, 20, 20);
    ctx.fillText(distance, 20, 50);
    ctx.fillText(maxHeight, 20, 80);
    ctx.fillText(color, 20, 110);
    ctx.fillText(verticalSpeed, 20, 140);
    ctx.fillText(horizontalSpeed, 20, 170);
    ctx.fillText(scale, 400, 20);
    ctx.fillText(angle, 400, 50);
    ctx.fillText(speed, 400, 80);
    ctx.fillText(paintedProjectile, 400, 110);
    ctx.fillText(equationInfo, 400, 140);
    ctx.fillText(points, 400, 170);
    ctx.stroke();
    ctx.closePath();
  }
}

if (typeof require !== 'undefined') {
  module.exports = { Projectile: Projectile };
}

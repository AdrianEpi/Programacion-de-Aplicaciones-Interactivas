/*
* @Author: Adrián Epifanio
* @File Projectile program
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
* @Date:   2020-04-24 13:53:56
* @Last Modified by:   Adrián Epifanio
*/


'use strict';
let isFirstProyectile = true;
let scale = 1;
main();


/**
 * @desc Main function, it starts the canvas with the backgrownd.
 */
function main() {
  const canvas = document.getElementById('myCanvas');
  let ctx = canvas.getContext('2d');
  let COLOR = 'Gainsboro';
  let backGround = new BackGround(COLOR, canvas, ctx);
  backGround.generateBackGround();
}

/**
 * @desc Creates a new projectile and shoot it for generate the data, if the user marked the checkbox next to the canvas it will be also printed on canvas with a random color.
 */
function shoot() {
  const canvas = document.getElementById('myCanvas');
  let ctx = canvas.getContext('2d');
  const dataCanvas = document.getElementById('myCanvas2');
  let dataCtx = dataCanvas.getContext('2d');
  const checkBox = document.getElementById('cbox1').checked;
  const speed = document.getElementById('inputSpeed').value;
  let angle = document.getElementById('inputAngle').value;
  angle = 90 - angle;

  angle = angle * Math.PI / 180;
  if (angle <= 0) {
    alert('ERROR, angle must be a number grater than 0');
  }
  else if (speed <= 0) {
    alert('ERROR, speed must be a number grater than 0 and lower than 90');
  }
  else {
    if (isFirstProyectile === true) {
      findScale(canvas, ctx, speed, angle, 1);
      isFirstProyectile = false;
    }
    else {
    let randomColor = new RandomColor();
    let projectile = new Projectile(canvas, ctx, randomColor.get_RandomColor(), checkBox, speed, angle, scale, 1);
    projectile.shootProjectile();
    projectile.printData(dataCtx, dataCanvas);
    }
  }
} 

/**
 * @desc Creates 5 new projectile and shoot them for generate the data, if the user marked the checkbox next to the canvas it will be also printed on canvas with a random color.
 */
function shootFive() {
  const canvas = document.getElementById('myCanvas');
  let ctx = canvas.getContext('2d');
  const dataCanvas = document.getElementById('myCanvas2');
  let dataCtx = dataCanvas.getContext('2d');
  const checkBox = document.getElementById('cbox1').checked;
  const speed = document.getElementById('inputSpeed').value;
  let angle = document.getElementById('inputAngle').value;
  angle = 90 - angle;

  angle = angle * Math.PI / 180;
  if (angle <= 0) {
    alert('ERROR, angle must be a number grater than 0');
  }
  else if (speed <= 0) {
    alert('ERROR, speed must be a number grater than 0 and lower than 90');
  }
  else {
    if (isFirstProyectile === true) {
      findScale(canvas, ctx, speed, angle, 5);
      isFirstProyectile = false;
    }
    else {
      for (let angle_ = 45; angle_ > 0; angle_ = angle_ - 10) {
        let thisAngle = 90 - angle_;
        thisAngle = thisAngle * Math.PI / 180;
        let randomColor = new RandomColor();
        let projectile = new Projectile(canvas, ctx, randomColor.get_RandomColor(), checkBox, speed, thisAngle, scale, 1);
        projectile.shootProjectile();
        projectile.printData(dataCtx, dataCanvas);
      }
    }
  }
} 

/**
 * @desc Finds the scale that is going to use in all the projectiles.
 *
 * @param      {element}  canvas  The canvas
 * @param      {element}  ctx     The context
 * @param      {number}   speed   The speed
 * @param      {number}   angle   The angle
 */
function findScale(canvas, ctx, speed, angle, shoot) {
  let randomColor = new RandomColor();
  let validScale = false;
  while (validScale != true) {
    let projectile = new Projectile(canvas, ctx, randomColor.get_RandomColor(), false, speed, angle, scale, 1);
    projectile.shootProjectile();
    if ((projectile.get_MaxDistanceY() / scale) < (canvas.height - 50)) {
      validScale = true;
      isFirstProyectile = false;
      scale *= 2;
    }
    else {
      scale *= 2;
    }
  }
  if (shoot === 1) {
    shoot();
  }
  else {
    shootFive();
  }
  
}


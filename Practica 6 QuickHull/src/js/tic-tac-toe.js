/**
 * @author Adrián Epifanio Rodríguez Hernández
 *         alu0101158280@ull.edu.es
 * @file Cálculo de la envolvente convexa
 * @since 19.03.2020
 * @summary Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Programación de Aplicaciones Interactivas
 * Curso: 3º
 * Práctica 4 PAI - El problema de las 8 reinas
 * @link  Enunciado de la práctica:
 *         https://github.com/fsande/PAI-P06-QuickHull/blob/master/2019-2020_p06_QuickHull.md
 *         Repositorio git con este (y otros) códigos:
 *         https://github.com/ULL-ESIT-INF-PAI-2019-2020/practica-06-quickhull-AdrianEpi
 * @version
 *            19/03/2020 - Creación (primera versión) del código
 *            23/03/2020 - Versión presentada para evaluación
 */
mainProgram();

/**
 * Pinta un cuadrado en la pantalla
 */
function mainProgram() {
  const canvas = document.getElementById('myCanvas');
  let ctx = canvas.getContext('2d');
  const size_ = 200;
  let posX = 200;
  let posY = 150;
  const move1 = 200;
  const move2 = 100;

  // Cuadrado 1
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.rect(posX, posY, size_, size_);
  ctx.stroke();

  ctx.moveTo(posX, posY);
  posX += move2;
  posY += -move2;
  ctx.lineTo(posX, posY);
  ctx.stroke();
  posX += move1;
  ctx.lineTo(posX, posY);
  ctx.stroke();
  posY += move1;
  ctx.lineTo(posX, posY);
  ctx.stroke();
  posY += move2;
  posX -= move2;
  ctx.lineTo(posX, posY);
  ctx.stroke();
  posX = 400;
  posY = 150;
  ctx.moveTo(posX, posY);
  posX += move2;
  posY -= move2;
  ctx.lineTo(posX, posY);
  ctx.stroke();

  
  posX = move1;
  posY = 350;
  ctx.moveTo(posX, posY);
  ctx.setLineDash([10, 5]);
  posX += move2;
  posY -= move2;
  ctx.lineTo(posX, posY);
  ctx.stroke();
  posX += move1;
  ctx.lineTo(posX, posY);
  ctx.stroke();
  posX -= move1;
  ctx.moveTo(posX, posY);
  posY -= move1;
  ctx.lineTo(posX, posY);
  ctx.stroke();
}

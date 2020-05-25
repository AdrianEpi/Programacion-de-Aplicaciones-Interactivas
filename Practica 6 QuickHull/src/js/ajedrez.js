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
 * Imprime un tablero de ajedrez por pantalla
 */
function mainProgram() {
  const canvas = document.getElementById('myCanvas');
  let ctx = canvas.getContext('2d');
  const size_ = 100;
  let posX = 0;
  let posY = 0;

  for( posY = 0; posY < 800; posY = posY + 100) {
    for (posX = 0; posX < 800; posX = posX = posX + 100) {
      if (posX % 200 === 0 && posY % 200 != 0) {
        ctx.lineWidth = 1;
        //ctx.fillStyle("blue");
        ctx.beginPath();
        ctx.stroke();
        ctx.fillRect(posX, posY, size_, size_);
      }
      if (posX % 200 != 0 && posY % 200 === 0) {
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.stroke();
        ctx.fillRect(posX, posY, size_, size_);
      }
    }
  }

}

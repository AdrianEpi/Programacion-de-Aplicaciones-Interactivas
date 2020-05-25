/**
 * @author Adrián Epifanio Rodríguez Hernández
 *         alu0101158280@ull.edu.es
 * @file Métricas de los países utilizando los módulos
 * @since 16.03.2020
 * @summary Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Programación de Aplicaciones Interactivas
 * Curso: 3º
 * Práctica 4 PAI - El problema de las 8 reinas
 * @link  Enunciado de la práctica:
 *         https://github.com/fsande/PAI-P05-JSON-Statistics/blob/master/2019-2020_p05_JSONStatistics.md
 *         Repositorio git con este (y otros) códigos:
 *         https://github.com/ULL-ESIT-INF-PAI-2019-2020/practica-05-json-data-AdrianEpi
 * @version
 *            16/03/2020 - Creación (primera versión) del código
 *            16/03/2020 - Versión presentada para evaluación
 */

 /**
  * Imprime los atributos del partido
  */
function datosPartido() {
  const PARTIDO = require('../json/mod.js');
  console.log('GAME ID:', PARTIDO.id);
  console.log('Atributos jugadores: ');
  for (player in PARTIDO.players[0]) {
    console.log(player);
  }
  perdidasBalon(PARTIDO);
}
datosPartido();

/**
 * Calcula el ratio de pérdida de balon / asistencias
 * @param {object} PARTIDO 
 */
function perdidasBalon(PARTIDO) {
  console.log('* Pacers players with more turnovers than assists:')
  for (firstName in PARTIDO.players) {
    if ((parseInt(PARTIDO.players[firstName].turnovers) > parseInt(PARTIDO.players[firstName].assists)) && PARTIDO.players[firstName].teamName === 'Pacers') {
      console.log('   * ', PARTIDO.players[firstName].firstName, 'has an assist turnover ratio', parseInt(PARTIDO.players[firstName].turnovers), ':', parseInt(PARTIDO.players[firstName].assists));
    }
  }
  console.log('* Hawks players with more turnovers than assists:')
  for (firstName in PARTIDO.players) {
    if ((parseInt(PARTIDO.players[firstName].turnovers) > parseInt(PARTIDO.players[firstName].assists)) && PARTIDO.players[firstName].teamName === 'Hawks') {
      console.log('   * ', PARTIDO.players[firstName].firstName, 'has an assist turnover ratio', parseInt(PARTIDO.players[firstName].turnovers), ':', parseInt(PARTIDO.players[firstName].assists));
    }
  }
}

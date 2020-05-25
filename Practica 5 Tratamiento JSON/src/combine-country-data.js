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
  * Saves the data in a json formate
  */
function toJSON() {
   const ABBREVIATION_MODULE = require('../modules/country_Abbreviation.js');
   const AVGMALEHEIGHT_MODULE = require('../modules/country_AvgMaleHeight.js');
   const CAPITAL_MODULE = require('../modules/country_Capital.js');
   const CONTINENT_MODULE = require('../modules/country_Continent.js');
   const CURRENCYCODE_MODULE = require('../modules/country_CurrencyCode.js');
   const CURRENCYNAME_MODULE = require('../modules/country_CurrencyName.js');
   const ELEVATION_MODULE = require('../modules/country_Elevation.js');
   const LIFEEXPECTANCY_MODULE = require('../modules/country_LifeExpectancy.js');
   const NAME_MODULE = require('../modules/country_Name.js');
   const POPULATION_MODULE = require('../modules/country_Population.js');
   const POPULATIONDENSITY_MODULE = require('../modules/country_PopulationDensity.js');
   const RELIGION_MODULE = require('../modules/country_Religion.js');
   const SURFACEAREA_MODULE = require('../modules/country_SurfaceArea.js');
   const YEARLYAVGTEMPERATURE_MODULE = require('../modules/country_YearlyAvgTemperature.js');
   const FS = require('fs');
   let objectToSave = [];
   for (let country in NAME_MODULE) {
      objectToSave[country] = {
         country: NAME_MODULE[country].country,
         abbreviation: null,
         height: null,
         city: null,
         continent: null,
         currency_name: null, 
         currency_code: null, 
         religion: null, 
         elevation: null, 
         expectancy: null,
         population: null,
         density: null,
         area: null, 
         temperature: null,
      }
      if (ABBREVIATION_MODULE.hasOwnProperty(country)) {
         objectToSave[country].abbreviation = ABBREVIATION_MODULE[country].abbreviation;
      }
      if (AVGMALEHEIGHT_MODULE.hasOwnProperty(country)) {
         objectToSave[country].height = AVGMALEHEIGHT_MODULE[country].height;
      }
      if (CAPITAL_MODULE.hasOwnProperty(country)) {
         objectToSave[country].city = CAPITAL_MODULE[country].city;
      }
      if (CONTINENT_MODULE.hasOwnProperty(country)) {
         objectToSave[country].continent = CONTINENT_MODULE[country].continent;
      }
      if (CURRENCYCODE_MODULE.hasOwnProperty(country)) {
         objectToSave[country].currency_code = CURRENCYCODE_MODULE[country].currency_code;
      }
      if (CURRENCYNAME_MODULE.hasOwnProperty(country)) {
         objectToSave[country].currency_name = CURRENCYNAME_MODULE[country].currency_name;
      }
      if (ELEVATION_MODULE.hasOwnProperty(country)) {
         objectToSave[country].elevation = ELEVATION_MODULE[country].elevation;
      }
      if (LIFEEXPECTANCY_MODULE.hasOwnProperty(country)) {
         objectToSave[country].expectancy = LIFEEXPECTANCY_MODULE[country].expectancy;
      }
      if (POPULATION_MODULE.hasOwnProperty(country)) {
         objectToSave[country].population = POPULATION_MODULE[country].population;
      }
      if (POPULATIONDENSITY_MODULE.hasOwnProperty(country)) {
         objectToSave[country].density = POPULATIONDENSITY_MODULE[country].density;
      }
      if (RELIGION_MODULE.hasOwnProperty(country)) {
         objectToSave[country].religion = RELIGION_MODULE[country].city;
      }
      if (SURFACEAREA_MODULE.hasOwnProperty(country)) {
         objectToSave[country].area = SURFACEAREA_MODULE[country].area;
      }
      if (YEARLYAVGTEMPERATURE_MODULE.hasOwnProperty(country)) {
         objectToSave[country].temperature = YEARLYAVGTEMPERATURE_MODULE[country].temperature;
      }
   }

   FS.writeFile('../json/country-data.json', JSON.stringify(objectToSave, null, ' '), 'utf8', (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
   });
}
toJSON();

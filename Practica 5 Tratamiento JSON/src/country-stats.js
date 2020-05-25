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
const STATS_MODULE = require('../json/country-data.js');

main();
/**
 * Main
 */
function main() {
  searchMaxPopulation();
  searchLowestPopulation();
  searchMaxPopulationDensityFromAContinent('North America');
  searchMaxPopulationDensityFromAContinent('South America');
  searchContinents();
  averageMaleHeightPerContinent();
  mostPractisedReligion();
  lowestTemperatturesPerContinent();
}

/**
 * Searchs the continents and calls the functions
 */
function searchContinents() {
  let continent_ = [];
  let counter = 0;
  for (let country in STATS_MODULE) {
    if (!continent_.includes(STATS_MODULE[country].continent) && STATS_MODULE[country].continent != null) {
      let newContinent = ' ';
      newContinent = STATS_MODULE[country].continent;
      continent_.push(newContinent);
      counter++;
    }
  }
  console.log('The life expectancy per continent: ');
  for (let counter = 0; counter < continent_.length; counter++) {
    if (continent_[counter] != 'Antarctica') {
      console.log(continent_[counter]);
      countriesLifeExpectancy(continent_[counter]);
    }
  }
}

/**
 * Searchs the country with the maximum population
 */
function searchMaxPopulation() {
  let countryName = STATS_MODULE[0].country;
  let population_ = STATS_MODULE[0].population;
  for (let country in STATS_MODULE) {
    if ((parseInt(STATS_MODULE[country].population) > population_) && (STATS_MODULE[country].population != null)) {
      countryName = STATS_MODULE[country].country;
      population_ = STATS_MODULE[country].population;
    }
  }
  console.log('The most populated country is: ', countryName, ' with', population_, 'habitants.');
}

/**
 * Searchs the country with the minimum population
 */
function searchLowestPopulation() {
  let countryName = STATS_MODULE[0].country;
  let population_ = STATS_MODULE[0].population;
  for (let country in STATS_MODULE) {
    if ((parseInt(STATS_MODULE[country].population) < population_) && (STATS_MODULE[country].population != null)) {
      countryName = STATS_MODULE[country].country;
      population_ = STATS_MODULE[country].population;
    }
  }
  console.log('The less populated country is: ', countryName, ' with', population_, 'habitants.');
}

/**
 * Searchs the country with the maximum population density from a given continent
 * @param {string} continent  The continent name
 */
function searchMaxPopulationDensityFromAContinent(continent) {
  console.log('Max pouplation densitity: ');
  let countryName = STATS_MODULE[0].country;
  let density_ = STATS_MODULE[0].density;
  for (let country in STATS_MODULE) {
    if (STATS_MODULE[country].continent === continent) {
      if(parseFloat(STATS_MODULE[country].density) > density_) {
        countryName = STATS_MODULE[country].country;
        density_ = parseFloat(STATS_MODULE[country].density);
      }
    }
  }
  console.log('The most populated country in ', continent, 'is : ', countryName);
}

/**
 * Prints the 3 countries with the highest life expectancy in a continent
 * @param {string} continent 
 */
function countriesLifeExpectancy(continent) {
  const lifeExpectancy_ = [];
  let meanYears = 0;
  for (const country in STATS_MODULE) {
    if (STATS_MODULE[country].continent === continent) {
      meanYears = parseFloat(STATS_MODULE[country].expectancy);
      if (meanYears !== null && !isNaN(meanYears)) {
        const lifeExpectancy = { 
          country: '',
          years: 0,
        };
        lifeExpectancy.country = STATS_MODULE[country].country;
        lifeExpectancy.years = meanYears;
        lifeExpectancy_.push(lifeExpectancy);
      }
    }
  }
  lifeExpectancy_.sort(function (positionA, positionB) {
    return positionA.years - positionB.years;
  });
  for (let counter = lifeExpectancy_.length - 1; counter !== lifeExpectancy_.length - 4; counter--) {
    console.log('   ' + lifeExpectancy_[counter].country + ': ' + lifeExpectancy_[counter].years);
  }
}

/**
 * Searchs the continent average male height
 */
function averageMaleHeightPerContinent() {
  console.log('AVG male height per continent: ');
  let continent_ = [];
  let counter = 0;
  for (let country in STATS_MODULE) {
    if (!continent_.includes(STATS_MODULE[country].continent) && STATS_MODULE[country].continent != null) {
      let newContinent = ' ';
      newContinent = STATS_MODULE[country].continent;
      continent_.push(newContinent);
      counter++;
    }
  }
  for (let counter = 0; counter < continent_.length; counter++) {
    let totalHeight = 0.0;
    counter_ = 0;
    for (let country in STATS_MODULE) {
      if (STATS_MODULE[country].continent === continent_[counter] && STATS_MODULE[country].height != null) {
          totalHeight += parseInt(STATS_MODULE[country].height);
          counter_++;
      }
    }
    if(counter_ != 0) {
      totalHeight = totalHeight / counter_;
    }
    console.log('The average male height in ', continent_[counter], 'is : ', totalHeight.toFixed(2));
  }
}

/**
 * Searchs the lowest temperatures per continent
 */
function lowestTemperatturesPerContinent() {
  console.log('Temperatures: ');
  let continent_ = [];
  let counter = 0;
  const TEMPORALTEMP = 100;
  for (let country in STATS_MODULE) {
    if (!continent_.includes(STATS_MODULE[country].continent) && STATS_MODULE[country].continent != null) {
      let newContinent = ' ';
      newContinent = STATS_MODULE[country].continent;
      continent_.push(newContinent);
      counter++;
    }
  }
  for (let counter = 0; counter < continent_.length; counter++) {
    let lowestTemp = TEMPORALTEMP;
    counter_ = 0;
    for (let country in STATS_MODULE) {
      if (STATS_MODULE[country].continent === continent_[counter] && STATS_MODULE[country].temperature != null) {
        if (STATS_MODULE[country].temperature < lowestTemp) {
          lowestTemp = parseFloat(STATS_MODULE[country].temperature);
        }
        counter_++;
      }
    }
    if(lowestTemp == TEMPORALTEMP) {
      lowestTemp = 'Unknown';
    }
    else {
      lowestTemp = lowestTemp.toFixed(2);
    }
    console.log('The lowest temperature in', continent_[counter], 'is : ', lowestTemp);
  }
}

/**
 * Prints the most practised religions
 */
function mostPractisedReligion() {
  console.log('Most practised religions: ');
  const religion_ = [];
  let totalCountries = 0;
  let isInReligion = false;
  for (const country in STATS_MODULE) {
    for (let religionCounter = 0; religionCounter < religion_.length; religionCounter++) {
      if (religion_[religionCounter].name === STATS_MODULE[country].religion) {
        isInReligion = true;
        religion_[religionCounter].countryID++;
        totalCountries++;
      }
    }
    if (!isInReligion && STATS_MODULE[country].religion != null) {
      const newReligion = { 
        name: '',
        countryID: 0 
      };
      newReligion.name = STATS_MODULE[country].religion;
      newReligion.countryID++;
      religion_.push(newReligion);
      totalCountries++;
    }
    isInReligion = false;
  }
  religion_.sort(function (positionA, positionB) {
    return positionA.countryID - positionB.countryID;
  });
  for (let counter = religion_.length - 1; counter !== religion_.length - 6; counter--) {
    console.log(religion_[counter].name + ': ' + (religion_[counter].countryID / totalCountries * 100).toFixed(2) + '%');
  }
} 
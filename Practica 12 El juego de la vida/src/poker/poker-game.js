/*
* @Author: Adrián Epifanio
* @File Rules Methods
* @summary Universidad de La Laguna
*          Escuela Superior de Ingeniería y Tecnología
*          Grado en Ingeniería Informática
*          Asignatura: Programación de Aplicaciones Interactivas
*          Curso: 3º
*          Práctica 8 PAI - Poker
* @link  Enunciado de la práctica:
*         https://github.com/fsande/PAI-P08-Poker/blob/master/2019-2020_p08_Poker.md
*         Repositorio git con este (y otros) códigos:
*         https://github.com/ULL-ESIT-INF-PAI-2019-2020/practica-8-poker-AdrianEpi
* @Date:   2020-04-06 12:54:59
* @Last Modified by:   Adrián Epifanio
* @Last Modified time: 2020-04-12 21:29:39
*/

const SUITS = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
const RANKS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const cardsPerHand = 5;
let hand1 = new Hand('hand1');
let hand2 = new Hand('hand2');
let deck_ = new Deck()

main();
/**
 * @desc Main function
 */
async function main() {
  startGame();
}

/**
 * @desc Prints the cards of the hand1 on the top of the canvas
 * 
 * @param {hand} hand
 */
async function printHand1(hand) {
  const canvas = document.getElementById('myCanvas');
  let ctx = canvas.getContext('2d');
  ctx.beginPath();
  const CARDHEIGHT = 200;
  const CARDWIDTH = 140;
  let width = 25;
  let height = 50; 
  ctx.font = 'bold 20px sans-serif';
  ctx.fillText('Jugador 1', 25, 25);
  for (let counter = 0; counter < hand.hand.length; counter++) {
    //alert(hand.hand[counter].get_Name())
    hand.hand[counter].image.onload = function () {
      ctx.drawImage(hand.hand[counter].image, width, height, CARDWIDTH, CARDHEIGHT);
      width += 200;
    }
  } 
  ctx.closePath();
}

/**
 * @desc Prints the cards of the second hand at the bottom of the canvas
 * 
 * @param {hand} hand 
 */
async function printHand2(hand) {
  const canvas = document.getElementById('myCanvas');
  let ctx = canvas.getContext('2d');
  ctx.beginPath();
  const CARDHEIGHT = 200;
  const CARDWIDTH = 140;
  let width = 25;
  let height = 50 + CARDHEIGHT + 25;
  ctx.font = 'bold 20px sans-serif';
  ctx.fillText('Jugador 2', width, height);
  height += 25;
  for (let counter = 0; counter < hand.hand.length; counter++) {
    hand.hand[counter].image.src = '../../img/gray_back.png';
    hand.hand[counter].image.onload = function () {
      ctx.drawImage(hand.hand[counter].image, width, height, CARDWIDTH, CARDHEIGHT);
      width += 200;
    }
  }
  ctx.closePath();
}

/**
 * @description Starts a game.
 *
 * @param       {number}  numberOfHands  The number of hands
 * @param       {number}  cardsPerHand   The cards per hand
 * @param       {object}  stats          The stats
 */
async function startGame() {
  deck_.createDeck(SUITS, RANKS);
  deck_.shuffle();
  generateHand(hand1);
  generateHand(hand2);
  printHand1(hand1);
  printHand2(hand2);
}

/**
 * @desc Creates a hand and sorts the cards on it
 * @param {hand} hand 
 */
async function generateHand(hand) {
  hand.createHand(deck_, cardsPerHand);
  hand.sort();
}

async function updateHand1() {

  hand1 = new Hand('hand1');
  generateHand(hand1);
  printHand1(hand1);
}

/**
 * @desc Counts the stats
 *
 * @param      {Array}   stats   The statistics
 * @param      {Array}   hand    The hand
 */
function analyzer(stats, hands) {
  for (let hand_ of hands) {
    if (hand_.get_Label() === 'Straight Flush') {
      stats.hasStraightFlush++;
    }
    else if (hand_.get_Label() === 'Four Of A Kind') {
      stats.hasFourOfAKind++;
    }
    else if (hand_.get_Label() === 'Full House') {
      stats.hasFullHouse++;
    }
    else if (hand_.get_Label() === 'Flush') {
      stats.hasFlush++;
    }
    else if (hand_.get_Label() === 'Straight') {
      stats.hasStraight++;
    }
    else if (hand_.get_Label() === 'Three Of A Kind') {
      stats.hasThreeOfAKind++;
    }
    else if (hand_.get_Label() === 'Two Pair') {
      stats.hasTwoPair++;
    }
    else if (hand_.get_Label() === 'Pair') {
      stats.hasPair++;
    }
    else {
      stats.anyOfThem++;
    }
  }
}

/**
 * @desc Prints the table.
 *
 * @param      {object}  stats   The statistics
 */
function printTable(stats) {
  const canvas = document.getElementById('myCanvas');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const NAMES = ['Pair', 'Two Pair', 'Three Of A Kind', 'Straight', 'Flush', 'Full House', 'Four Of A Kind', 'Straight Flush', 'No Pair'];
  ctx.font = 'bold 20px sans-serif';

  let posX = 100;
  let posY = 50;
  ctx.beginPath();

  printCell(ctx, 'Hand:', posX, posY);
  for (name in NAMES) {
    posY += 30;
    printCell(ctx, NAMES[name], posX, posY);
  }

  posX += 200;
  posY = 50;
  printCell(ctx, 'Frequency:', posX, posY);
  let totalCounter = 0;
  for (stat in stats) {
    totalCounter += stats[stat];
    posY += 30;
    printCell(ctx, stats[stat], posX, posY);
  }
  posY += 30;
  let string = 'Total: ';
  string += totalCounter;
  printCell(ctx, string, posX, posY);

  posX += 200;
  posY = 50;
  printCell(ctx, 'Probability: ', posX, posY);
  for (stat in stats) {
    let probability = 0;
    if (stats[stat] != 0) {
      probability = stats[stat] / totalCounter * 100;
    }
    let string = '' +  probability;
    string = string.substr(0, 5) + ' %';
    posY += 30;
    printCell(ctx, string, posX, posY);
  }

}

/**
 * @desc Prints a cell.
 *
 * @param      {element} ctx     The context
 * @param      {string}  name    The name
 * @param      {number}  posX    The position x
 * @param      {number}  posY    The position y
 */
function printCell(ctx, name, posX, posY) {
  const WIDTH = 200;
  const HEIGHT = 30;
  ctx.rect(posX, posY, WIDTH, HEIGHT);
  ctx.fillText(name, posX + 10, posY + 20);
  ctx.stroke();
}

/**
 * @desc Pints tthe table by console
 * 
 * @param {object} stats 
 * @param {number} numberOfHands 
 */
function consoleTable(stats, numberOfHands) {
  console.log('Probability\tFrequency\tHands\n');
  for (stat in stats) {
    let probability = stats[stat] / numberOfHands * 100;
    let string = '' + probability;
    string = string.substr(0, 5) + ' %';
    console.log(string + '\t\t' + stats[stat] + '\t\t' + stat);
  }
}

function saveJSON(stats) {
  const FS = require('fs');

  FS.writeFile('../json/poker-data.json', JSON.stringify(stats, null, ' '), 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

}
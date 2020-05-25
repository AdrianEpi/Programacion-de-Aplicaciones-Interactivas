/*
* @Author: Adrián Epifanio
* @File Deck Class
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
* @Date:   2020-04-06 12:37:59
* @Last Modified by:   Adrián Epifanio
* @Last Modified time: 2020-04-14 20:04:43
*/ 

'use strict';

/**
 * This class describes a deck.
 *
 * @class      Deck (name)
 */
class Deck {
  
  /**
   * @desc Constructs a new instance.
   */
  constructor() {
    this.deck = [];
  }

  /**
   * @desc Gets the deck
   * 
   * @return {array} The deck
   */
  get_Deck() {
    return this.deck;
  }

  /**
   * @desc Creates a deck.
   *
   * @return     {Array}  The deck;
   */
  createDeck(SUITS, RANKS) {
    for (let suit of SUITS) {
      for (let rank of RANKS) {
        let classCard;
        // Ejecucion con node
        if (typeof require !== 'undefined') {
          classCard = require('./poker-card.js').Card;
        } else { //ejecucion browser
          classCard = Card;
        }
        let card_ = new classCard(suit, rank);
        card_.findImage();
        this.deck.push(card_);
      }
    }
    return this.deck;
  }

  /**
   * @desc Pops a card from the deck
   *
   * @return     {object}  The card
   */
  popCard() {
    return (this.deck.pop());
  }

  /**
   * @desc Adds a card.
   *
   * @param      {object}  card    The card
   */
  addCard(card) {
    this.deck.push(card);
  }

  /**
   * @desc Shuffles the deck
   *
   * @return     {Array}  The deck
   */
  shuffle() {
    let cardCounter = this.deck.length;
    let tempCard = 0;
    let randomPosition = 0;

    while(cardCounter) {
      randomPosition = Math.floor(Math.random() * cardCounter--);
      tempCard = this.deck[cardCounter];
      this.deck[cardCounter] = this.deck[randomPosition];
      this.deck[randomPosition] = tempCard;
    }
    return this.deck;
  };

  /**
   * @desc Sorts the cards in deck
   */
  sort() {
    this.deck.sort(function(card1, card2) {
      if (card1.get_RankPriority() > card2.get_RankPriority()) {
        return 1;
      }
      else if (card1.get_RankPriority() < card2.get_RankPriority()) {
        return -1;
      }
      return 0;
    });
  }

  /**
   * @desc Deals the start hand
   *
   * @param      {Array}  hand_   The hand
   * @return     {Array}  The hand
   */
  dealHand(hand_) {
    while (hand_.get_Hand().length <= 5) {
      hand_.push(this.deck.popCard());
    }
    return hand_;
  }

  printDeck() {
    let string = '';
    for (let counter = 0; counter < this.deck.length; counter++) {
      string += this.deck[counter].get_Name() + '\n';
    }
    if (typeof require !== 'undefined') {
      //console.log(string); // Commented for testing
    } 
    else { 
      //alert(string); // Commented for testing
    }
    return string;
  }

}

if (typeof require !== 'undefined') {
  module.exports = {Deck: Deck};
}
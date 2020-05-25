/*
* @Author: Adrián Epifanio
* @File Card Class
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
* @Date:   2020-04-06 12:35:56
* @Last Modified by:   Adrián Epifanio
* @Last Modified time: 2020-04-14 20:04:21
*/ 
'use strict';


class Card {
  
  /**
   * @desc Constructs a new instance.
   *
   * @param      {string}  newSuit   The suit
   * @param      {char}    newRank   The rank
   */
  constructor(newSuit, newRank) {
    this.suit = newSuit;
    this.rank = newRank;
    this.name = this.toString();
    this.suitPriority = this.findSuitPriority();
    this.rankPriority = this.findRankPriority();
    this.image = new Image();
  }

  /**
   * @desc Gets the suit.
   *
   * @return     {string}  The suit.
   */
  get_Suit() {
    return this.suit;
  }

  /**
   * @desc Gets the rank.
   *
   * @return     {char}  The rank.
   */
  get_Rank() {
    return this.rank;
  }

  /**
   * @desc Gets the name.
   *
   * @return     {string}  The name.
   */
  get_Name() {
    return this.name;
  }

  /**
   * @desc Gets the suit priority.
   *
   * @return     {number}  The suit priority.
   */
  get_SuitPriority() {
    return this.suitPriority;
  }

  /**
   * @desc Gets the rank priority.
   *
   * @return     {number}  The rank priority.
   */
  get_RankPriority() {
    return this.rankPriority;
  }

  /**
   * @desc Sets the suit.
   *
   * @param      {string}  newSuit  The new suit
   */
  set_Suit(newSuit) {
    this.suit = newSuit;
  }

  /**
   * @desc Sets the rank.
   *
   * @param      {char}  newRank  The new rank
   */
  set_Rank(newRank) {
    this.rank = newRank;
  }

  /**
   * @desc Returns a string representation of the object.
   *
   * @return     {string}  String representation of the object.
   */
  toString() {
    let cardName = '';
    cardName = this.searchRankName() + ' of ' + this.get_Suit();
    switch (this.suit) {
      case 'Clubs':
        cardName += ' ♣';
        break;

      case 'Diamonds':
        cardName += ' ♦';
        break;

      case 'Hearts':
        cardName += ' ♥';
        break;

      case 'Spades':
        cardName += ' ♠';
        break;
    }
    return cardName;
  }

  /**
   * @desc Searchs the card rank if it is not a number
   *
   * @return     {string}  The rank name
   */
  searchRankName() {
    let rankName;
    if (this.rank === 'A') {
      rankName = 'Ace';
    }
    else if (this.rank === 'J') {
      rankName = 'Jack';
    }
    else if (this.rank === 'Q') {
      rankName = 'Queen';
    }
    else if (this.rank === 'K') {
      rankName = 'King';
    }
    else {
      rankName = this.rank;
    }
    return rankName;
  }

  /**
   * @desc Finds a suit priority.
   *
   * @return     {number}  The suit priority
   */
  findSuitPriority() {
    const CLUBS = 'Clubs';
    const DIAMONDS = 'Diamonds';
    const HEARTS = 'Hearts';
    const SPADES = 'Spades';
    if (this.suit === CLUBS) {
      return 1;
    }
    else if (this.suit === DIAMONDS) {
      return 2;
    }
    else if (this.suit === HEARTS) {
      return 3;
    }
    else if (this.suit === SPADES) {
      return 4;
    }
    else {
      alert('Error with the findSuitPriority(), not recognized suit');
    }
  }

  /**
   * @desc Finds a rank priority.
   *
   * @return     {number}  The rank priority
   */
  findRankPriority() {
    let priority;
    if (this.rank >=2 && this.rank <= 10) {
      return this.rank;
    }
    else if (this.rank === 'A') {
      return 1;
    }
    else if (this.rank === 'J') {
      return 11;
    }
    else if (this.rank === 'Q') {
      return 12;
    }
    else if (this.rank === 'K') {
      return 13;
    }
    else {
      alert('Error with the findRankPriority(), not recognized rank');
    }
  }

  /**
   * @desc Compares the suits.
   *
   * @param      {object}   comparingCard    The card
   * @return     {int}  0 if this card's suit < comparingCard's suit, 1 if they are equal, 2 otherwise
   */
  compareSuits(comparingCard) {
    if (this.suitPriority < comparingCard.suitPriority) {
      return 0;
    }
    else if (this.suitPriority === comparingCard.suitPriority){
      return 1;
    }
    else {
      return 2;
    }
  }

  /**
   * @desc Compares the ranks.
   *
   * @param      {object}   comparingCard    The card
   * @return     {int}  0 if this card's rank < comparingCard's rank, 1 if they are equal, 2 otherwise
   */
  compareRanks(comparingCard) {
    if (this.get_RankPriority() < comparingCard.get_RankPriority()) {
      return 0;
    }
    else if (this.get_RankPriority() === comparingCard.get_RankPriority()) {
      return 1;
    }
    else {
      return 2;
    }
  }

  /**
   * @desc Determines whether the specified comparing card is better card.
   *
   * @param      {object}   comparingCard  The comparing card
   * @return     {boolean}  True if the specified comparing card is better card, False otherwise.
   */
  isBetterCard(comparingCard) {
    if (this.compareSuits(comparingCard) === 0) {
      return false;
    }
    else if (this.compareSuits(comparingCard) === 2) {
      return true;
    }
    else {
      if (this.compareRanks(comparingCard) === 0) {
        return false;
      }
      else if (this.compareRanks(comparingCard) === 2) {
        return true;
      }
      else {
        alert('Error, trying to compare same card');
      }
    }
  }

  findImage() {
    const CLUBS = 'Clubs';
    const DIAMONDS = 'Diamonds';
    const HEARTS = 'Hearts';
    const SPADES = 'Spades';
    let name = '../../img/';
    name += this.rank;
    if (this.suit === CLUBS) {
      name += 'C';
    }
    else if (this.suit === DIAMONDS) {
      name += 'D';
    }
    else if (this.suit === HEARTS) {
      name += 'H';
    }
    else if (this.suit === SPADES) {
      name += 'S';
    }
    name += '.png';
    this.image.src = name;
  }
}

if (typeof require !== 'undefined') {
  module.exports = {Card: Card};
}
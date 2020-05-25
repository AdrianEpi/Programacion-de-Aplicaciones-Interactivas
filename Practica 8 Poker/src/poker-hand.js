/*
* @Author: Adrián Epifanio
* @File Hand Class
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
* @Last Modified time: 2020-04-14 20:04:04
*/ 

'use strict';

class Hand {
  
  /**
   * @desc Constructs a new instance.
   *
   * @param      {string}  name_  The name
   */
  constructor(name_) {
    this.hand = [];
    this.name = name_;
    this.label = 'No pair';
  }

  /**
   * Gets the hand.
   *
   * @return     {Array}  The hand.
   */
  get_Hand() {
    return this.hand;
  }

  /**
   * Gets the card.
   *
   * @param      {number}  number  The number
   * @return     {object} The card.
   */
  get_Card(number) {
    return this.hand[number];
  }

  /**
   * Gets the label.
   *
   * @return     {string}  The label.
   */
  get_Label() {
    return this.label;
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
   * @desc Sets the name.
   *
   * @param      {string}  name_  The name
   */
  set_Name(name_) {
    this.name = name_;
  }

  /**
   * @desc Sets the label.
   *
   * @param      {string}  label_  The label
   */
  set_Label(label_) {
    this.label = label_;
  }

  /**
   * @desc Creates a hand.
   *
   * @param      {object}  deck_   The deck
   * @param      {number}  size    The size
   * @return     {Array}   The hand of cards
   */
  createHand(deck_, size) {
    for (let counter = 0; counter < size; counter++) {
      this.hand.push(deck_.popCard());
    }
    return this.hand;
  }

  /**
   * @desc Pops a card from the hand
   *
   * @return     {object}  The card
   */
  popCard() {
    return (this.hand.pop());
  }

  /**
   * @desc Adds a card.
   *
   * @param      {object}  card    The card
   */
  addCard(card) {
    this.hand.push(card);
  }

  /**
   * @desc Prints the hand.
   */
  printHand() {
    let string = this.name + '\n';
    for (let counter = 0; counter < this.hand.length; counter++) {
      string += '    ->  ' + this.hand[counter].get_Name() + '\n';
    }
    if (typeof require !== 'undefined') {
      console.log(string);
    } 
    else { 
      alert(string);
    }
  }

  /**
   * @desc Sorts the cards in hand
   */
  sort() {
    this.hand.sort(function(card1, card2) {
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
   * @desc Determines if there is a pair (2 cards with the same rank).
   *
   * @return     {boolean}  True if pair, False otherwise.
   */
  hasPair() {
    for (let card1 = 0; card1 < this.hand.length; card1++) {
      let counter = 1;
      for (let card2 = card1 + 1; card2 < this.hand.length; card2++ ) {
        if (this.hand[card1].get_Rank() === this.hand[card2].get_Rank()) {
          counter++;
        } 
      }
      if (counter >= 2) {
        return true;
      }
    }
    return false;
  }

  /**
   * @desc Determines if there are 2 pair (2 times 2 cards with the same rank).
   *
   * @return     {boolean}  True if  thow pairs, False otherwise.
   */
  hasTwoPair() {
    let found = false;
    for (let card1 = 0; card1 < this.hand.length; card1++) {
      let counter = 1;
      for (let card2 = card1 + 1; card2 < this.hand.length; card2++ ) {
        if ((this.hand[card1].get_Rank() === this.hand[card2].get_Rank()) && (found === false)) {
          found = true;
        } 
        else if ((this.hand[card1].get_Rank() === this.hand[card2].get_Rank()) && (found === true)) {
          counter++;
        } 
      }
      if ((counter >= 2) && (found === true)) {
        return true;
      }
    }
    return false;
  }

  /**
   * @desc Determines if there is a Three (3 cards with the same rank).
   *
   * @return     {boolean}  True if Three cards of the same rank, False otherwise.
   */
  hasThreeOfAKind() {
    for (let card1 = 0; card1 < this.hand.length; card1++) {
      let counter = 1;
      for (let card2 = card1 + 1; card2 < this.hand.length; card2++ ) {
        if (this.hand[card1].get_Rank() === this.hand[card2].get_Rank()) {
          counter++;
        } 
      }
      if (counter >= 3) {
        return true;
      }
    }
    return false;
  }

  /**
   * @desc Determines if there is flush (5 cards with the same suit).
   *
   * @return     {boolean}  True if flush, False otherwise.
   */
  hasFlush() {
    if (this.hand.length < 5) {
      return false;
    }
    for (let card1 = 0; card1 < this.hand.length; card1++) {
      let counter = 1;
      for (let card2 = card1 + 1; card2 < this.hand.length; card2++) {
        if (this.hand[card1].get_Suit() === this.hand[card2].get_Suit()) {
          counter++;
        } 
      }
      if (counter >= 5) {
        return true;
      }
    }
    return false;
  }

  /**
   * @desc Determines if there is a full house (3 cards with a rank and 2 cards with another rank).
   *
   * @return     {boolean}  True if full house, False otherwise.
   */
  hasFullHouse() {
    let foundPair = false;
    let foundThree = false;
    let auxRank = -1;
    let temporalRank = 0;
    for (let card1 = 0; card1 < this.hand.length; card1++) {
      let counter = 1;
      for (let card2 = card1 + 1; card2 < this.hand.length; card2++) {
        if (this.hand[card1].get_Rank() === this.hand[card2].get_Rank()) {
          if (this.hand[card1].get_Rank() != auxRank) {
            counter++;
            temporalRank = this.hand[card1].get_Rank();
          }
        } 
      }
      if ((counter >= 3) && (foundThree === false)) {
        foundThree = true;
        auxRank = temporalRank;
      }
      else if (counter >= 2) {
        foundPair = true;
        auxRank = temporalRank;
      }
    }
    if ((foundPair === true) && (foundThree === true)){
      return true;
    }
    return false;
  }

  /**
   * @desc Determines if there is a FourOfAKind (4 cards with the same rank).
   *
   * @return     {boolean}  True if Four cards of the same rank, False otherwise.
   */
  hasFourOfAKind() {
    for (let card1 = 0; card1 < this.hand.length; card1++) {
      let counter = 1;
      for (let card2 = card1 + 1; card2 < this.hand.length; card2++ ) {
        if (this.hand[card1].get_Rank() === this.hand[card2].get_Rank()) {
          counter++;
        } 
      }
      if (counter >= 4) {
        return true;
      }
    }
    return false;  
  }

  /**
   * @desc Determines if there is a straight (5 continuous ranks in hand).
   *
   * @return     {boolean}  True if straight, False otherwise.
   */
  hasStraight() {
    let maxCounter = 0;
    let isException = false;
    let counter = 1;
    for (let card = 0; card < this.hand.length - 1; card++) {
      if ((this.hand[card].get_RankPriority() === 10) && (counter ===1) && (maxCounter < 4)) {
        isException = true;
      }
      if ((this.hand[card].get_RankPriority() + 1) === this.hand[card + 1].get_RankPriority()) {
        counter++;
      }
      else if ((this.hand[card].get_RankPriority()) != this.hand[card + 1].get_RankPriority()) {
        if (counter > maxCounter) {
          maxCounter = counter;
        }
        counter = 1;
      }
    }
    if (counter > maxCounter) {
      maxCounter = counter;
    }
    if (maxCounter >= 5) {
      return true;
    }
    else if (maxCounter < 4) {
      return false;
    }
    else {
      if ((isException === true) && (counter === 4)) {
        if (this.hand[0].get_RankPriority() === 1) {
          return true;
        }
      }
    }
  }

  /**
   * @desc Determines if there is a straight flush (5 continuous ranks in hand with the same suit).
   *
   * @return     {boolean}  True if straight, False otherwise.
   */
  hasStraightFlush() {
    let cardRank = this.hand[0].get_RankPriority();
    let cardSuit = this.hand[0].get_SuitPriority();
    let counter = 0;
    for (let card = 1; card < this.hand.length; card++) {
      if (cardRank + 1 === this.hand[card].get_RankPriority() && cardSuit === this.hand[card].get_SuitPriority()) {
        counter++;
        cardRank = this.hand[card].get_RankPriority();
      } 
      else if (cardRank !== this.hand[card].get_RankPriority() && cardRank + 1 !== this.hand[card].get_RankPriority()) {
        counter = 0;
        cardRank = this.hand[card].get_RankPriority();
        cardSuit = this.hand[card].get_SuitPriority();
      }
      if (counter === 4) {
        return true;
      }
    }
    let exceptionCounter = 0;
    while (this.hand[exceptionCounter].get_RankPriority() === 1) {
      if (counter === 3 && this.hand[exceptionCounter].get_SuitPriority() === cardSuit && this.hand.length >= 5 && cardRank === 13) {
        return true;
      }
      exceptionCounter++;
    }
    return false;
  }

  /**
   * @desc Classifies the hand.
   */
  classify() {
    if (this.hasStraightFlush()) {
      this.label = 'Straight Flush';
    }
    else if (this.hasFourOfAKind()) {
      this.label = 'Four Of A Kind';
    }
    else if (this.hasFullHouse()) {
      this.label = 'Full House';
    }
    else if (this.hasFlush()) {
      this.label = 'Flush';
    }
    else if (this.hasStraight()) {
      this.label = 'Straight';
    }
    else if (this.hasThreeOfAKind()) {
      this.label = 'Three Of A Kind';
    }
    else if (this.hasTwoPair()) {
      this.label = 'Two Pair';
    }
    else if (this.hasPair()) {
      this.label = 'Pair';
    }
    else {
      this.label = 'No Pair';
    }
  }

}

if (typeof require !== 'undefined') {
  module.exports = {Hand: Hand};
}
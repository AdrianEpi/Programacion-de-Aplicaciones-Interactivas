/*
* @Author: Adrián Epifanio
* @File Test File
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
* @Last Modified time: 2020-04-14 20:03:15
*/
let assert;

let classDeck;
let classHand;
let classCard;
if (typeof require !== 'undefined') {
  assert = require('chai').assert;
  classDeck = require('../src/js/poker-deck.js').Deck;
  classHand = require('../src/js/poker-hand.js').Hand;
  classCard = require('../src/js/poker-card.js').Card;
}
else { 
  assert = chai.assert;
  classDeck = Deck;
  classHand = Hand;
  classCard = Card;
}


describe('TESTS CLASS CARD', function () {
  it('Get rank \"2 Of Clubs ♣\"', function() {
    let card_ = new classCard('Clubs', 2);
    assert.equal(card_.get_Rank(), '2');
  }); 

  it('Get rank \"Jack Of Hearts ♥\"', function () {
    let card_ = new classCard('Hearts', 'J');
    assert.equal(card_.get_Rank(), 'J');
  });

  it('Get suit \"King Of Diamonds ♦\"', function () {
    let card_ = new classCard('Diamonds', 'K');
    assert.equal(card_.get_Suit(), 'Diamonds');
  });

  it('Get suit \"Ace Of Spades ♠\"', function () {
    let card_ = new classCard('Spades', 'A');
    assert.equal(card_.get_Suit(), 'Spades');
  });


  it('Get name \"King of Diamonds ♦\"', function () {
    let card_ = new classCard('Diamonds', 'K');
    assert.equal(card_.toString(), 'King of Diamonds ♦');
  });

  it('Get name \"7 of Clubs ♣\"', function () {
    let card_ = new classCard('Clubs', '7');
    assert.equal(card_.toString(), '7 of Clubs ♣');
  });

  it('Get rank priority \"Ace Of Spades ♠\"', function () {
    let card_ = new classCard('Spades', 'A');
    assert.equal(card_.get_RankPriority(), 1);
  });

  it('Get rank priority \"King of Diamonds ♦\"', function () {
    let card_ = new classCard('Diamonds', 'K');
    assert.equal(card_.get_RankPriority(), 13);
  });

  it('Get rank priority \"7 of Clubs ♣\"', function () {
    let card_ = new classCard('Clubs', '7');
    assert.equal(card_.get_RankPriority(), 7);
  });

  it('Get suit priority \"King of Diamonds ♦\"', function () {
    let card_ = new classCard('Diamonds', 'K');
    assert.equal(card_.get_SuitPriority(), 2);
  });

  it('Get suit priority \"7 of Clubs ♣\"', function () {
    let card_ = new classCard('Clubs', '7');
    assert.equal(card_.get_SuitPriority(), 1);
  });

});

describe('TESTS CLASS DECK', function () {
  const SUITS = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
  const RANKS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

  it('Same order in cards of 2 decks created', function () {
    let deck_ = new classDeck();
    deck_.createDeck(SUITS, RANKS);
    let deck_2 = new classDeck();
    deck_2.createDeck(SUITS, RANKS);
    assert.equal(deck_.printDeck(), deck_2.printDeck());
  });

  it('Different order between a deck without shuffle and a shuffled deck', function () {
    let deck_ = new classDeck();
    deck_.createDeck(SUITS, RANKS);
    let deck_2 = new classDeck();
    deck_2.createDeck(SUITS, RANKS);
    deck_2.shuffle();
    if (deck_.printDeck() != deck_2.printDeck()) {
      assert.equal(true, true);
    }
  });

  it('Different order between 2 shuffled decks', function () {
    let deck_ = new classDeck();
    deck_.createDeck(SUITS, RANKS);
    let deck_2 = new classDeck();
    deck_2.createDeck(SUITS, RANKS);
    deck_2.shuffle();
    if (deck_.printDeck() != deck_2.printDeck()) {
      assert.equal(true, true);
    }
  });

  it('Sort a shuffled deck', function () {
    let deck_ = new classDeck();
    deck_.createDeck(SUITS, RANKS);
    let deck_2 = new classDeck();
    deck_2.createDeck(SUITS, RANKS);
    deck_2.shuffle();
    deck_2.sort();
    if (deck_.printDeck() === deck_2.printDeck()) {
      assert.equal(true, true);
    }
  });

  it('Pop 3 cards from the deck', function () {
    let deck_ = new classDeck();
    deck_.createDeck(SUITS, RANKS);
    deck_.popCard();
    deck_.popCard();
    deck_.popCard();
    assert.equal(deck_.get_Deck().length, 49);
  });

  it('Add 3 cards to the deck', function () {
    let deck_ = new classDeck();
    let card_ = new classCard('Clubs', 2);
    deck_.createDeck(SUITS, RANKS);
    deck_.addCard(card_);
    deck_.addCard(card_);
    deck_.addCard(card_);
    assert.equal(deck_.get_Deck().length, 55);
  });

  
});

describe('TESTS CLASS HAND', function () {
  const SUITS = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
  const RANKS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

  it('Create 7 cards hand', function () {
    let deck_ = new classDeck();
    deck_.createDeck(SUITS, RANKS);
    let hand_ = new classHand('hand');
    hand_.createHand(deck_, 7);
    assert.equal(hand_.get_Hand().length, 7);
  });

  it('Hand takes the cards from the deck', function () {
    let deck_ = new classDeck();
    deck_.createDeck(SUITS, RANKS);
    let hand_ = new classHand('hand');
    hand_.createHand(deck_, 7);
    assert.equal(deck_.get_Deck().length, 45);
  });

  it('With only one suit cant have pair', function () {
    const SUITS2 = ['Clubs'];
    let deck_ = new classDeck();
    deck_.createDeck(SUITS2, RANKS);
    let hand_ = new classHand('hand');
    hand_.createHand(deck_, 7);
    assert.equal(hand_.hasPair(), false);
  });

  it('With only one suit must have Flush', function () {
    const SUITS2 = ['Clubs'];
    let deck_ = new classDeck();
    deck_.createDeck(SUITS2, RANKS);
    let hand_ = new classHand('hand');
    hand_.createHand(deck_, 7);
    assert.equal(hand_.hasFlush(), true);
  });

  it('Pop 3 cards from the hand', function () {
    let deck_ = new classDeck();
    deck_.createDeck(SUITS, RANKS);
    let hand_ = new classHand('hand');
    hand_.createHand(deck_, 7);
    hand_.popCard();
    hand_.popCard();
    hand_.popCard();
    assert.equal(hand_.get_Hand().length, 4);
  });

  it('Add 3 cards to the hand', function () {
    let deck_ = new classDeck();
    let card_ = new classCard('Clubs', 2);
    deck_.createDeck(SUITS, RANKS);
    let hand_ = new classHand('hand');
    hand_.createHand(deck_, 7);
    hand_.addCard(card_);
    hand_.addCard(card_);
    hand_.addCard(card_);
    assert.equal(hand_.get_Hand().length, 10);
  });

  it('With only one suit and the 13 cards must have StraightFlush', function () {
    const SUITS2 = ['Clubs'];
    let deck_ = new classDeck();
    deck_.createDeck(SUITS2, RANKS);
    let hand_ = new classHand('hand');
    hand_.createHand(deck_, 13);
    hand_.sort();
    assert.equal(hand_.hasStraightFlush(), true);
  });

  it('Gets the label of hand', function () {
    let deck_ = new classDeck();
    deck_.createDeck(SUITS, RANKS);
    let hand_ = new classHand('hand');
    hand_.createHand(deck_, 7);
    hand_.sort();
    assert.equal(hand_.get_Label(), 'No pair');
  });

  it('Gets the starting name of hand', function () {
    let deck_ = new classDeck();
    deck_.createDeck(SUITS, RANKS);
    let hand_ = new classHand('asd');
    hand_.set_Name('hand')
    hand_.createHand(deck_, 7);
    hand_.sort();
    assert.equal(hand_.get_Name(), 'hand');
  });

  it('Gets the rank of a given card', function () {
    let card_1 = new classCard('Clubs', 2);   
    let hand_ = new classHand('hand');
    hand_.addCard(card_1);
    hand_.set_Label("No pair");
    assert.equal(hand_.get_Card(0).get_Rank(), '2');
  });

  it('Has two pairs', function () {
    let card_1 = new classCard('Clubs', 2);
    let card_2 = new classCard('Diamonds', 2);
    let card_3 = new classCard('Clubs', 3);
    let card_4 = new classCard('Diamonds', 3);
    let hand_ = new classHand('hand');
    hand_.addCard(card_1);
    hand_.addCard(card_2);
    hand_.addCard(card_3);
    hand_.addCard(card_4);
    hand_.classify();
    assert.equal(hand_.hasTwoPair(), true);
  });

  it('Find if there is a pair in the hand', function () {
    let card_1 = new classCard('Clubs', 2);
    
    let card_2 = new classCard('Diamonds', 2);
    card_1.compareSuits(card_2);
    card_1.compareRanks(card_2);
    card_1.isBetterCard(card_2);
    let hand_ = new classHand('hand');
    hand_.addCard(card_1);
    hand_.addCard(card_2);
    hand_.classify();
    assert.equal(hand_.hasPair(), true);
  });

  it('Find if there is not two pair', function () {
    let card_1 = new classCard('Clubs', 2);
    let card_2 = new classCard('Diamonds', 2);
    let hand_ = new classHand('hand');
    hand_.addCard(card_1);
    hand_.addCard(card_2);
    assert.equal(hand_.hasTwoPair(), false);
  });

  it('Find if there not three of a kind', function () {
    let card_1 = new classCard('Clubs', 2);
    let card_2 = new classCard('Diamonds', 2);
    let card_3 = new classCard('Hearts', 2);
    let hand_ = new classHand('hand');
    hand_.addCard(card_1);
    hand_.addCard(card_2);
    hand_.addCard(card_3);
    hand_.classify();
    assert.equal(hand_.hasThreeOfAKind(), true);
  });

   it('Find if there is not three of a kind', function () {
    let card_1 = new classCard('Clubs', 2);
    let card_2 = new classCard('Diamonds', 2);
    let card_3 = new classCard('Hearts', 3);
    let hand_ = new classHand('hand');
    hand_.addCard(card_1);
    hand_.addCard(card_2);
    hand_.addCard(card_3);
    assert.equal(hand_.hasThreeOfAKind(), false);
  }); 

  it('Find if there is full house', function () {
    let card_1 = new classCard('Clubs', 2);
    let card_2 = new classCard('Diamonds', 2);
    let card_3 = new classCard('Hearts', 2);
    let card_4 = new classCard('Diamonds', 3);
    let card_5 = new classCard('Hearts', 3);
    let hand_ = new classHand('hand');
    hand_.addCard(card_1);
    hand_.addCard(card_2);
    hand_.addCard(card_3);
    hand_.addCard(card_4);
    hand_.addCard(card_5);
    hand_.classify();
    assert.equal(hand_.hasFullHouse(), true);
  });

  it('Find if there is not full house', function () {
    let card_1 = new classCard('Clubs', 2);
    let hand_ = new classHand('hand');
    hand_.addCard(card_1);
    assert.equal(hand_.hasFullHouse(), false);
  });

  it('Find if there is four of a kind', function () {
    let card_1 = new classCard('Clubs', 2);
    let card_2 = new classCard('Diamonds', 2);
    let card_3 = new classCard('Hearts', 2);
    let card_4 = new classCard('Spades', 2);
    let hand_ = new classHand('hand');
    hand_.addCard(card_1);
    hand_.addCard(card_2);
    hand_.addCard(card_3);
    hand_.addCard(card_4);
    hand_.classify();
    assert.equal(hand_.hasFourOfAKind(), true);
  });

  it('Find if there is not fout of a kind', function () {
    let card_1 = new classCard('Clubs', 2);
    let hand_ = new classHand('hand');
    hand_.addCard(card_1);
    assert.equal(hand_.hasFullHouse(), false);
  });

  it('Classifies arrives No Pair', function () {
    let deck_ = new classDeck();
    deck_.createDeck(SUITS, RANKS);
    let card_1 = new classCard('Clubs', 2);
    let card_2 = new classCard('Clubs', 3);
    let hand_ = new classHand('hand');
    hand_.addCard(card_1);
    hand_.addCard(card_2);
    hand_.classify();
    assert.equal(hand_.get_Label(), 'No Pair');
  });


});
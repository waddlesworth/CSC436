import { card } from '../shared/card.module';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class BusinessCardService {
  cardsChanged = new Subject<card[]> ();
  startedEditing = new Subject<number>();

  private cards:card[] = [
    new card("sherry", "student", "depaul", "8148074929", "waddles@gmail.com", null, 
    "eleven 40"),
    new card("sean", "student", "depaul", "xxxxxx", "cyuxxx@gmail.com", "seansomething.com", 
    "eleven 40"),
    new card("henry", "student", "nyu", "xxxxx", "henry@gmail.com", "haoyuwang.io", 
    "new york city")
  ]

  getCards() {
      return this.cards.slice();
  }

  getCard(index:number) {
      return this.cards.slice()[index];
  }

  setCards(cards: card[]) {
      this.cards = cards;
      this.cardsChanged.next(this.cards.slice());
  }

  addCard(card: card) {
      this.cards.push(card);
      this.cardsChanged.next(this.cards.slice());
  }

  updateCard(index: number, newCard: card) {
      this.cards[index] = newCard;
      this.cardsChanged.next(this.cards.slice());
  }

  deleteCard(index: number) {
      this.cards.splice(index, 1);
      this.cardsChanged.next(this.cards.slice());
  }

}
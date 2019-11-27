import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { card } from '../../shared/card.module';
import { BusinessCardService } from '../business-card.service';

@Component({
  selector: 'app-business-cards-list',
  templateUrl: './business-cards-list.component.html',
  styleUrls: ['./business-cards-list.component.css']
})
export class BusinessCardsListComponent implements OnInit, OnDestroy {
  cards: card[];
  subscription: Subscription;

  constructor(private cardService: BusinessCardService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.cardService.cardsChanged
      .subscribe(
        (cards: card[]) => {
          this.cards = cards;
        }
    );
    this.cards = this.cardService.getCards();
  }

  /*onNewCard() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }*/

  onSelected(index:number) {
    this.cardService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

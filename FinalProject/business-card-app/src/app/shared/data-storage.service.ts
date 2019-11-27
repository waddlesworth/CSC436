import{ Injectable } from '@angular/core';
import{ HttpClient, HttpParams } from '@angular/common/http';
import { BusinessCardService } from '../business-cards/business-card.service';
import { card } from './card.module';
import { AuthService } from '../auth/auth.service';
import { map, tap, take, exhaustMap } from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private cardService: BusinessCardService, private authService: AuthService) {

    }

    storeCards() {
        const cards = this.cardService.getCards();
        this.http.put('https://businesscardapp-9d1fe.firebaseio.com/cards.json', 
        cards).subscribe(response => {
            console.log(response);
        });
    }

    fetchCards() {
        return this.http.get<card[]>('https://businesscardapp-9d1fe.firebaseio.com/cards.json').subscribe(
            cards => {
                this.cardService.setCards(cards);
            }
        );
    }

}
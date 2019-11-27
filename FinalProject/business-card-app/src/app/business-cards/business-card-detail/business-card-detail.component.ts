import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { card } from '../../shared/card.module';
import { BusinessCardService} from '../business-card.service';

@Component({
  selector: 'app-business-card-detail',
  templateUrl: './business-card-detail.component.html',
  styleUrls: ['./business-card-detail.component.css']
})
export class BusinessCardDetailComponent implements OnInit {

  card: card;
  id: number;

  constructor(private cardService : BusinessCardService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id =+params['id'];
        this.card = this.cardService.getCard(this.id);
      })
  }

  onEditCard() {
    this.cardService.startedEditing.next(this.id);
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteCard() {
    this.cardService.deleteCard(this.id);
    this.router.navigate(['/cards']);
  }


}

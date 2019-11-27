import { Component, OnInit, Input } from '@angular/core';
import { card } from 'src/app/shared/card.module';

@Component({
  selector: 'app-business-card-item',
  templateUrl: './business-card-item.component.html',
  styleUrls: ['./business-card-item.component.css']
})
export class BusinessCardItemComponent implements OnInit {

  @Input() card: card;
  @Input() index: number;
  
  constructor() { }

  ngOnInit() {
  }

}

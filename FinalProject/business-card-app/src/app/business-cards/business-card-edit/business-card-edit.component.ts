import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { BusinessCardService } from '../business-card.service';
import { NgForm } from '@angular/forms';
import { card } from '../../shared/card.module';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-business-card-edit',
  templateUrl: './business-card-edit.component.html',
  styleUrls: ['./business-card-edit.component.css']
})
export class BusinessCardEditComponent implements OnInit{
  @ViewChild('f', {static : false}) bcForm: NgForm;
  subscription: Subscription;
  editedItemIndex: number;
  editMode = false;
  editedItem: card;

  constructor(private route: ActivatedRoute,
              private cardService: BusinessCardService) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.editedItemIndex = +params['id'];
        this.editMode = params['id'] != null;
      }
    )

    this.subscription = this.cardService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.cardService.getCard(index);
        this.bcForm.setValue({
          name: this.editedItem.name,
          title: this.editedItem.title,
          company: this.editedItem.company,
          phone: this.editedItem.phone,
          email: this.editedItem.email,
          web: this.editedItem.web,
          address : this.editedItem.address
        });
      }
    )
  }

  onSubmit(form: NgForm) {
    console.log(this.editMode);
    const value = form.value;
    const newCard = new card(value.name, value.title, value.company, value.phone, value.email, value.web, value.address);
    if (this.editMode) {
      this.cardService.updateCard(this.editedItemIndex, newCard);
    } else {
      this.cardService.addCard(newCard);
    }

    this.editMode = false;
    form.reset();
  }

  onDelete() {
    this.cardService.deleteCard(this.editedItemIndex);
    this.onClear();
  }
  onClear(){
    this.bcForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }

}

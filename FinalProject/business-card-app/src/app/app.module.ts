import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebcamModule } from 'ngx-webcam';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BusinessCardsComponent } from './business-cards/business-cards.component';
import { BusinessCardsListComponent } from './business-cards/business-cards-list/business-cards-list.component';
import { BusinessCardItemComponent } from './business-cards/business-cards-list/business-card-item/business-card-item.component';
import { BusinessCardDetailComponent } from './business-cards/business-card-detail/business-card-detail.component';
import { NewBusinessCardComponent } from './business-cards/new-business-card/new-business-card.component';
import { BusinessCardEditComponent } from './business-cards/business-card-edit/business-card-edit.component';
import { BusinessCardService } from './business-cards/business-card.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner.component';
import { WebcamComponent } from './webcam/webcam.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BusinessCardsComponent,
    BusinessCardsListComponent,
    BusinessCardItemComponent,
    BusinessCardDetailComponent,
    NewBusinessCardComponent,
    BusinessCardEditComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    WebcamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    WebcamModule
  ],
  providers: [BusinessCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

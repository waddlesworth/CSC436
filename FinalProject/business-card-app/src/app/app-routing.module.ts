import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessCardDetailComponent } from './business-cards/business-card-detail/business-card-detail.component';
import { NewBusinessCardComponent } from './business-cards/new-business-card/new-business-card.component';
import { BusinessCardsComponent } from './business-cards/business-cards.component';
import { BusinessCardEditComponent } from './business-cards/business-card-edit/business-card-edit.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { WebcamComponent  } from './webcam/webcam.component';

const routes: Routes = [
  {path: '', redirectTo: '/cards', pathMatch: 'full'},
  {path: 'cards', component: BusinessCardsComponent, canActivate: [AuthGuard],
   children: [
    {path: '', component: NewBusinessCardComponent},
    {path: 'new', component: BusinessCardEditComponent},
    {path: ':id', component: BusinessCardDetailComponent},
    {path: ':id/edit', component: BusinessCardEditComponent}
  ]},
  {path: 'add', component: BusinessCardEditComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'webcam', component: WebcamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

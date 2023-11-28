import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManageQuoteComponent } from './manage-quote/manage-quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuoteEditComponent } from './quote-edit/quote-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ManageQuoteComponent,
  },
  {
    path: ':id',
    component: QuoteDetailComponent,
  },
  {
    path: 'edit/:id',
    component: QuoteEditComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuoteRoutingModule {}

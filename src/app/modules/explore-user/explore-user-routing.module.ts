import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { RequestQuoteComponent } from './request-quote/request-quote.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/request-quote' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'request-quote',
    component: RequestQuoteComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreUserRoutingModule {}

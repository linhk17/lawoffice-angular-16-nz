import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { MainLayoutComponent } from './layouts/user-layout/main-layout/main-layout.component';
import { RedirectGuard } from './shared/guards/redirect.guard';
import { LoginComponent } from './modules/authentication/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ManageLayoutComponent } from './layouts/manage-layout/manage-layout.component';
import { RequestQuoteComponent } from './modules/quote/request-quote/request-quote.component';
import { ManageQuoteComponent } from './modules/quote/manage-quote/manage-quote.component';
import { QuoteDetailComponent } from './modules/quote/quote-detail/quote-detail.component';
import { QuoteEditComponent } from './modules/quote/quote-edit/quote-edit.component';
import { ManageCalendarComponent } from './modules/calendar/manage-calendar/manage-calendar.component';
import { ManageMatterComponent } from './modules/matter/manage-matter/manage-matter.component';
import { MatterDetailComponent } from './modules/matter/matter-detail/matter-detail.component';
import { MatterFormComponent } from './modules/matter/matter-form/matter-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: "redirect",
    component: MainLayoutComponent,
    canActivate: [RedirectGuard]
  },
  
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "request-quote",
        component: RequestQuoteComponent
      },
    ]
  },
  {
    path: "admin",
    canActivate: [AuthGuard],
    component: ManageLayoutComponent,
    data: { 
      expectedRole: 1
    },
    children: [
      {
        path: 'manage-matter',
        
        children: [
          {
            path: '',
            component: ManageMatterComponent,
          },
          {
            path: 'add',
            component: MatterFormComponent
          },
          {
            path: ':id',
            component: MatterDetailComponent
          },
          
          {
            path: 'edit/:id',
            component: QuoteEditComponent
          },
        ]
      },
      {
        path: 'manage-calendar',
        
        children: [
          {
            path: '',
            component: ManageCalendarComponent,
          },
        ]
      },
      {
        path: 'manage-quote',
        
        children: [
          {
            path: '',
            component: ManageQuoteComponent,
          },
          {
            path: ':id',
            component: QuoteDetailComponent
          },
          {
            path: 'edit/:id',
            component: QuoteEditComponent
          },
        ]
      },
      
    ]
  },
  {
    path: "counselor",
    canActivate: [AuthGuard],
    component: ManageLayoutComponent,
    data: { 
      expectedRole: 3
    },
    children: [
      {
        path: 'manage-quote',
        
        children: [
          {
            path: '',
            component: ManageQuoteComponent,
          },
          {
            path: ':id',
            component: QuoteDetailComponent
          },
          {
            path: 'edit/:id',
            component: QuoteEditComponent
          },
        ]
      },
      {
        path: 'manage-calendar',
        
        children: [
          {
            path: '',
            component: ManageCalendarComponent,
          },
        ]
      },
      
    ]
  },
  {
    path: "law",
    canActivate: [AuthGuard],
    component: ManageLayoutComponent,
    data: { 
      expectedRole: 2
    },
    children: [
      {
        path: 'manage-matter',
        
        children: [
          {
            path: '',
            component: ManageMatterComponent,
          },
          {
            path: 'add',
            component: MatterFormComponent
          },
          {
            path: ':id',
            component: MatterDetailComponent
          },
          
          {
            path: ':id/edit',
            component: MatterDetailComponent
          },
        ]
      },
      {
        path: 'manage-calendar',
        
        children: [
          {
            path: '',
            component: ManageCalendarComponent,
          },
        ]
      },
      {
        path: 'manage-quote',
        
        children: [
          {
            path: '',
            component: ManageQuoteComponent,
          },
          {
            path: ':id',
            component: QuoteDetailComponent
          },
          {
            path: 'edit/:id',
            component: QuoteEditComponent
          },
        ]
      },
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

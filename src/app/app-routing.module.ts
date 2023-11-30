import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/user-layout/main-layout/main-layout.component';
import { ManageLayoutComponent } from './layouts/manage-layout/manage-layout.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { RedirectGuard } from './shared/guards/redirect.guard';

const routes: Routes = [
  {
    path: 'redirect',
    component: MainLayoutComponent,
    canActivate: [RedirectGuard],
  },
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./modules/explore-user/explore-user.module')
      .then((m) => m.ExploreUserModule),
  },
  {
    path: 'login',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./modules/authentication/authentication.module')
      .then((m) => m.AuthenticationModule),
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    component: ManageLayoutComponent,
    data: {
      expectedRole: 1,
    },
    children: [
      {
        path: 'manage-matter',
        loadChildren: () =>
          import('./modules/matter/matter.module')
          .then((m) => m.MatterModule),
      },
      {
        path: 'manage-calendar',
        loadChildren: () =>
          import('./modules/calendar/calendar.module')
          .then((m) => m.CalendarModule),
      },
      {
        path: 'manage-quote',
        loadChildren: () =>
          import('./modules/quote/quote.module')
          .then((m) => m.QuoteModule),
      },
    ],
  },

  {
    path: 'law',
    canActivate: [AuthGuard],
    component: ManageLayoutComponent,
    data: {
      expectedRole: 2,
    },
    children: [
      {
        path: 'manage-matter',
        loadChildren: () =>
          import('./modules/matter/matter.module')
          .then((m) => m.MatterModule),
      },
      {
        path: 'manage-calendar',
        loadChildren: () =>
          import('./modules/calendar/calendar.module')
          .then((m) => m.CalendarModule),
      },
      {
        path: 'manage-profile',
        loadChildren: () =>
          import('./modules/profile/profile.module')
          .then((m) => m.ProfileModule),
      },
      {
        path: 'manage-task',
        loadChildren: () =>
          import('./modules/task/task.module')
          .then((m) => m.TaskModule),
      }
    ],
  },
  {
    path: 'counselor',
    canActivate: [AuthGuard],
    component: ManageLayoutComponent,
    data: {
      expectedRole: 3,
    },
    children: [
      {
        path: 'manage-quote',
        loadChildren: () =>
          import('./modules/quote/quote.module')
          .then((m) => m.QuoteModule),
      },
      {
        path: 'manage-calendar',
        loadChildren: () =>
          import('./modules/calendar/calendar.module')
          .then((m) => m.CalendarModule),
      },
      {
        path: 'manage-profile',
        loadChildren: () =>
          import('./modules/profile/profile.module')
          .then((m) => m.ProfileModule),
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

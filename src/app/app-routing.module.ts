import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './guards/user-guard';
import { CountryAddformComponent } from './pages/country-addform/country-addform.component';
import { CountryListComponent } from './pages/country-list/country-list.component';
import { CountryUpdateformComponent } from './pages/country-updateform/country-updateform.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StatsComponent } from './pages/stats/stats.component';

const routes: Routes = [
  {
    path: 'home',
    component: CountryListComponent,
  },
  {
    path: 'stats',
    component: StatsComponent,
  },
  {
    path: 'add',
    component: CountryAddformComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'update/:id',
    component: CountryUpdateformComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'sign-in',
    component: SigninComponent,
  },
  {
    path: 'sign-up',
    component: SignupComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

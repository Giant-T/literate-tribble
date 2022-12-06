import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryAddformComponent } from './pages/country-addform/country-addform.component';
import { CountryListComponent } from './pages/country-list/country-list.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: 'home',
    component: CountryListComponent,
  },
  {
    path: 'add',
    component: CountryAddformComponent,
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

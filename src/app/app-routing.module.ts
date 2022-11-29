import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryAddformComponent } from './country-addform/country-addform.component';
import { CountryListComponent } from './country-list/country-list.component';

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

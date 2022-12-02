import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

// Angular Material imports
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryService } from './country.service';
import { CountryInfoComponent } from './country-info/country-info.component';
import { LeaderService } from './leader.service';
import { CountryAddformComponent } from './country-addform/country-addform.component';
import { CoordsPipe } from './coords.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CountryListComponent,
    CountryInfoComponent,
    CountryAddformComponent,
    CoordsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatDividerModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatChipsModule,
    GoogleMapsModule,
    MatSelectModule,
  ],
  providers: [CountryService, LeaderService, FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}

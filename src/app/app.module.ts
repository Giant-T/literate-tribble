import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

// Autres components
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CountryListComponent } from './pages/country-list/country-list.component';
import { CountryService } from './services/country.service';
import { CountryInfoComponent } from './components/country-info/country-info.component';
import { LeaderService } from './services/leader.service';
import { CountryAddformComponent } from './pages/country-addform/country-addform.component';
import { CoordsPipe } from './coords.pipe';
import { AuthService } from './services/auth.service';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthorizedDisplayComponent } from './components/authorized-display/authorized-display.component';
import { UserGuard } from './guards/user-guard';
import { StatsComponent } from './pages/stats/stats.component';
import { StatsService } from './services/stats.service';
import { CountryFormComponent } from './components/country-form/country-form.component';
import { CountryUpdateformComponent } from './pages/country-updateform/country-updateform.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CountryListComponent,
    CountryInfoComponent,
    CountryAddformComponent,
    CoordsPipe,
    SigninComponent,
    SignupComponent,
    AuthorizedDisplayComponent,
    StatsComponent,
    CountryFormComponent,
    CountryUpdateformComponent,
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
    ReactiveFormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatMenuModule,
    NgxChartsModule,
  ],
  providers: [
    CountryService,
    LeaderService,
    FormBuilder,
    AuthService,
    UserGuard,
    StatsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

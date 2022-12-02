import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-addform',
  templateUrl: './country-addform.component.html',
  styleUrls: ['./country-addform.component.css'],
})
export class CountryAddformComponent {
  // Variables pour le formulaire
  countryFormGroup = this.formBuilder.group({
    name: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100),
        Validators.pattern(/^[A-Z]{1}[^\d\r\n]+$/),
      ]),
    ],
    code: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(/^[A-Z]{3}$/),
      ]),
    ],
    continents: ['', Validators.compose([Validators.required])],
  });

  country: Country = {
    name: '',
    code: '',
    continent: '',
    area: 0,
    languages: [],
    isNato: false,
    capital: {
      name: '',
      coords: {
        lat: 0,
        lng: 0,
      },
    },
    leaders: [],
  };
  continents: string[] = ['Afrique', 'Asie', 'Amériques', 'Europe', 'Océanie'];
  mapLoaded: Observable<boolean>;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private countryService: CountryService
  ) {
    this.mapLoaded = this.http
      .jsonp('https://maps.googleapis.com/maps/api/js', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  ngOnInit(): void {}

  addLanguage(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.country.languages.push(value);
    }

    event.chipInput!.clear();
  }

  removeLanguage(index: number): void {
    if (index >= 0) {
      this.country.languages.splice(index, 1);
    }
  }

  mapClick(event: google.maps.MapMouseEvent): void {
    if (event.latLng) {
      this.country.capital.coords = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
    }
  }

  insertCountry(): void {
    this.countryService.insertCountrie(this.country).subscribe((result) => {
      this.router.navigate(['home']);
    });
  }
}

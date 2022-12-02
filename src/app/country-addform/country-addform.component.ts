import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { allowedValues } from '../validators/customValidators';

@Component({
  selector: 'app-country-addform',
  templateUrl: './country-addform.component.html',
  styleUrls: ['./country-addform.component.css'],
})
export class CountryAddformComponent {
  continents: string[] = ['Afrique', 'Asie', 'Amériques', 'Europe', 'Océanie'];
  mapLoaded: Observable<boolean>;

  // Groupe de formulaire pour le pays
  countryFormGroup = this.formBuilder.group({
    name: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100),
        Validators.pattern(/^[A-Z]{1}[^\d\r\n]+$/),
      ])
    ),
    code: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(/^[A-Z]{3}$/),
      ])
    ),
    continent: new FormControl(
      '',
      Validators.compose([Validators.required, allowedValues(this.continents)])
    ),
    area: new FormControl(
      1,
      Validators.compose([Validators.required, Validators.min(1)])
    ),
    languages: new FormControl(
      new Array<string>(),
      Validators.compose([Validators.required, Validators.minLength(1)])
    ),
    isNato: new FormControl(false, Validators.required),
  });

  // Groupe de formulaire pour la capitale
  capitalFormGroup = this.formBuilder.group({
    name: new FormControl('', Validators.required),
  });

  coords: { lat: number; lng: number } = { lat: 0, lng: 0 };

  country: Country = {
    name: '', // done
    code: '', // done
    continent: '', // done
    area: 0, // done
    languages: [], // done
    isNato: false, // done
    capital: {
      name: '',
      coords: {
        lat: 0,
        lng: 0,
      },
    },
    leaders: [],
  };

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

  get languages() {
    return this.countryFormGroup.controls.languages.value;
  }

  addLanguage(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.languages?.push(value);
    }

    event.chipInput!.clear();
  }

  removeLanguage(index: number): void {
    if (index >= 0) {
      this.languages?.splice(index, 1);
    }
  }

  mapClick(event: google.maps.MapMouseEvent): void {
    if (event.latLng) {
      this.coords = {
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

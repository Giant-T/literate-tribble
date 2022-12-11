import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/services/country.service';
import { allowedValues } from 'src/app/validators/allowedValues';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css'],
})
export class CountryFormComponent {
  @Input() title: string = '';
  @Input() country: Country = {
    name: '',
    code: '',
    continent: '',
    area: 1,
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

  @Output() onSubmit: EventEmitter<Country> = new EventEmitter();

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

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    // Pour verifier que le javascript pour google map est chargé
    this.mapLoaded = this.http
      .jsonp('https://maps.googleapis.com/maps/api/js', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  ngOnInit(): void {}

  submit(): void {
    if (!this.countryFormGroup.valid || !this.capitalFormGroup.valid) return;

    this.onSubmit.emit(this.country);
  }

  addLanguage(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.languages?.push(value);
      this.country.languages = this.languages!;
    }

    event.chipInput!.clear();
  }

  removeLanguage(index: number): void {
    if (index >= 0) {
      this.languages?.splice(index, 1);
      this.country.languages = this.languages!;
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

  get languages() {
    return this.countryFormGroup.controls.languages.value;
  }
}

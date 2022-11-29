import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-addform',
  templateUrl: './country-addform.component.html',
  styleUrls: ['./country-addform.component.css'],
})
export class CountryAddformComponent {
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

  constructor(private router: Router, private countryService: CountryService) {}

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

  insertCountry(): void {
    this.countryService.insertCountrie(this.country).subscribe((result) => {
      this.router.navigate(['home']);
    });
  }
}

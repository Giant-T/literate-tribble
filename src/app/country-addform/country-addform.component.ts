import { Component } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-addform',
  templateUrl: './country-addform.component.html',
  styleUrls: ['./country-addform.component.css'],
})
export class CountryAddformComponent {
  private country: Country = {
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

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  insertCountry(): void {
  }
}

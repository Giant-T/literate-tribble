import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Continents } from 'src/app/models/continent';
import { Country } from '../../models/country';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css'],
})
export class CountryInfoComponent {
  @Input() country: Country = {
    name: '',
    code: '',
    continent: Continents.Afrique,
    area: 0,
    languages: [],
    isNato: false,
    capital: {
      name: '',
      coords: {
        lat: 0,
        lng: 0,
      },
      link: undefined,
    },
    leaders: [],
  };

  @Output() onDelete: EventEmitter<string> = new EventEmitter();

  delete() {
    this.onDelete.emit(this.country.id);
  }
}

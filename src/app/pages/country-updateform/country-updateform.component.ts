import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Continent } from 'src/app/models/continent';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country-updateform',
  templateUrl: './country-updateform.component.html',
  styleUrls: ['./country-updateform.component.css'],
})
export class CountryUpdateformComponent {
  country: Country = {
    name: '',
    code: '',
    continent: Continent.Afrique,
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

  constructor(
    private router: Router,
    private countryService: CountryService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCountryInformation();
  }

  getCountryInformation(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');

    if (id) {
      this.countryService
        .getCountriesById(id.toString())
        .subscribe((result) => (this.country = result));
    }
  }

  updateCountry(country: Country): void {
    this.countryService.updateCountry(country).subscribe((result) => {
      if (result.hasWorked) {
        this.router.navigate(['home']);
      }
    });
  }
}

import { Component } from '@angular/core';
import { CountriesPerContinent } from 'src/app/models/countries-per-continent';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent {
  countriesPerContinent: CountriesPerContinent[] = [];

  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    this.getCountriesPerContinent();
  }

  getCountriesPerContinent(): void {
    this.statsService
      .getCountriesPerContinent()
      .subscribe((result) => (this.countriesPerContinent = result));
  }
}

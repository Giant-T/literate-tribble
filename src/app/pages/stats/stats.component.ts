import { Component } from '@angular/core';
import { Stats } from '../../models/stats';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent {
  countriesPerContinent: Stats[] = [];
  countriesPerLanguages: Stats[] = [];

  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    this.getCountriesPerContinent();
    this.getNumberOfCountriesPerNumberOfLanguages();
  }

  getCountriesPerContinent(): void {
    this.statsService
      .getCountriesPerContinent()
      .subscribe((result) => (this.countriesPerContinent = result));
  }

  getNumberOfCountriesPerNumberOfLanguages(): void {
    this.statsService
      .getNumberOfCountriesPerNumberOfLanguages()
      .subscribe((result) => (this.countriesPerLanguages = result));
  }
}

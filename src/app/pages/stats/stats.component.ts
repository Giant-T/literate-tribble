import { Component } from '@angular/core';
import { Stats } from '../../models/stats';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
  host: {
    '(window:resize)': 'onResize($event)',
  },
})
export class StatsComponent {
  countriesPerContinent: Stats[] = [];
  countriesPerLanguages: Stats[] = [];

  view: [number, number] = [
    window.innerWidth * 0.75,
    window.innerHeight * 0.25,
  ];

  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    this.getCountriesPerContinent();
    this.getNumberOfCountriesPerNumberOfLanguages();
    window.resizeBy(0, 0);
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

  // Any seulement car je ne trouve pas le type de l'evenement 😢
  onResize(event: any) {
    this.view = [
      event.target.innerWidth * 0.75,
      event.target.innerHeigth * 0.25,
    ];
  }
}

import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Continent } from 'src/app/models/continent';
import { Country } from '../../models/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent {
  searchTerm: string = '';
  filteredList: Country[] = [];
  countries: Country[] = [];

  // filtres
  continent?: Continent;
  firstLetter?: string;

  // Variable pour le paginator
  pageSize: number = 10;
  pageIndex: number = 0;
  pageSizeOptions: number[] = [5, 10, 20];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService
      .getCountries(this.continent, this.firstLetter)
      .subscribe((result) => {
        this.countries = result;
        this.getFilteredList();
      });
  }

  // basé sur: https://plainenglish.io/blog/create-an-array-of-alphabet-characters-in-javascript-with-this-simple-trick
  getAlphabet(): string[] {
    let array = Array.from(Array(26)).map((x, i) => i + 65);
    const alphabet = array.map((x) => String.fromCharCode(x));
    return alphabet;
  }

  handlePageEvent(e: PageEvent): void {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  getFilteredList(): void {
    this.filteredList = this.countries.filter((c) =>
      c.name.toUpperCase().match(this.searchTerm.toUpperCase())
    );
  }

  delete(id: string): void {
    this.countryService.deleteCountry(id).subscribe((result) => {
      if (result.hasWorked) {
        const index: number = this.countries.findIndex((c) => c.id == id);
        this.countries.splice(index, 1);
        this.getFilteredList();
      }
    });
  }
}

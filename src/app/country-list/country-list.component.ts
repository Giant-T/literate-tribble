import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent {
  searchTerm: string = '';
  filteredList: Country[] = [];
  countries: Country[] = [];

  // Variable pour le paginator
  pageSize: number = 10;
  pageIndex: number = 0;
  pageSizeOptions: number[] = [5, 10, 20];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getCountries().subscribe((result) => {
      this.countries = result;
      this.getFilteredList();
    });
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
}

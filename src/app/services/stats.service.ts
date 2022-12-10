import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountriesPerContinent } from '../models/countries-per-continent';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  private apiUrl: string = 'https://localhost:7033/api/stats';

  constructor(private http: HttpClient) {}

  getCountriesPerContinent(): Observable<CountriesPerContinent[]> {
    return this.http.get<CountriesPerContinent[]>(
      `${this.apiUrl}/CountriesPerContinent`
    );
  }
}

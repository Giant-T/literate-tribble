import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://localhost:7033/api/countries';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl);
  }

  insertCountry(country: Country): Observable<{ id: number }> {
    return this.http.post<{ id: number }>(this.apiUrl, country);
  }
}

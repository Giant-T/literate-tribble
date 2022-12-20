import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getBaseUrl } from '../config/baseUrl';
import { Continent } from '../models/continent';
import { Country } from '../models/country';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = getBaseUrl() + 'countries';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getCountries(
    continent?: Continent,
    startingLetter?: string
  ): Observable<Country[]> {
    let url: string = this.apiUrl;

    if (continent || startingLetter) {
      let params: string[] = [];
      if (continent) {
        params.push(`continent=${continent}`);
      }
      if (startingLetter) {
        params.push(`startingLetter=${startingLetter}`);
      }

      url += `?${params.join('&')}`;
    }

    return this.http.get<Country[]>(url);
  }

  getCountriesById(id: string): Observable<Country> {
    return this.http.get<Country>(`${this.apiUrl}/${id}`);
  }

  insertCountry(country: Country): Observable<{ id: number }> {
    return this.http.post<{ id: number }>(this.apiUrl, country, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.authService.getToken()}`,
      }),
    });
  }

  updateCountry(country: Country): Observable<{ hasWorked: boolean }> {
    return this.http.put<{ hasWorked: boolean }>(
      `${this.apiUrl}/${country.id}`,
      country,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.authService.getToken()}`,
        }),
      }
    );
  }

  deleteCountry(id: string): Observable<{ hasWorked: boolean }> {
    return this.http.delete<{ hasWorked: boolean }>(`${this.apiUrl}/${id}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.authService.getToken()}`,
      }),
    });
  }
}

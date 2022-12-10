import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stats } from '../models/stats';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  private apiUrl: string = 'https://localhost:7033/api/stats';

  constructor(private http: HttpClient) {}

  getCountriesPerContinent(): Observable<Stats[]> {
    return this.http.get<Stats[]>(`${this.apiUrl}/CountriesPerContinent`);
  }

  getNumberOfCountriesPerNumberOfLanguages(): Observable<Stats[]> {
    return this.http.get<Stats[]>(`${this.apiUrl}/CountriesPerLanguages`);
  }
}

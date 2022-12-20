import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getBaseUrl } from '../config/baseUrl';
import { Leader } from '../models/leader';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class LeaderService {
  private apiUrl: string = getBaseUrl() + 'Leaders';

  constructor(private http: HttpClient, private authService: AuthService) {}

  insertLeader(leader: Leader): Observable<{}> {
    return this.http.post(this.apiUrl, leader, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.authService.getToken()}`,
      }),
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../../models/country';
import { CountryService } from '../../services/country.service';
import { allowedValues } from '../../validators/allowedValues';

@Component({
  selector: 'app-country-addform',
  templateUrl: './country-addform.component.html',
  styleUrls: ['./country-addform.component.css'],
})
export class CountryAddformComponent {
  constructor(private router: Router, private countryService: CountryService) {}

  ngOnInit(): void {}

  insertCountry(country: Country): void {
    this.countryService.insertCountry(country).subscribe((result) => {
      this.router.navigate(['home']);
    });
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryAddformComponent } from './country-addform.component';

describe('CountryAddformComponent', () => {
  let component: CountryAddformComponent;
  let fixture: ComponentFixture<CountryAddformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryAddformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryAddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

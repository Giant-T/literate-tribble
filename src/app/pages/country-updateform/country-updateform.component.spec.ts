import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryUpdateformComponent } from './country-updateform.component';

describe('CountryUpdateformComponent', () => {
  let component: CountryUpdateformComponent;
  let fixture: ComponentFixture<CountryUpdateformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryUpdateformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryUpdateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

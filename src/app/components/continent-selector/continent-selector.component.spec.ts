import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentSelectorComponent } from './continent-selector.component';

describe('ContinentSelectorComponent', () => {
  let component: ContinentSelectorComponent;
  let fixture: ComponentFixture<ContinentSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinentSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinentSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

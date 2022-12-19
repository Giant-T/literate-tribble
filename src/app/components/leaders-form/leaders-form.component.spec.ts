import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadersFormComponent } from './leaders-form.component';

describe('LeadersFormComponent', () => {
  let component: LeadersFormComponent;
  let fixture: ComponentFixture<LeadersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadersFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

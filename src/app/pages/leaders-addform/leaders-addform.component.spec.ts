import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadersAddformComponent } from './leaders-addform.component';

describe('LeadersAddformComponent', () => {
  let component: LeadersAddformComponent;
  let fixture: ComponentFixture<LeadersAddformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadersAddformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadersAddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

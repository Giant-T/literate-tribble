import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedDisplayComponent } from './authorized-display.component';

describe('AuthorizedDisplayComponent', () => {
  let component: AuthorizedDisplayComponent;
  let fixture: ComponentFixture<AuthorizedDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizedDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizedDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

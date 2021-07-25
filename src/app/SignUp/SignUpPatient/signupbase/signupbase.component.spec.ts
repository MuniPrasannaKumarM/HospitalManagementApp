import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupbaseComponent } from './signupbase.component';

describe('SignupbaseComponent', () => {
  let component: SignupbaseComponent;
  let fixture: ComponentFixture<SignupbaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupbaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

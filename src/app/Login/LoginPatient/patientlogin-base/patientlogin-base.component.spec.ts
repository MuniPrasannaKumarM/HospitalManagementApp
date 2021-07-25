import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientloginBaseComponent } from './patientlogin-base.component';

describe('PatientloginBaseComponent', () => {
  let component: PatientloginBaseComponent;
  let fixture: ComponentFixture<PatientloginBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientloginBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientloginBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

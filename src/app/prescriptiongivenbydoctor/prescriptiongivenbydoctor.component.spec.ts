import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptiongivenbydoctorComponent } from './prescriptiongivenbydoctor.component';

describe('PrescriptiongivenbydoctorComponent', () => {
  let component: PrescriptiongivenbydoctorComponent;
  let fixture: ComponentFixture<PrescriptiongivenbydoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptiongivenbydoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptiongivenbydoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

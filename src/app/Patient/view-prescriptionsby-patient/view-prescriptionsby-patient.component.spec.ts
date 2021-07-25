import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPrescriptionsbyPatientComponent } from './view-prescriptionsby-patient.component';

describe('ViewPrescriptionsbyPatientComponent', () => {
  let component: ViewPrescriptionsbyPatientComponent;
  let fixture: ComponentFixture<ViewPrescriptionsbyPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPrescriptionsbyPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPrescriptionsbyPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

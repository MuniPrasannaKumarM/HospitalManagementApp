import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewappointmentsbydoctorComponent } from './viewappointmentsbydoctor.component';

describe('ViewappointmentsbydoctorComponent', () => {
  let component: ViewappointmentsbydoctorComponent;
  let fixture: ComponentFixture<ViewappointmentsbydoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewappointmentsbydoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewappointmentsbydoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

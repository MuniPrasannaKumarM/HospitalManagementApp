import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentloginformComponent } from './appointmentloginform.component';

describe('AppointmentloginformComponent', () => {
  let component: AppointmentloginformComponent;
  let fixture: ComponentFixture<AppointmentloginformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentloginformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentloginformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprescriptionbydoctorComponent } from './viewprescriptionbydoctor.component';

describe('ViewprescriptionbydoctorComponent', () => {
  let component: ViewprescriptionbydoctorComponent;
  let fixture: ComponentFixture<ViewprescriptionbydoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewprescriptionbydoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprescriptionbydoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

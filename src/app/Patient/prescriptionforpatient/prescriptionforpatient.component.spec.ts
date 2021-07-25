import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionforpatientComponent } from './prescriptionforpatient.component';

describe('PrescriptionforpatientComponent', () => {
  let component: PrescriptionforpatientComponent;
  let fixture: ComponentFixture<PrescriptionforpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionforpatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionforpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

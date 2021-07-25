import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindoctorBaseComponent } from './logindoctor-base.component';

describe('LogindoctorBaseComponent', () => {
  let component: LogindoctorBaseComponent;
  let fixture: ComponentFixture<LogindoctorBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogindoctorBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogindoctorBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

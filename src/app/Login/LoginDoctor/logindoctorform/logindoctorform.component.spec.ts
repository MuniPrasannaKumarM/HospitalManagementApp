import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindoctorformComponent } from './logindoctorform.component';

describe('LogindoctorformComponent', () => {
  let component: LogindoctorformComponent;
  let fixture: ComponentFixture<LogindoctorformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogindoctorformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogindoctorformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

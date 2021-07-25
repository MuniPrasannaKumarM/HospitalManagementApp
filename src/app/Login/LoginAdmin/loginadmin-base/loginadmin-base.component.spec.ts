import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginadminBaseComponent } from './loginadmin-base.component';

describe('LoginadminBaseComponent', () => {
  let component: LoginadminBaseComponent;
  let fixture: ComponentFixture<LoginadminBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginadminBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginadminBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

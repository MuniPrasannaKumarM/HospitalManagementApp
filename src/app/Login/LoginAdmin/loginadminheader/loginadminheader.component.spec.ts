import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginadminheaderComponent } from './loginadminheader.component';

describe('LoginadminheaderComponent', () => {
  let component: LoginadminheaderComponent;
  let fixture: ComponentFixture<LoginadminheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginadminheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginadminheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

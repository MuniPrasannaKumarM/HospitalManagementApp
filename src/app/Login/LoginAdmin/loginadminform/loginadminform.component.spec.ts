import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginadminformComponent } from './loginadminform.component';

describe('LoginadminformComponent', () => {
  let component: LoginadminformComponent;
  let fixture: ComponentFixture<LoginadminformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginadminformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginadminformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

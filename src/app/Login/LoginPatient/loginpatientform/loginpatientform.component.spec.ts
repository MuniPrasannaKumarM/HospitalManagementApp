import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpatientformComponent } from './loginpatientform.component';

describe('LoginpatientformComponent', () => {
  let component: LoginpatientformComponent;
  let fixture: ComponentFixture<LoginpatientformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpatientformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginpatientformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

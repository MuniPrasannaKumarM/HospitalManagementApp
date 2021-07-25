import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppbookformComponent } from './appbookform.component';

describe('AppbookformComponent', () => {
  let component: AppbookformComponent;
  let fixture: ComponentFixture<AppbookformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppbookformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppbookformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

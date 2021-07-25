import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewappbypatientComponent } from './viewappbypatient.component';

describe('ViewappbypatientComponent', () => {
  let component: ViewappbypatientComponent;
  let fixture: ComponentFixture<ViewappbypatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewappbypatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewappbypatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

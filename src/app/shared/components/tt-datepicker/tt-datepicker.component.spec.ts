import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtDatepickerComponent } from './tt-datepicker.component';

describe('TtDatepickerComponent', () => {
  let component: TtDatepickerComponent;
  let fixture: ComponentFixture<TtDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TtDatepickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TtDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtButtonComponent } from './tt-button.component';

describe('TtButtonComponent', () => {
  let component: TtButtonComponent;
  let fixture: ComponentFixture<TtButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TtButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TtButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

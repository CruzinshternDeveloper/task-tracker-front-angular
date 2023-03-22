import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtMenuComponent } from './tt-menu.component';

describe('TtMenuComponent', () => {
  let component: TtMenuComponent;
  let fixture: ComponentFixture<TtMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TtMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TtMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

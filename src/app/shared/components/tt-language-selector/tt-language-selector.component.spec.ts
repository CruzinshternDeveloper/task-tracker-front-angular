import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtLanguageSelectorComponent } from './tt-language-selector.component';

describe('TtLanguageSelectorComponent', () => {
  let component: TtLanguageSelectorComponent;
  let fixture: ComponentFixture<TtLanguageSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TtLanguageSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TtLanguageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

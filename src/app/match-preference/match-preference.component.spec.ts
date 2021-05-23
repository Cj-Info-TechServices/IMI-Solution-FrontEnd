import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchPreferenceComponent } from './match-preference.component';

describe('MatchPreferenceComponent', () => {
  let component: MatchPreferenceComponent;
  let fixture: ComponentFixture<MatchPreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchPreferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

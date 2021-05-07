import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorNavMenuComponent } from './investor-nav-menu.component';

describe('InvestorNavMenuComponent', () => {
  let component: InvestorNavMenuComponent;
  let fixture: ComponentFixture<InvestorNavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorNavMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

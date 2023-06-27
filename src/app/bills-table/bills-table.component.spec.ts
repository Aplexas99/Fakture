import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsTableComponent } from './bills-table.component';

describe('BillsTableComponent', () => {
  let component: BillsTableComponent;
  let fixture: ComponentFixture<BillsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillsTableComponent]
    });
    fixture = TestBed.createComponent(BillsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

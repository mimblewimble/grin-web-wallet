import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxDetailDisplayComponent } from './tx-detail-display.component';

describe('TxDetailDisplayComponent', () => {
  let component: TxDetailDisplayComponent;
  let fixture: ComponentFixture<TxDetailDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxDetailDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxDetailDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

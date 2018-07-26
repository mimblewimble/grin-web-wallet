import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxDetailComponent } from './tx-detail.component';

describe('TxDetailDisplayComponent', () => {
  let component: TxDetailComponent;
  let fixture: ComponentFixture<TxDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

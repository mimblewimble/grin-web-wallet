import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxListAllComponent } from './tx-list-all.component';

describe('TxListAllComponent', () => {
  let component: TxListAllComponent;
  let fixture: ComponentFixture<TxListAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxListAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

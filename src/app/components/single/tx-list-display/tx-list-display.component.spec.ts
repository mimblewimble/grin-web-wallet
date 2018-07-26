import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxListDisplayComponent } from './tx-list-display.component';

describe('TxListDisplayComponent', () => {
  let component: TxListDisplayComponent;
  let fixture: ComponentFixture<TxListDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxListDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

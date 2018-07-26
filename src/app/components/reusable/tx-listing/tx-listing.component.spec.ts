import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxListingComponent } from './tx-listing.component';

describe('TxListingComponent', () => {
  let component: TxListingComponent;
  let fixture: ComponentFixture<TxListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

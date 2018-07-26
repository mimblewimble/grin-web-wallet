import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletInfoDetailComponent } from './wallet-info-detail.component';

describe('WalletInfoDetailComponent', () => {
  let component: WalletInfoDetailComponent;
  let fixture: ComponentFixture<WalletInfoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletInfoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletInfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletInfoComponent } from './wallet-info.component';

describe('WalletInfoComponent', () => {
  let component: WalletInfoComponent;
  let fixture: ComponentFixture<WalletInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

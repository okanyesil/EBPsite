import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YeniKitapComponent } from './yeni-kitap.component';

describe('YeniKitapComponent', () => {
  let component: YeniKitapComponent;
  let fixture: ComponentFixture<YeniKitapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YeniKitapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YeniKitapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

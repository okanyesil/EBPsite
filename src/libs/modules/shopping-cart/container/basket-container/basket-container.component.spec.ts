import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketContainerComponent } from './basket-container.component';

describe('BasketContainerComponent', () => {
  let component: BasketContainerComponent;
  let fixture: ComponentFixture<BasketContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

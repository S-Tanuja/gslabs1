import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemdetailovComponent } from './itemdetailov.component';

describe('ItemdetailovComponent', () => {
  let component: ItemdetailovComponent;
  let fixture: ComponentFixture<ItemdetailovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemdetailovComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemdetailovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

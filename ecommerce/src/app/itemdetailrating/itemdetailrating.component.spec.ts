import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemdetailratingComponent } from './itemdetailrating.component';

describe('ItemdetailratingComponent', () => {
  let component: ItemdetailratingComponent;
  let fixture: ComponentFixture<ItemdetailratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemdetailratingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemdetailratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

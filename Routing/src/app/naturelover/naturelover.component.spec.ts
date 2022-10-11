import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureloverComponent } from './naturelover.component';

describe('NatureloverComponent', () => {
  let component: NatureloverComponent;
  let fixture: ComponentFixture<NatureloverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatureloverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NatureloverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

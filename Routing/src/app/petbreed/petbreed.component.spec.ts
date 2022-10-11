import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetbreedComponent } from './petbreed.component';

describe('PetbreedComponent', () => {
  let component: PetbreedComponent;
  let fixture: ComponentFixture<PetbreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetbreedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetbreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

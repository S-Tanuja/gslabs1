import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetloverovComponent } from './petloverov.component';

describe('PetloverovComponent', () => {
  let component: PetloverovComponent;
  let fixture: ComponentFixture<PetloverovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetloverovComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetloverovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

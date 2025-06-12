import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ar } from './ar';

describe('Ar', () => {
  let component: Ar;
  let fixture: ComponentFixture<Ar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

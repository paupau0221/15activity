import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopspecificationsComponent } from './laptopspecifications.component';

describe('LaptopspecificationsComponent', () => {
  let component: LaptopspecificationsComponent;
  let fixture: ComponentFixture<LaptopspecificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopspecificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopspecificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

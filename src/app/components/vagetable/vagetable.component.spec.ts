import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagetableComponent } from './vagetable.component';

describe('VagetableComponent', () => {
  let component: VagetableComponent;
  let fixture: ComponentFixture<VagetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VagetableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VagetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

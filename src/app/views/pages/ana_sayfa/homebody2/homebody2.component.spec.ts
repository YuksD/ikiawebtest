import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homebody2Component } from './homebody2.component';

describe('Homebody2Component', () => {
  let component: Homebody2Component;
  let fixture: ComponentFixture<Homebody2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homebody2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Homebody2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

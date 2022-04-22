import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2LMainComponent } from './l2-lmain.component';

describe('L2LMainComponent', () => {
  let component: L2LMainComponent;
  let fixture: ComponentFixture<L2LMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L2LMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L2LMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignNewTrackingComponent } from './assign-new-tracking.component';

describe('AssignNewTrackingComponent', () => {
  let component: AssignNewTrackingComponent;
  let fixture: ComponentFixture<AssignNewTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignNewTrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignNewTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

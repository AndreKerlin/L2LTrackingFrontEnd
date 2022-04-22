import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExistingTrackingComponent } from './edit-existing-tracking.component';

describe('EditExistingTrackingComponent', () => {
  let component: EditExistingTrackingComponent;
  let fixture: ComponentFixture<EditExistingTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExistingTrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExistingTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPreviousTrackingComponent } from './search-previous-tracking.component';

describe('SearchPreviousTrackingComponent', () => {
  let component: SearchPreviousTrackingComponent;
  let fixture: ComponentFixture<SearchPreviousTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPreviousTrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPreviousTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

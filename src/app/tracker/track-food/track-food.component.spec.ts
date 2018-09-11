import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackFoodComponent } from './track-food.component';

describe('TrackFoodComponent', () => {
  let component: TrackFoodComponent;
  let fixture: ComponentFixture<TrackFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

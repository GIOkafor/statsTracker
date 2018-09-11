import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackSessionComponent } from './track-session.component';

describe('TrackSessionComponent', () => {
  let component: TrackSessionComponent;
  let fixture: ComponentFixture<TrackSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroSprintComponent } from './retro-sprint.component';

describe('RetroSprintComponent', () => {
  let component: RetroSprintComponent;
  let fixture: ComponentFixture<RetroSprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetroSprintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

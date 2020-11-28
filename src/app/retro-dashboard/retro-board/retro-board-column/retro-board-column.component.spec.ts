import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroBoardColumnComponent } from './retro-board-column.component';

describe('RetroBoardColumnComponent', () => {
  let component: RetroBoardColumnComponent;
  let fixture: ComponentFixture<RetroBoardColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetroBoardColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroBoardColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

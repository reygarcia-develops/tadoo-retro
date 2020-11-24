import { Component, Input, OnInit } from '@angular/core';
import { Board, BoardColumn } from '../retro-dashboard.models';

@Component({
  selector: 'app-retro-sprint',
  templateUrl: './retro-sprint.component.html',
  styleUrls: ['./retro-sprint.component.scss']
})
export class RetroSprintComponent implements OnInit {
  @Input()
  boards: Board[];

  view: any[] = [100, 200];

  // options
  showXAxis = false;
  showYAxis = false;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Column Name';
  showYAxisLabel = false;
  yAxisLabel = 'Card Count';

  colorScheme = {
    domain: [
      '#e5fdf7',
      '#a1faf7',
      '#46f8f6',
      '#f4e0fb',
      '#ddb1fb',
      '#c284fb',
      '#fee09d',
      '#fcb19b',
      '#fa8494'
    ]
  };

  constructor() { }

  ngOnInit(): void {

  }
}
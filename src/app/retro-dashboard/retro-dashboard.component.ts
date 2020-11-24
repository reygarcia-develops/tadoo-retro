import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { TeamBoard, TEAM_BOARDS } from './retro-dashboard.models';

@Component({
  selector: 'app-retro-dashboard',
  templateUrl: './retro-dashboard.component.html',
  styleUrls: ['./retro-dashboard.component.scss']
})

export class RetroDashboardComponent implements OnInit {
  @ViewChild(MatAccordion) 
  accordian: MatAccordion;

  teamBoards: TeamBoard[] = [];
  constructor() { }

  ngOnInit(): void {
    this.teamBoards = TEAM_BOARDS;
    this.setBarChartData();
  }
  //TODO THIS SHOULD BE SET IN THE FRONT END ON THIS OBJECT
  setBarChartData() {
    this.teamBoards.forEach(teamBoard => {
      teamBoard.boards.forEach(board => {
        board.columns.forEach(column => {
          board.chartData.push({ "name": column.name, "value": column.cards.length })
          board.cardCount += column.cards.length;
        })
      })
    })
  }
}
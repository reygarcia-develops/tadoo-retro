import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NgxChartsModule } from '@swimlane/ngx-charts';


import { RetroDashboardComponent } from './retro-dashboard.component';
import { RetroSprintComponent } from './retro-sprint/retro-sprint.component';
import { RetroBoardComponent } from './retro-board/retro-board.component';
import { RetroBoardColumnComponent } from './retro-board/retro-board-column/retro-board-column.component';

@NgModule({
  declarations: [
    RetroDashboardComponent,
    RetroSprintComponent,
    RetroBoardComponent,
    RetroBoardColumnComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    NgxChartsModule
  ],
  exports: [RetroDashboardComponent]
})
export class RetroDashboardModule { }

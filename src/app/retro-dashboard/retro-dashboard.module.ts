import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { RetroDashboardComponent } from './retro-dashboard.component';
import { RetroSprintComponent } from './retro-sprint/retro-sprint.component';

@NgModule({
  declarations: [
    RetroDashboardComponent,
    RetroSprintComponent
  ],
  imports: [
    CommonModule,
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

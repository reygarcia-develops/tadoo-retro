import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetroBoardComponent } from './retro-dashboard/retro-board/retro-board.component';
import { RetroDashboardComponent } from './retro-dashboard/retro-dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: RetroDashboardComponent },
  { path: 'boards/:boardId', component: RetroBoardComponent },
  { path: '**', component: RetroDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

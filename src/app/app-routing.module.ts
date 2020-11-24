import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetroDashboardModule } from './retro-dashboard/retro-dashboard.module';

const routes: Routes = [  
  { path: 'dashboard', component: RetroDashboardModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

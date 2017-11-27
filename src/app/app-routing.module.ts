import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'error404',
    loadChildren: 'app/pages/error404/error404.module#Error404Module'
  },
  { path: '**', redirectTo: 'error404' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true, enableTracing: false }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
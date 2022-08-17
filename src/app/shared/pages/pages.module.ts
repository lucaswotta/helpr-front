import { NgModule } from '@angular/core';
import { DashboardModule } from '../../components/dashboard/dashboard.module';
import { HomeModule } from '../../components/home/home.module';

@NgModule({
  exports: [
    HomeModule,
    DashboardModule
  ]
})
export class PagesModule { }

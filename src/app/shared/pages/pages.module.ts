import { NgModule } from '@angular/core';
import { HomeModule } from '../../components/home/home.module';
import { LoginModule } from '../../components/login/login.module';
import { TecnicosModule } from '../../components/tecnicos/tecnicos.module';

@NgModule({
  exports: [
    HomeModule,
    LoginModule,
    TecnicosModule
  ]
})
export class PagesModule { }

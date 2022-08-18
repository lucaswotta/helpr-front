import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    loadChildren: () => {
      return import('./components/home/home.module').then(m => m.HomeModule);
    }
  },
  {
    path: 'login',
    loadChildren: () => {
      return import('./components/login/login.module').then(m => m.LoginModule)
    }
  },
  {
    path: 'tecnicos',
    loadChildren: () => {
      return import('./components/tecnicos/tecnicos.module').then(m => m.TecnicosModule)
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

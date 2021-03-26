import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./sawmill-calculator/sawmill-calculator.module').then(m => m.SawmillCalculatorModule)
    },
    {
      path: '**',
      loadChildren: () => import('./sawmill-calculator/sawmill-calculator.module').then(m => m.SawmillCalculatorModule)
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

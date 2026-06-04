import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Temas } from './temas/temas';

const routes: Routes = [
  { path: '', component: Temas },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

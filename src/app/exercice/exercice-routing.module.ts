import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciceComponent } from './exercice.component';
import { Exo1Component } from './exo1/exo1.component';

const routes: Routes = [
  {path : '', component : ExerciceComponent, children: [
    {path: 'exo1', component : Exo1Component}
  ]} //import grâce au raccourci ctrl ;
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }

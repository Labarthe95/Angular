import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceComponent } from './exercice.component';
import { Exo1Component } from './exo1/exo1.component';
import { SharedModule } from '../shared/shared.module';
import { Exo2Component } from './exo2/exo2.component';
import { ListeComponent } from './exo2/liste/liste.component';


@NgModule({
  declarations: [
    ExerciceComponent,
    Exo1Component,
    Exo2Component,
    ListeComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule, 
    SharedModule
  ],
  bootstrap : [ExerciceComponent]
})
export class ExerciceModule { }

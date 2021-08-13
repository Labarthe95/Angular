import { Component } from '@angular/core';
import { Link } from './shared/model/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Projet test';

  listeLien : Link[] = [
    {title : 'Demos' , children : [
      {url : 'demo/demo1', title : 'Demo 1 - Bindings'},
      {url : 'demo/demo2', title : 'Demo 2 - Pipes'},
      {url : 'demo/demo3', title : 'Demo 3 - Directives'},
      {url : 'demo/demo4', title : 'Demo 4 - Input/Output'},
    ]},
    {title : 'Exercices', children : [
      {url : 'exercice/exo1', title : 'Chronomètre'},
    ]}
  ]
}

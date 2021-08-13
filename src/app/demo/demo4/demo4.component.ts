import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit {

  //Output
  messageDuChildren : string = ""

  //Input
  texte : string = "Des infos pour l'enfant"

  constructor() { }

  ngOnInit(): void {
  }
  //Output Récupère le param de l'event (réponse du children) dans prop chez le parent
  reponseDuChildren(s: string) {
    this.messageDuChildren = s
  }
}

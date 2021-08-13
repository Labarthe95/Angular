import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent implements OnInit {
  //Input: enfant reçoit info du parent --> créer propriétés vide avec input 
  @Input() title : string = ""
  @Input() contenu : string = ""

  //Output: Création d'un nouvel event
  monTexte: string = ""
  @Output() monEvent : EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  //Output Méthode qui fait en sorte d'afficher le texte qui sera mis dans ma propriété
    maMethode() {
    this.monEvent.emit(this.monTexte)
  }
}

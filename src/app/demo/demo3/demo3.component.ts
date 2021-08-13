import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {
  //NgStyle
  currentStyle : any;

  test : boolean = true

  italic : boolean = false;
  bold : boolean = false;
  size : boolean = false;

  //NgClass
  class : boolean = false;

  //NgIf
  isToggled : boolean = false;

  //NgFor
  liste : string[] = ["Pokemon", "Final fantasy", "Street Fighter", "Kingdom Hearts", "Duke Nukem 3D"]
  constructor() { }

  //NgSwitch
  maProp : string = ""


  ngOnInit(): void {
    //NgStyle, donne le style de base quand j'ouvre ma page
    this.setCurrentStyle()
  }
  //NgStyle
  setCurrentStyle() {
    this.currentStyle= {
      'font-style' : this.italic ? 'italic' : 'normal',
      'font-weight' : this.bold ? 'bold' : 'normal',
      'font-size' : this.size ? '24px' : '12px'
    }
  }

  switchItalic() {
    this.italic = !this.italic
    this.setCurrentStyle()
  }
  switchBold() {
    this.bold = !this.bold
    this.setCurrentStyle()
  }
  switchSize() {
    this.size = !this.size
    this.setCurrentStyle()
  }
  //NgClass
  switchClass() {
    this.class = !this.class
  }

  //NgIf
  Toggled() {
    this.isToggled = !this.isToggled
  }
}

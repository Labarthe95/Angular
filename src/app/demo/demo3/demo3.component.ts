import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  currentStyle : any;

  test : boolean = true

  italic : boolean = false;
  bold : boolean = false;
  size : boolean = false;

  class : boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.setCurrentStyle()
  }
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
  
  switchClass() {
    this.class = !this.class
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {

  maProp : string = "Salut"
  maProp2: number = 0

  constructor() { }

  ngOnInit(): void {
  }
  maMethode(): void {
    this.maProp = "J'ai envie de changer"
  }
  plus(): void {
    this.maProp2++
  }
  moins(): void {
    this.maProp2--
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../shared/model/link.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() listeLien : Link[] = []
  constructor() { }

  ngOnInit(): void {
  }
  toggleVisible(index : number) {
    this.listeLien[index].isChildrenVisible = !this.listeLien[index].isChildrenVisible 
  }
}

import { Component, OnInit } from '@angular/core';
import { Utils } from '../shared/utils/utils';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private utils: Utils
  ) { }

  ngOnInit() {
    this.utils.initJS('./../assets/js/menu.js');
  }

}

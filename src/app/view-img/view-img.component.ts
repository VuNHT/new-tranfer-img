import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Utils } from '../shared/utils/utils';

@Component({
  selector: 'app-view-img',
  templateUrl: './view-img.component.html',
  styleUrls: ['./view-img.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewImgComponent implements OnInit {

  constructor(
    private utils: Utils
  ) { }

  ngOnInit() {
    this.utils.initJS('./../assets/js/periodictable.js');
  }

  public backtoDashboard() {
    if (this.utils.isLocal()) {
      window.location.replace('http://localhost:4200/dasboard');
    } else {
      window.location.replace('https://vunht.github.io/test-console/dasboard');
    }
  }

}

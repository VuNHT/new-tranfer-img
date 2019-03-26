import { Component, OnInit } from '@angular/core';
import { Utils } from '../shared/utils/utils';

@Component({
  selector: 'app-tranfer-car',
  templateUrl: './tranfer-car.component.html',
  styleUrls: ['./tranfer-car.component.scss']
})
export class TranferCarComponent implements OnInit {

  constructor(private utils: Utils) { }

  ngOnInit() {
  }

  public backToDashboard() {
    if (this.utils.isLocal()) {
      window.location.replace('http://localhost:4200/dasboard');
    } else {
      window.location.replace('https://vunht.github.io/new-tranfer-img/dasboard');
    }
  }

}

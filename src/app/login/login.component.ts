import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { jqxKnobComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxknob';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('basicModal')
  public showModalLogin: ModalDirective;
  @ViewChild('badge')
  public badge: any;
  @ViewChild('myKnob') myKnob: jqxKnobComponent;
  public checkKey = true;

  colorKey = [
    'default',
    'primary',
    'success'
  ];

  public count = 1;

  randomValue: any;
  valueBtn: any;
  numberKey: number[] = [];

  marks: any =
  {
    colorRemaining: '#333',
    colorProgress: '#17a25d',
    offset: '75%',
    thickness: 2,
    size: '1%',
    majorSize: '1%',
    majorInterval: 10,
    minorInterval: 5
  };
labels: any =
  {
    offset: '88%',
    step: 20,
    visible: true,
    formatFunction: (label: number): string | number => {
      // tslint:disable-next-line:curly
      if (label === 0)
        return 'Off';
        // tslint:disable-next-line:curly
      if (label === -100)
        return 'Min';
        // tslint:disable-next-line:curly
      if (label === 100)
        return 'Max';
      return label;
    }
  };
progressBar: any =
  {
    size: '70%',
    offset: '0%'
  };
pointer: any =
  {
    type: 'arrow', thickness: 25,
    style: { fill: '#ff6126', stroke: '#333' },
    size: '60%', offset: '50%'
  };
spinner: any = {
  style: { fill: '#17a25d', stroke: '#17a25d' },
  innerRadius: '65%', // specifies the inner Radius of the dial
  outerRadius: '70%', // specifies the outer Radius of the dial
  marks: {
    colorRemaining: '#fff',
    colorProgress: '#fff',
    offset: '68%',
    thickness: 4,
    type: 'circle',
    size: '5%',
    majorSize: '5%',
    majorInterval: 20,
    minorInterval: 20
  }
};
dial: any = {
  style: { fill: '#17a25d', stroke: '#17a25d' },
  innerRadius: '0%', // specifies the inner Radius of the dial
  outerRadius: '50%' // specifies the outer Radius of the dial
};

  constructor(private router: Router) { }

  ngOnInit() {
    this.pushNumber();
  }

  public pushNumber() {
    for (let i = 0; i < 100; i++) {
      this.numberKey.push(i);
    }
  }

  public modalLogin() {
    this.showModalLogin.show();
    this.randomvalue();
  }

  public randomvalue() {
    this.randomValue = Math.floor(Math.random() * this.numberKey.length);
  }

  public validValue () {
    if (this.valueBtn === this.randomValue) {
      this.count ++;
      this.checkKey = true;
      // alert('YOU RIGHT !!');
      this.changeColorKey(this.count);
      this.randomvalue();
      this.valueBtn = null;
      this.myKnob.val(null);
    } else {
      this.checkKey = false;
      // alert('YOU WRONG !!');
    }
  }

  public changeColorKey(count) {
    switch (count) {
      case 2:
      this.badge.success = false;
      this.badge.default = false;
        this.badge.primary = true;
        break;
        case 3:
        this.badge.default = false;
        this.badge.primary = false;
          this.badge.success = true;
          break;
          case 4:
          this.router.navigateByUrl('dasboard');
            break;
      default:
        break;
    }
  }

  onChange(event: any): void {
    this.valueBtn = event.args.value;
}

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  result: string = '';
  num1: number;
  num2: number;
  oporator: string;

  add(number) {
    // console.log(number);
    this.result += number;
  }

  reset() {
    this.result = '';
    this.num1 = 0;
    this.num2 = 0
  }

  plus() {
    this.num1 = +this.result;
    this.oporator = '+';
    this.result = '';
  }

  sub() {
    this.num1 = +this.result;
    this.oporator = '-';
    this.result = '';
  }

  multy() {
    this.num1 = +this.result;
    this.oporator = 'x';
    this.result = '';
  }

  divide() {
    this.num1 = +this.result;
    this.oporator = '/';
    this.result = '';
  }

  solution() {
    this.num2 = +this.result;

    switch (this.oporator) {
      case "+": {
        let num = this.num1 + this.num2;
        this.result = num.toString();
      }
        break;
      case "-": {
        let num = this.num1 - this.num2;
        this.result = num.toString();
      }
        break;
      case "x": {
        let num = this.num1 * this.num2;
        this.result = num.toString();
      }
        break;
        case "/":{
          let num = this.num1 / this.num2;
          this.result = num.toString() ;
        }
          break;
    }
  }
}

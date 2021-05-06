import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.less']
})
export class CalculatorComponent implements OnInit {

  inputNumber: number | string = '';
  title = 'Queation_1';
  selectedFn: string = '';
  result: string = '';
  calFunctions: DataItem[] = [
    {code: '00', text: 'isPrime'},
    {code: '01', text: 'isFibonacci'}
  ]

  constructor() { }

  ngOnInit() {}

  

  inputNumberChange() {
    this.inputNumber = this.inputNumber < 0 ? 1 : Math.round(Number(this.inputNumber));
    console.log('1:', this.inputNumber);
    if (!!this.selectedFn) {
      this.calculateValue();
    }
  }

  calculateValue() {
    console.log('Calculate value:', this.inputNumber, this.selectedFn);
    const valid = !!this.inputNumber && Number(this.inputNumber) >= 0
    if (this.selectedFn === '00' && valid) {
      this.result = this.isPrimeNumber(Number(this.inputNumber));
    } else if (this.selectedFn === '01' && valid) {
      this.result = this.isFibonacci(Number(this.inputNumber));
    }
  }

  isPrimeNumber(input: number): string {
    const end = Math.floor(input/2);
    let count = 0;
    for (let i = 2; i < end; i++) {
      if (input % i === 0) {
        count++;
        break;
      }
    }
    let checkResult = count === 0 && input >= 2 ? true : false;
    return checkResult.toString();
  }

  isFibonacci(input: number): string {
    let checkResult = false;
    let num = 0;
    let step = 1;
    let holdNum = 0;
    if (input === 0 || input === 1) {
      checkResult = true;
    } else {
      for (let i = 2; i < input; i++) {
        holdNum = num + step;
        if (holdNum === input) {
          checkResult = true;
          break;
        }
        num = step;
        step = holdNum;
      }
    }
    return checkResult.toString();
  }

}

export class DataItem {
  code: string | undefined;
  text: string | undefined;
}

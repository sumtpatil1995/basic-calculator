import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  // predefined variables
  currentSign = "+";
  firstValue:any = "";
  secondValue: any = "";
  ans: any = "0";

  constructor() { }

  ngOnInit(): void {
  }


  onUserAction(actionType:string){
    if((this.firstValue == "" || this.firstValue == null) || (this.secondValue == "" || this.secondValue == null )) {
     return  alert('Please enter the values to perform the calculations.');
    }
    this.currentSign= actionType;
    switch(actionType){
      case "+" : {
        return this.ans = this.firstValue + this.secondValue;
      }
      case "-" : {
        return this.ans = this.firstValue - this.secondValue;
      }
      case "x" : {
        console.log(this.firstValue * this.secondValue);
        return this.ans = this.firstValue * this.secondValue;
      }
      case "/" : {
        return this.ans = this.firstValue / this.secondValue;
      }
    }
  }

  onClear(){
    this.firstValue = "";
    this.secondValue = "";
    this.ans = "0";
  }

}

import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'question1';
  count;
  last;
  inputNumber = null;
  // Default value of dropdown field
  dropdownItem = 'isPrime';
  // Create dropdownList array for dropdown field
  dropdownList = [
    {label: 'isPrime', value: 'isPrime'},
    {label: 'isFibonacci', value: 'isFibonacci'}
  ];
  // Default value of Col 3
  col3Answer = null;

  // Create function to check value isPrime or isFibonacci or null
  selectedDropdown(item) { 
    // If you not type anything or it isn't number then Col 3 = null
    if(!this.inputNumber) {
      this.col3Answer = null
      return;
    };
    // If dropdown is selected as isPrime check inputNumber with isPrime function
    if(item === 'isPrime') {
      this.col3Answer = this.isPrime(this.inputNumber);
    // If dropdown is selected as isFibonacci check isFibonacci with isPrime function
    } else if(item === 'isFibonacci') {
      this.col3Answer = this.isFibonacci(this.inputNumber);
    }
  }

  // Create function to check input Number
  renewNumber(e) {
    let newValue = e.target.value;
    // If input number = null then return nothing
    if(!newValue) {
      this.col3Answer = null
      return;
    };
    // If input number < 0 then change it to 1
    if(newValue<0) {
      newValue = 1;
    // If input number not integer then round it
    } else {
      newValue = Math.round(newValue);
    }
    (<HTMLInputElement>document.getElementById('inputNumber')).value = newValue
    // Keep inputNumber for use again
    this.inputNumber = newValue;
    // Set default value of selectedDropdown = 'isPrime'
    this.selectedDropdown(this.dropdownItem);
  }


  // Create function to 
  isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }


  // Create function to check isFibonacci
  // isFibonacci need to check isSquare before
  isSquare(n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  };

  // Then use isSquare to check isFibonacci
  isFibonacci (num) {
    if (this.isSquare(5*(num*num)-4) || this.isSquare(5*(num*num)+4)) {
       return true;
    } else { return false; }
  }

}


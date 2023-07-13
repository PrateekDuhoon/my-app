import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {



  countNumber = 0;



  //resetButton

  resetButton()
  {
    this.countNumber = 0;

  }
   
  
  //increaseButton

  increaseButton()
  {
    this.countNumber = this.countNumber + 1;
  
  }


  
  //decreaseButton
   
  decreaseButton()
  {
    this.countNumber = this.countNumber - 1;
  }



}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cmp-databinding-assignment-solution-by-haitam';
  oddNumbers:number[] = [];
  evenNumbers:number[] = [];

  onIntervalFired(numberFired:number){

    if(numberFired % 2 === 0){
        this.evenNumbers.push(numberFired);
    }else{
        this.oddNumbers.push(numberFired);
    }

  }


  OnIntervalClear(clear: number){
    if( clear === 0 ){
      this.oddNumbers = [];
      this.evenNumbers = [];
    }
  }


}

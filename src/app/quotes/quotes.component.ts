import { Component, OnInit } from '@angular/core';

import{Quote} from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

quotes:Quote[]=[
  new Quote( 1, 'If you look at what you have in life, you will always have more. If you look at what you do not have in life, you will never have enough.','— Oprah Winfrey',0,0,new Date(2020,8,8)),
  new Quote(2, 'Hey bug! Manically packing up your office in a cold sweat. What is with the downward spiral honey?','— Walter the Lovebug (voice)', 0,0,new Date(2022,1,1)),
  new Quote(3,'Your time is limited, so do not waste it living someone else life. Do not be trapped by dogma – which is living with the results of other people thinking ',' -Steve Jacobs',0,0,new Date(2011,6,12)),
  

]

  one!: number;
  two!:number
  three!:number 

 highest(){
  this.one = 0
  this.two = 0

  for(this.three=0 ; this.three < this.quotes.length; this.three++) {
    this.two = this.quotes[this.three].upvote;
    if(this.two > this.one){this.one = this.two}
  }
  return  this.one
}


 deleteQuote(isComplete: any, index: number){
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

  if (toDelete){
    this.quotes.splice(index,1)
  }
    
  }
}
addNewQuote(quote: Quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)
}

 

constructor() { }


  ngOnInit(): void {
  }

}

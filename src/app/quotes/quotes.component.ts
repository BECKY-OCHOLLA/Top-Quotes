import { Component, OnInit } from '@angular/core';
// import { time } from 'console';
import{Quote} from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote:Quote[]=[
    new Quote(1,'Becky','By-Oprah Winfrey','If you look at what you have in life, you will always have more. If you look at what you do not have in life, you will never have enough. ',0,0,new Date(2020, 8 ,8)),
    new Quote(2,'Night','By— Walter the Lovebug (voice)','Hey bug! Manically packing up your office in a cold sweat. What is with the downward spiral honey?',0,0,new Date(2022,1,16)),
    new Quote(3,'Ocholla','By-Steve Jobs','Your time is limited, so do not waste it living someone else life. Do not be trapped by dogma – which is living with the results of other people thinking. ',0,0,new Date(2021,5,5))

  ];
  toggleQuote(index){
   this.quote[index].showQuote = !this.quote[index].showQuote;

   }

  
  completeQuote(isComplete, index){
    if (isComplete) {
      let completeQuote = confirm(`Are you sure you want to delete ${this.quote[index].quote}?`)

      if (completeQuote){
        this.quote.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quote.length;
     quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }

constructor(){}
ngOnInit(): void {
    
}
  
}

import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote:Quote[]=[
    new Quote(1,'If you look at what you have in life, you will always have more. If you look at what you do not have in life, you will never have enough. -Oprah Winfrey',0,0),
    new Quote(2,'Hey bug! Manically packing up your office in a cold sweat. What is with the downward spiral honey?— Walter the Lovebug (voice)',0,0),
    new Quote(3,'Your time is limited, so do not waste it living someone else life. Do not be trapped by dogma – which is living with the results of other people thinking. -Steve Jobs',0,0)

  ];
constructor(){}
ngOnInit(): void {
    
}
  
}

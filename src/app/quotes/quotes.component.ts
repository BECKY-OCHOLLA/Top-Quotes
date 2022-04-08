import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote:Quote[]=[
    new Quote(1,'Visions are worth fighting for.Why spend your life making someone else dreams?-Tim Burton',0,0),
    new Quote(2,'Hey bug! Manically packing up your office in a cold sweat. What is with the downward spiral honey?— Walter the Lovebug (voice)',0,0),
    new Quote(3,'Be gentle with yourself,you are doing the best you can',0,0)

  ];

  constructor() { }

  ngOnInit(): void {
  }

}

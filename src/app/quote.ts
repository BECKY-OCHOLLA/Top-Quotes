import { Time } from "@angular/common";

export class Quote {
    
    //  showQuote:boolean;
    //  constructor(public id:number,public name:string,public author:string, public quote:string,public upvote:number,public downvote:number ,public completeDate: Date,){
    //       this.showQuote=false;

    //  }

    constructor(public id:number, public quote:string,public details:string,public upvote:number,public downvote:number,public completeDate: Date ,){
        this.id =id;
        this.quote = quote
        this.details = details
        this.upvote = upvote;
        this.downvote = upvote;
        this.completeDate= completeDate;
      
    }
}
 

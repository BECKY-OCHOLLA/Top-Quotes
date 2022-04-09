import { Time } from "@angular/common";

export class Quote {
    
    showQuote:boolean;
     constructor(public id:number,public author:string, public quote:string,public upvote:number,public downvote:number,public completeDate: Date,){
         this.showQuote=false;

    }
}
    


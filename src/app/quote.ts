export class Quote {
    showQuote:boolean;
    constructor(public id:number,public author:string, public quote:string,public upvote:number,public downvote:number){
        this.showQuote=false;

    }
}
    


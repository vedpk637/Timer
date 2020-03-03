import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  
  title = 'my-app';
  mm : any;
  sc :any;

  constructor(){
    this.mm =5;
    this.sc =0
  }
;
  ngOnInit(): void {
  }

  onClick(){
     this.sc=59;

    //  while (this.sc >= 0) {
    
    //   setInterval(()=>{
    //      this.sc=this.sc-1;
       
    //   },1000)
    //   console.log(this.sc)
    // }


    // this.mm = this.mm-1

    // for(let i=this.mm;i>=0;i--){
       
    // //   setTimeout(() => {
    //     for(let j = 59;j>=0;j--){
    //       this.sc = this.sc --;
    //     }
        
    //     }, 1000);

       
    // }



    // this.sc=59;
    // this.mm=this.mm-1;

    
      
  }


}

import { Component, OnInit } from '@angular/core';
import { Time, getLocaleTimeFormat } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   mm=0;
  sc:number=0;
  x:number=0;
  isTrue=true;
  inputValue:Time;
  isChanged=true;
  isDisabled=false;
  timeArr=[];
  
 
  constructor() { }

  ngOnInit(): void {
   this.inputValue=null;

    }

   

    onChanges(val){
      this.mm = 0;
      this.sc=0;
      this.x=0;
      if(val.target.value!=0){
        this.isChanged=false;
      }
      else{
        this.isChanged=true;
      }
       this.inputValue=val.target.value;
      //  console.log(val.target.value.split(':'))
       this.timeArr=val.target.value.split(':');
       console.log(this.timeArr)
       this.mm=parseInt(this.timeArr[0]);
       this.sc=parseInt(this.timeArr[1]);
       console.log(this.mm)
       this.x = this.mm * 60 + this.sc
       console.log(this.x)

    }
   onClick(val){
    // this.isDisabled = !this.isDisabled;
    this.x=0;
    this.sc=0;
    this.mm=0;
    let num;
    
    this.x = val * 60;
    

   var stopFunc = setInterval(()=>{
        console.log(num)
        
      if (this.x >= 0) {
        console.log(this.x);
        
        this.sc= this.x % 60;
        
        this.mm = Math.floor(this.x / 60);
        this.x--;
        
      } else {
        this.x = 0;
        clearInterval(stopFunc)
      }
      
    },1000); 
    
  }

 onCustomClick(){
   this.isTrue=false;
   clearInterval;
  }

 onStart(){
     
   
   
   var stopFunc= setInterval(()=>{
      if (this.x >= 0) {
        console.log(this.x);
        
        this.sc= this.x % 60;
        this.mm = Math.floor(this.x / 60);
        this.x--;
        
      } else {
        this.x = 0;
        clearInterval(stopFunc)
      }
    },1000)
  }

 
 onQuit(){
  this.isTrue=true;
 }


}

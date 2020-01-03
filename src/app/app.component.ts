import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-dream-app5';
  //initialCountInAppComponent: number = 10;
  myCount: number = 1000;
  myFriend = '?'
  msgFromBeyond = '?'
  nango = 'nangoDude'
  gdArray1 = ['start1','start2','start3']

  parentFun2(event) { 
    this.myCount = event;
    this.msgFromBeyond = 'msg from parentFun2'
   }

  parentFun1(myFriendParmIn:string): void {
    this.msgFromBeyond =   " Msg from parentFun1 "
    this.myFriend = myFriendParmIn
  }
  parentFun3(gdaParmIn)   {
    this.gdArray1 = gdaParmIn    //  ['cars','bars','guitars']
  }
}


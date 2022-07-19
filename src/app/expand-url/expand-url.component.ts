import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { UserserService } from '../userser.service';

@Component({
  selector: 'app-expand-url',
  templateUrl: './expand-url.component.html',
  styleUrls: ['./expand-url.component.css']
})
export class ExpandURLComponent implements OnInit {

  public isLoggedIn=false;

  urlDetails={
    longUrl:'',
    shortUrl:''

  };
  today:any;
  dataPipe:DatePipe=new DatePipe('en-US');

  resData : any;
  constructor(public restApi: UserserService,public router: Router) {
    this.today=new Date();
    this.today=this.dataPipe.transform(this.today,'yyyy-MM-dd');
    console.log(this.today);
   }

  onClick(){
  }


  ngOnInit(): void {
    
  }
//#
  expandUrl(){
    console.log(this.urlDetails);
    this.restApi
      .expandUrlService(this.urlDetails.shortUrl.substring(27))
      .subscribe((data) => this.urlDetails.longUrl = data.longUrl);
      
  }
 /*
  verifyUrl(){
    this.restApi
      .increaseUrlCountService(this.urlDetails.shortUrl)
      .subscribe();
    console.log(this.urlDetails);
  }
  verifyUrls(){
    this.restApi
      .increaseUrlCountServices(this.urlDetails.shortUrl)
      .subscribe();
    console.log(this.urlDetails);
  }
*/

}

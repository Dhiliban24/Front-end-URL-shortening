import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Url } from '../url';
import { UserserService } from '../userser.service';

@Component({
  selector: 'app-shorten-url',
  templateUrl: './shorten-url.component.html',
  styleUrls: ['./shorten-url.component.css']
})
export class ShortenUrlComponent implements OnInit {

  urlDetails={
    longUrl:'',
    shortUrl:''

  };
  shortURL : Url={
    id:0,
    shortUrl: this.urlDetails.shortUrl,
    longUrl: this.urlDetails.longUrl,
    creationDate: '',
    lastAccessDate:'',
    accessCount:0
  };
  loggedID:any;
  //today:any;
  
  userId:number=0;

  constructor(public restApi: UserserService,public router: Router,public rout: ActivatedRoute) {
    this.rout.queryParams.subscribe(params=>{console.log(params['userId']);{
      this.userId=params['userId'];
    }})
    //this.today=new Date();
    
   }

  ngOnInit(){
    
  }
  
  shortUrl(){
    console.log(this.urlDetails);
    this.shortURL.id=this.userId;
    //this.shortURL.creationDate=this.today;
    this.shortURL.longUrl=this.urlDetails.longUrl;
    this.restApi
      .shortUrlService(this.shortURL)
      .subscribe((data) => this.urlDetails.shortUrl= "http://localhost:8082/urls/"+data.shortUrl);
      
  }
}

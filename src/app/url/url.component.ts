import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent implements OnInit {
 public id:any;
  public urlservices = [
    { id: 1, name: 'expand' },
    { id: 2, name: 'shorten' }
  ];

  public serviceId: any;
  userId:number=0;
  constructor(public router: Router,public rout: ActivatedRoute) {
    this.rout.queryParams.subscribe(params=>{console.log(params['userId']);{
      this.userId=params['userId'];
    }})
  }

  ngOnInit(): void {
  }

 

  onExpand(){
    this.router.navigate(['url/expandurl/']);
  }

  onShorten(){
    this.router.navigate(['/url/shorturl/'],{
      queryParams:{
        userId:this.userId
      },
      queryParamsHandling:'merge',
      skipLocationChange:false
    });
    
  }

  top(){
    this.router.navigate(['/topurl']);
  }

  recent(){
    this.router.navigate(['/recenturl']);
  }

  all(){
    this.router.navigate(['/allurl']);
  }
  
  
}
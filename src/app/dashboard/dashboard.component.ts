import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserService } from '../userser.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public restApi: UserserService,
    public router: Router,
    public aroute: ActivatedRoute) { }

    public urlData = [] as any;
    public urlRecentData=[] as any;
    public urlAllData=[] as any;
  ngOnInit(): void {
    
  }

  gettopurls(){
    this.restApi
      .getTopUrls()
      .subscribe((data) => (this.urlData = data));
  }

  getrecenturls(){
    this.restApi
      .getRecentUrls()
      .subscribe((data) => (this.urlRecentData = data));
  }

  getallurls(){
    this.restApi.getAllUrls()
    .subscribe((data) => (this.urlAllData = data));
  }

}

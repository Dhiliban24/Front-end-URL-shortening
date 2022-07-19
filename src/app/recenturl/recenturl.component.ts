import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserService } from '../userser.service';

@Component({
  selector: 'app-recenturl',
  templateUrl: './recenturl.component.html',
  styleUrls: ['./recenturl.component.css']
})
export class RecenturlComponent implements OnInit {

  constructor(private restApi:UserserService,private router:Router) { }
  public urlRecentData=[] as any;

  ngOnInit(): void {
    this.restApi
      .getRecentUrls()
      .subscribe((data) => (this.urlRecentData = data));
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserService } from '../userser.service';

@Component({
  selector: 'app-topurl',
  templateUrl: './topurl.component.html',
  styleUrls: ['./topurl.component.css']
})
export class TopurlComponent implements OnInit {

  constructor(private restApi:UserserService,private router:Router) { }

  ngOnInit(): void {
    this.restApi.getTopUrls()
      .subscribe((data) => (this.urlData = data));
  }

  public urlData = [] as any;
 
}

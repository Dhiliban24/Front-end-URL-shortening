import { Component, OnInit } from '@angular/core';
import { UserserService } from '../userser.service';

@Component({
  selector: 'app-allurls',
  templateUrl: './allurls.component.html',
  styleUrls: ['./allurls.component.css']
})
export class AllurlsComponent implements OnInit {

  constructor(private restApi:UserserService) { }
  public urlAllData=[] as any;
  ngOnInit(): void {
    this.restApi.getAllUrls()
    .subscribe((data) => (this.urlAllData = data));
  }
 

}

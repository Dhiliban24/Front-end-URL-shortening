import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminLog={
    userName:'',
    password:''
  }
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.router.navigate(['/edituser']);
  }

  onInvalidLogin(){
    this.router.navigate(['/adminlogin']);
    alert('Invalid login');
  }

}

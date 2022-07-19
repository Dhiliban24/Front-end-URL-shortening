import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserService } from '../userser.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  tokenFromUI: string = "0123456789123456";
 
  encrypted: any = "";
  userDetails = {
    userName: '',
    password: '',
    email: '',
    repassword:''
  };
  
  public userRegData = [] as any;

  constructor(public restApi: UserserService,public router: Router) {}

  ngOnInit(): void {
    this.restApi
    .getAllUsers()
    .subscribe((data)=>(this.userRegData = data));
  }
  
  encryptUsingAES256(pass:string) {
    
    let _key = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    let _iv = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    let encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(pass), _key, {
        keySize: 16,
        iv: _iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
    this.encrypted = encrypted.toString();
  }
  
  addUser() {
    
    this.encryptUsingAES256(this.userDetails.password);
    this.userDetails.password=this.encrypted;
    this.encryptUsingAES256(this.userDetails.repassword);
    this.userDetails.repassword=this.encrypted;
    console.log(this.userDetails);
    this.restApi
      .createUser(this.userDetails)
      .subscribe((data) => this.router.navigate(['user/login']));
  
}
 


}

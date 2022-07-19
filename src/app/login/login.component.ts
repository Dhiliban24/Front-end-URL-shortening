import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

import { UserserService } from '../userser.service';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(public restApi: UserserService,public router: Router,public aroute:ActivatedRoute) { }
  
  tokenFromUI: string = "0123456789123456";
  encrypted: any = "";
  userLogId:any;
  public curUser:User={
     id: 0,
    userName: '',
    password: '',
    email: '',
    authStatus: ''
  };
  userLogDetails = {
    email: '',
    password: ''
  };


  ngOnInit(): void {
   // console.log(this.userLogDetails);
    
  }
  

  encryptUsingAES256() {
    let _key = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    let _iv = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    let encrypted = CryptoJS.AES.encrypt(
      JSON.stringify( this.userLogDetails.password), _key, {
        keySize: 16,
        iv: _iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
    this.encrypted = encrypted.toString();
  }

  getVeriUser(uemail:string){
    this.encryptUsingAES256();
    console.log(uemail);
    this.restApi.
    validateLogin(uemail)
      .subscribe((data) =>{
      if(data!=null){
      console.log(data),
      this.curUser.email =data['email'],
      this.curUser.userName =data['userName'],
      this.curUser.password =data['password'],
      this.curUser.authStatus=data['authStatus'];
      this.curUser.id=data['id'];
    
      }
    if(this.curUser.email==this.userLogDetails.email  && this.curUser.password==this.encrypted){
      if(this.curUser.authStatus=="accepted"){
      console.log(this.curUser);
      this.router.navigate(['url/shorturl'],{
         queryParams:{
           userId:this.curUser.id
         },
         queryParamsHandling:'merge',
         skipLocationChange:false
       });
     }
     else{
      window.alert("User not approved by admin");
      }
    }
     else{
       console.log(this.encrypted);
       console.log(this.curUser);
       console.log("Invalid password");
       window.alert("Invalid Credentials")
     }
      
  });
    
    
    
  }

}

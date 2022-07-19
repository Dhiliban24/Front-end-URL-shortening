import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AllurlsComponent } from './allurls/allurls.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ExpandURLComponent } from './expand-url/expand-url.component';
import { LoginComponent } from './login/login.component';
import { RecenturlComponent } from './recenturl/recenturl.component';
import { RegisterComponent } from './register/register.component';
import { ShortenUrlComponent } from './shorten-url/shorten-url.component';
import { TopurlComponent } from './topurl/topurl.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'URL Shortening';
  preUrl='';
  public basicNav=true;
  public logNav=false;
  public navlog=false;
    public showDiv=true;
  constructor(private router:Router,public aroute:ActivatedRoute){
    router.events.subscribe((url:any) => this.preUrl=router.url);
      console.log(this.router.url);
  }

  ngOnInit(){
   
  }
  toggleDiv(component: any){
    
    if(component instanceof LoginComponent){
      this.showDiv=false;
      this.logNav=false;
      this.basicNav=true;
    }
    else if(component instanceof RegisterComponent){
      this.showDiv=false;
      this.logNav=false;
      this.basicNav=true;
    }
    else if(component instanceof ShortenUrlComponent){
      this.basicNav=false;
      this.showDiv=false;
      this.logNav=true;
    }
    else if(component instanceof ExpandURLComponent){
      this.basicNav=false;
      this.showDiv=false;
      this.logNav=true;
    }
    else if(component instanceof TopurlComponent){
      this.basicNav=false;
      this.showDiv=false;
      this.logNav=true;
    }
    else if(component instanceof RecenturlComponent){
      this.basicNav=false;
      this.showDiv=false;
      this.logNav=true;
    }
    else if(component instanceof AllurlsComponent){
      this.basicNav=false;
      this.showDiv=false;
      this.logNav=true;
    }
    else if(component instanceof AdminComponent){
      this.basicNav=true;
      this.showDiv=false;
      this.logNav=false;
    }
    else if(component instanceof EdituserComponent){
      this.basicNav=true;
      this.showDiv=false;
      this.logNav=false;
    }
    else{
      this.showDiv=true;
    }
  }

}


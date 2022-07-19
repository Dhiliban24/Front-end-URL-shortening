import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ExpandURLComponent } from './expand-url/expand-url.component';
import { ShortenUrlComponent } from './shorten-url/shorten-url.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from  '@angular/common/http';
import { UrlComponent } from './url/url.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { EdituserComponent } from './edituser/edituser.component';
import { TopurlComponent } from './topurl/topurl.component';
import { RecenturlComponent } from './recenturl/recenturl.component';
import { AllurlsComponent } from './allurls/allurls.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarlogComponent } from './nav-barlog/nav-barlog.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExpandURLComponent,
    ShortenUrlComponent,
    DashboardComponent,
    RegisterComponent,
    UrlComponent,
    UserComponent,
    AdminComponent,
    EdituserComponent,
    TopurlComponent,
    RecenturlComponent,
    AllurlsComponent,
    NavBarComponent,
    NavBarlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

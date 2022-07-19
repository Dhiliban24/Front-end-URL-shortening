import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserserService } from '../userser.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  public userData = [] as any;
  public selectedId: any = this.aroute.snapshot.params['eid'];
  constructor(
    public restApi: UserserService,
    public router: Router,
    public aroute: ActivatedRoute
  ) {}

  ngOnInit(): void {   
    this.restApi
      .getUsersFromService()
      .subscribe((data) => (this.userData = data));
  }
  
  updateUser(user:User){
    this.restApi
      .editUser(user)
      .subscribe((data) => this.router.navigate(['/edituser']));
  }
  
}

import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})
export class HomeComponent implements OnInit, DoCheck {
	public page_title:string;
	public identity:string;
	public token:string;

  	constructor(
  		private _userService: UserService
  		) {
  		this.page_title = 'Bienvenido al foro de programacion';
  		this.identity = this._userService.getIdentity();
  		this.token = this._userService.getToken();
	}

  ngOnInit(){
  	this._userService.getIdentity();
  }
  ngDoCheck(){
    this.identity = this._userService.getIdentity();
  }

}

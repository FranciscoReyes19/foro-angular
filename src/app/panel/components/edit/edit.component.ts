import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Topic } from '../../../models/topic';
import { UserService } from '../../../services/user.service';
import { TopicService } from '../../../services/topic.service';
//templateUrl: '../add/add.component.html', => Permite reutilizar el formulario de registro UwU

@Component({
  selector: 'app-edit',
  templateUrl: '../add/add.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [UserService, TopicService]
})
export class EditComponent implements OnInit {
	public page_title:string;
	public topic: Topic;
	public identity;
	public token;
	public status;
	public is_edit;

  	constructor(
  		private _route: ActivatedRoute,
  		private _router: Router,
  		private _userService: UserService,
  		private _topicService: TopicService
  	) {
  		this.page_title = 'Editar tema';
  		this.identity = this._userService.getIdentity();
  		this.token = this._userService.getToken();
  		this.topic = new Topic('','','','','','',this.identity._id,'null');
  		this.is_edit = true;
	}

  ngOnInit(){
  	//Compobar que llega el topic
  	this.getTopic();
  }

  onSubmit(form){
  	var id = this.topic._id;
  	this._topicService.update(this.token,id,this.topic).subscribe(
  		response => {
  			if(response.topicUpdated){
  				this.status = 'error';
  				this.topic = response.topic;
  				console.log('exito');
  			}
  			else{
  				this.status = 'error';
  				console.log('aqui');
  			}
  		},
  		error => {
  			this.status = 'error';
  		});
  }

  getTopic(){
  	//Obtiene el id del tema en especifico (de la fila seleccionada)
  	//this._route.params.subscribe(params => {
  	this._route.params.subscribe(params => {
  	let id = params['id'];
  	
  	this._topicService.getTopic(id).subscribe(
  			response => {
  				if(!response.topic){
  					this._router.navigate(['/panel']);
  				}
  				else{
  					this.topic = response.topic;
  				}
  			},
  			error => {
  				console.log(error);
  			});
  	});
  }

}

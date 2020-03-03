import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
public page_title:string;

  	constructor() {
  		this.page_title = 'Crear nuevo tema';
	}
  ngOnInit(): void {
  }

}

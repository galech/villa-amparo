import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-edition',
  templateUrl: './group-edition.component.html',
  styleUrls: ['./group-edition.component.css']
})
export class GroupEditionComponent implements OnInit {

  constructor() { 
  
	console.log("constructor")
  }

  ngOnInit() {
	  
	  console.log("init")
  }

}

import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
	
  @Input() groups: Array<any>;
  @Input() onGroupCreation: Boolean;

  constructor() { 
  
	console.log("constructor");}

  ngOnInit() {
	console.log("init");
  }

}

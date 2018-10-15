import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-group-new',
  templateUrl: './group-new.component.html',
  styleUrls: ['./group-new.component.css']
})
export class GroupNewComponent implements OnInit {
	
  @Input() database: DataService;
  @Input() groups: Array<any>;
  @Input() onGroupCreation: Boolean;

  constructor() { 
	}

  ngOnInit() {	  
	console.log("ENTRA")  

  }
  
  public createGroup(group){
	this.onGroupCreation = false
  }

}

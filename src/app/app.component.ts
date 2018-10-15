import { Component, OnInit, NgZone } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

	title = 'app';

	private router: Router;
	public groups: Array<any>;
	public filteredGroups: Array<any>;
	public currentGroup: any;
	public onGroupCreation: Boolean;
	public filterArgs: any;


	public constructor(private database: DataService, private zone: NgZone, private _scrollToService: ScrollToService) {
		this.groups = [];
		this.onGroupCreation = false;
		this.filterArgs = {}

	}

	public newGroup(){
	  
		this.onGroupCreation = true;
	}

	public groupList(){
		this.onGroupCreation = false;  
	}
  
   
	public createGroup(groupName: string){
		let newGroup: any  = {text:groupName}
		if (groupName) {
			this.database.post(newGroup).then((response) =>{
				newGroup._id = response.id
				newGroup._rev = response.rev
				this.groups.push(newGroup)
				this.currentGroup = newGroup
				this.changeOrder()
				this.filterGroups()
				const config: ScrollToConfigOptions = {
				  target: "4e64ecd0-f4da-4359-8bc5-76b7a1410f27", //newGroup._id
				  offset: -200,
				  duration: 400
				};
			 
				this._scrollToService.scrollTo(config);
				
				
			}).catch(function (err) {
			  console.log(err);
			});
			

			this.onGroupCreation = false;
		}

	}
  
  public searchTextChange(event: any){
	  this.filterArgs.searchText = event.target.value
	  this.filterGroups()  
  }
  
  
  public changeOrder(){
	  
	this.groups = _.orderBy(this.groups, [group => group.text.toLowerCase()], ['asc']);
  }
  
  public filterGroups(){
	  

    let filteredGroups: Array<any>  = this.groups
	if (this.filterArgs.searchText){
		filteredGroups = _.filter(filteredGroups, (group) => {
				return _.includes(group.text, this.filterArgs.searchText);
			});
	}
	this.filteredGroups = filteredGroups;


	  
  }
  
  public ngOnInit() {


    this.database.getChangeListener().subscribe(data => {
      for (let i = 0; i < data.change.docs.length; i++) {
        this.zone.run(() => {
          this.groups.push(data.change.docs[i]);
		  this.changeOrder()
	      this.filterGroups()
        });
      }
    });
	
	
	
    this.database.fetch().then(result => {

      this.groups = [];
      for (let i = 0; i < result.rows.length; i++) {
        this.groups.push(result.rows[i].doc);
      }
	  
	  this.changeOrder()
	  this.filterGroups()
	  
    }, error => {
      // console.error(error);
    });
  }

}

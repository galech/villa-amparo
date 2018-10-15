import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppComponent } from './app.component';

import { DataService } from './data.service';
import { GroupEditionComponent } from './group-edition/group-edition.component';
import { GroupNewComponent } from './group-new/group-new.component';
import { GroupListComponent } from './group-list/group-list.component';


const appRoutes: Routes = [
  { path: 'group-edition/:id', component: GroupEditionComponent },
  { path: 'group-new', component: GroupNewComponent },
  { path: 'group-list', component: GroupListComponent }
  
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
    // path: 'heroes',
    // component: HeroListComponent,
    // data: { title: 'Heroes List' }
  // },
  // { path: '',
    // redirectTo: '/heroes',
    // pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    GroupEditionComponent,
    GroupNewComponent,
    GroupListComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
	ScrollToModule.forRoot(),
	ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

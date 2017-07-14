import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataService } from './services/data.service';

import { HttpModule } from '@angular/http';


import {RouterModule,Router} from '@angular/router';


import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';

const appRoutes=[

{path:'',component:AppComponent},

{path:'app',component:UserComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AboutComponent]
})
export class AppModule { }

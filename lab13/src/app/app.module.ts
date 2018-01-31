import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StudentsComponent } from './students/students.component';
import { DbService } from './db.service';
import { myRoutes } from './app.routes';
import { ProfileComponent } from './profile/profile.component';

import { MyCanActivateGuard } from "./profile/mycanactivate.guard";
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StudentsComponent,
    ProfileComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    myRoutes
  ],
  providers: [DbService, MyCanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

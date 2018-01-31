import {RouterModule, Routes} from '@angular/router';

import {HomepageComponent} from './homepage/homepage.component';
import {StudentsComponent} from './students/students.component';
import {ProfileComponent} from './profile/profile.component';
import { MyCanActivateGuard } from "./profile/mycanactivate.guard";
import { NotfoundComponent } from './notfound/notfound.component';

const MY_ROUTES: Routes = [

    {path: '', component: HomepageComponent},
    {path: 'students', component: StudentsComponent},
    {path: 'students/profile/:id', component: ProfileComponent, canActivate:[MyCanActivateGuard]},
    {path: 'notfound', component: NotfoundComponent},
    {path: '**', redirectTo: '/' },
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
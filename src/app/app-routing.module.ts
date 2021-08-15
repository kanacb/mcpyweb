import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path:'aboutme',
    component: AboutmeComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path:'**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

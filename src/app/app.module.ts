import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from './components/components.module';
import { RegisterModule } from './register/register.module';
import { ContactusModule } from './contactus/contactus.module';
import { ScheduleModule } from './schedule/schedule.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    ContactusModule,
    RegisterModule,
    ScheduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

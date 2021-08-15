import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutmeComponent } from './aboutme.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    AboutmeComponent
  ],
  imports: [
    CommonModule,ComponentsModule
  ]
})
export class AboutmeModule { }

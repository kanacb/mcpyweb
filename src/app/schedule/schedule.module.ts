import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { ScheduleComponent } from './schedule.component';



@NgModule({
  declarations: [ScheduleComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class ScheduleModule { }

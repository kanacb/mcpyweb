import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { ContactusComponent } from './contactus.component';



@NgModule({
  declarations: [ContactusComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class ContactusModule { }

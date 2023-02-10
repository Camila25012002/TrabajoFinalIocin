import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasklistPageRoutingModule } from './tasklist-routing.module';

import { TasklistPage } from './tasklist.page';
import { NewitemComponent } from '../newitem/newitem.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasklistPageRoutingModule,
    /*NewitemComponent*/
  
  ],
  declarations: [TasklistPage]
})
export class TasklistPageModule {}

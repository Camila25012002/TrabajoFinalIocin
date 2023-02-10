import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { BasedatosService } from 'src/app/servicios/basedatos';
import { Task } from './task';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.page.html',
  styleUrls: ['./tasklist.page.scss'],
})
export class TasklistPage implements OnInit {
  tasks: Array<Task> = [];

  constructor(public basedatosService: BasedatosService) {
    this.tasks = [
      {title: 'Milk', status: 'open'},
      {title: 'Eggs', status: 'open'},
      {title: 'Syrup', status: 'open'},
      {title: 'Pancake Mix', status: 'open'}
    ];
  }

  ngOnInit() {
    this.getItems()
  }

  addItem() {
    let theNewTask: string | null = prompt("New task");

    if (theNewTask !== '') {
      this.tasks.push({title: theNewTask, status: 'open'});
    }
  }

  markAsDone(slidingItem: IonItemSliding, task: Task) {
    task.status = 'done';
    setTimeout(() => { slidingItem.close(); }, 1);
  }

  removeTask(slidingItem: IonItemSliding, task: Task) {
    task.status = 'removed';
    let index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
    setTimeout(() => { slidingItem.close(); }, 1);
  }

  items: item[]=[];

  getItems(){
    const enlace = "Ionic";
    this.basedatosService.getDocument<item>(enlace).subscribe( res => {
         this.items=res;

    });
  }

  guardar(){
    console.log('Esto se va a guardar',this.newItem);
    const data =this.newItem;
    const enlace =  'Ionic';
    this.basedatosService.crearDocument<item>(data,enlace)

  }


  
  newItem: item ={
    tareas: '',
  }
}

export interface item{
  tareas: string;
}
import { Component } from '@angular/core';
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent{
  title: string = ''
  constructor(private taskService: TasksService) { }

  createTask(){
    if(this.title.length > 0){
      this.taskService.createTask(this.title)
      this.title = ''
    }
  }
}

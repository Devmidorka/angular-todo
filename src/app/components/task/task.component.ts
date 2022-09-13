import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../../models/task.model";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent{
  @Input()
  task: Task | undefined

  @Output()
  outToggleStatus = new EventEmitter<number>()

  @Output()
  outDeleteTask = new EventEmitter<number>()

  constructor() {}

  changeStatus(){
    this.outToggleStatus.emit(this.task?.id)
  }

  deleteTask(){
    this.outDeleteTask.emit(this.task?.id)
  }


}

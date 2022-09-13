import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../../models/task.model";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent{

  public isEditing:boolean = false

  @Input()
  task: Task | undefined


  @Output()
  outEditDescription = new EventEmitter<string>()

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

  changeEditingStatus(descriptionNode: HTMLElement) {
    this.isEditing = true
    setTimeout(() => {
      descriptionNode.focus()
    }, 0)
  }

  editDescription(description: string){
    this.isEditing = false
    this.outEditDescription.emit(description)
  }


}

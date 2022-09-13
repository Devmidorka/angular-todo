import {Injectable} from '@angular/core';
import {status, Task} from "../models/task.model";


@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: Task[] = [
    new Task(0, 'test', status.isProgress)
  ]
  constructor() { }

  getTaskId():number{
    let tasksCount = this.tasks.length
    if(tasksCount > 0){
      return this.tasks[tasksCount - 1].id + 1
    }
    return 0
  }

  createTask(title: string):void{
    this.tasks.push(new Task(this.getTaskId(), title, status.isProgress))
  }

  getTasks():Task[]{
    return this.tasks
  }
}

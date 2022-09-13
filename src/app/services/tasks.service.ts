import {Injectable} from '@angular/core';
import {status, Task} from "../models/task.model";


@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: Task[] = []

  constructor() { }

  getTaskId():number{
    let tasksCount = this.tasks.length
    if(tasksCount > 0){
      return this.tasks[tasksCount - 1].id + 1
    }
    return 0
  }

  createTask(title: string):void{
    this.tasks.push(new Task(this.getTaskId(), title, status.inProgress))
  }

  getTasks():Task[]{
    return this.tasks
  }

  changeStatus(id:number):void{
    this.tasks.forEach(task => {
      if(task.id === id) {
        task.toggleStatus()
      }
    })
  }

  deleteTask(id:number):void{
    this.tasks = this.tasks.filter(task => task.id !== id)
  }

  changeDescription(id:number, description:string){
    this.tasks.forEach(task => {
      if(task.id === id){
        task.description = description
      }
    })
  }
}

import { Component } from '@angular/core';
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  constructor(public taskService:TasksService) { }
}

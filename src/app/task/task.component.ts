import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  // able to access an object as an input of type Task
  @Input() task: Task | null = null;
  // able to emit the "edit" outputs
  @Output() edit = new EventEmitter<Task>();
}

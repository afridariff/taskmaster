import { Component, OnInit } from '@angular/core';
import { DisplaytasksService } from '../services/displaytasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  taskTitles: string[] = [];
  constructor(private display: DisplaytasksService) {}

  ngOnInit(): void {
    this.taskTitles = this.display.taskTitles;
  }
}

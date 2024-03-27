import { Component, OnInit } from '@angular/core';
import { DisplaytasksService } from '../services/displaytasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  taskTitles: any[] = [];

  constructor(private display: DisplaytasksService, private router: Router) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.display.getTaskTitles().then(
      (tasks) => {
        this.taskTitles = tasks;
      },
      (error) => {
        console.error('Error fetching task titles:', error);
      }
    );
  }

  onDelete(taskId:any): void {
    if(taskId){
      this.display.deleteTask(taskId).then((data) => {
        if(data == 200){
        window.location.reload();
        }
      });
    }
  }
}

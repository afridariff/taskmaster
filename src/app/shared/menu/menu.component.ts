import { Component, Output, EventEmitter } from '@angular/core';
import { DisplaytasksService } from '../services/displaytasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  // @Output() pendingTasksClicked = new EventEmitter<void>();

  // loadPendingTasks(): void {
  //   this.pendingTasksClicked.emit();
  // }

  constructor(private display: DisplaytasksService, private router: Router) {}

  loadPendingTasks(): void {
    this.display.getAllPendingTasks().subscribe(
      (tasks) => {
        this.display.taskDetails = tasks;
        this.display.notifyTasksUpdated();
      },
      (error) => {
        console.error('Error fetching pending tasks:', error);
      }
    );
  }

  loadUpcomingTasks() {
    this.display.getAllUpcomingTasks().subscribe(
      (tasks) => {
        this.display.taskDetails = tasks;
        this.display.notifyTasksUpdated();
      },
      (error) => {
        console.error('Error fetching pending tasks:', error);
      }
    );
  }

  allTasks(){
    this.display.page = 'new';
    this.display.notifyTasksUpdated();
  }
}

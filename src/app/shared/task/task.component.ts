import { Component, OnInit } from '@angular/core';
import { DisplaytasksService } from '../services/displaytasks.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  taskTitles: any[] = [];
  private tasksUpdateSubscription!: Subscription;

  constructor(public display: DisplaytasksService, private router: Router) {}

  ngOnInit(): void {
    this.loadTasksBasedOnAvailability();
    this.subscribeToTasksUpdate();
  }

  loadTasksBasedOnAvailability(): void {
    if (this.display.page == 'new') {
      this.loadTasks();
      
    } else{
      this.taskTitles = this.display.taskDetails;
    } 
  }

  subscribeToTasksUpdate(): void {
    this.tasksUpdateSubscription = this.display.tasksUpdated.subscribe(
      () => {
        this.loadTasksBasedOnAvailability(); // Reload tasks when tasks are updated
      }
    );
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

  onDelete(taskId: any): void {
    if (taskId) {
      this.display.deleteTask(taskId).then((data) => {
        if (data == 200) {
          window.location.reload();
        }
      });
    }
  }
  redirectToTaskDetails(taskId: string): void {
    this.router.navigate(['/task-details'], {
      queryParams: { taskId: taskId },
    });
  }

  // Handle upcoming tasks filter
  // filterUpcomingTasks(): void {
  //   const currentDate = new Date();
  //   this.taskTitles = this.taskTitles.filter(
  //     (task) => new Date(task.deadline) > currentDate
  //   );
  // }

  // // Handle pending tasks filter
  // filterPendingTasks(): void {
  //   const currentDate = new Date();
  //   this.taskTitles = this.taskTitles.filter(
  //     (task) => new Date(task.deadline) < currentDate
  //   );
  // }

  // filterUpcomingTasks(): void {
  //   const currentDate = new Date();
  //   this.taskTitles = this.taskTitles.filter(
  //     (task) => new Date(task.deadline) > currentDate
  //   );
  // }

  // // Function to filter pending tasks
  // filterPendingTasks(): void {
  //   const currentDate = new Date();
  //   this.taskTitles = this.taskTitles.filter(
  //     (task) => new Date(task.deadline) < currentDate
  //   );
  // }
}

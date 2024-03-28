import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchdetService } from 'src/app/shared/services/fetchdet.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent {
  taskTitle: any;
  taskDescription: any;
  taskDeadline: Date | undefined;
  taskId:any;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fetchdetService: FetchdetService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.taskId = params['taskId'];
      if (this.taskId) {
        this.fetchTaskDetails(this.taskId);
      }
    });
  }

  fetchTaskDetails(taskId: string): void {
    // Call service to fetch task details based on taskId
    this.fetchdetService.getTaskDetails(taskId).subscribe(
      (taskDetails: any) => {
        console.log(taskDetails)
        this.taskTitle = taskDetails.title;
        this.taskDescription = taskDetails.description;
        this.taskDeadline = new Date(taskDetails.deadline);
      },
      (error) => {
        console.error('Error fetching task details:', error);
      }
    );
  }
}

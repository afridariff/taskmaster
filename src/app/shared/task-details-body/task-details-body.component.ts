import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchdetService } from '../services/fetchdet.service';

@Component({
  selector: 'app-task-details-body',
  templateUrl: './task-details-body.component.html',
  styleUrls: ['./task-details-body.component.css'],
})
export class TaskDetailsBodyComponent {
  @Input() taskTitle?: string;
  @Input() taskDescription?: string;
  @Input() taskDeadline?: Date;
  @Input() taskId?: any;
  constructor(
    private fetchdetService: FetchdetService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('taskTitle:', this.taskTitle);
    console.log('taskDescription:', this.taskDescription);
    console.log('taskDeadline:', this.taskDeadline);  
  }

  onSubmit(): void {
    const taskDetails = {
      title: this.taskTitle,
      description: this.taskDescription,
      deadline: this.taskDeadline,
    };

     //console.log('task id is', taskId);

    // Check if task ID exists to determine if it's an update or create operation
    // const taskId = this.route.queryParams.subscribe((params) => {
    // });
    // console.log('task id is', taskId);


    if (this.taskId) {
      // Update task
      this.fetchdetService.updateTask(this.taskId, taskDetails).subscribe(
        (data: any) => {
          this.router.navigate(['/all-tasks']);
        },
        (error) => {
          console.error('Error updating task:', error);
        }
      );


    } else {
      // Create task
      this.fetchdetService.createTask(taskDetails).subscribe(
        (response) => {
          console.log('Task created successfully:', response);
          this.router.navigate(['/all-tasks']);
        },
        (error) => {
          console.error('Error creating task:', error);
        }
      );
    }
  }
}

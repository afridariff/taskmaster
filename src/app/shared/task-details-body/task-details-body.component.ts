import { Component } from '@angular/core';
import { DatepickerInlineCalendarExample } from '../material/datepicker-inline-calendar-example/datepicker-inline.component';
import { FormsModule } from '@angular/forms';
import { FetchdetService } from '../services/fetchdet.service'


@Component({
  selector: 'app-task-details-body',
  templateUrl: './task-details-body.component.html',
  styleUrls: ['./task-details-body.component.css'],
})
export class TaskDetailsBodyComponent {
 
  taskTitle!: string;
  taskDescription!: string;
  taskDeadline!: Date;

  constructor(private fetchdetService: FetchdetService) {}

  onSubmit(): void {
    const taskDetails = {
      title: this.taskTitle,
      description: this.taskDescription,
      deadline: this.taskDeadline,
    };

    // Call the createTask method of the service to save the task
    this.fetchdetService.createTask(taskDetails).subscribe(
      (response) => {
        console.log('Task created successfully:', response);
        // Reset form fields or perform any other actions upon successful creation
      },
      (error) => {
        console.error('Error creating task:', error);
        // Handle error appropriately
      }
    );
  }
}

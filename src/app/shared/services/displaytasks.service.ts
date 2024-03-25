import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DisplaytasksService {
  taskTitles: string[] = ['Task 1', 'Task 2', 'Task 3'];

  constructor() {}
}

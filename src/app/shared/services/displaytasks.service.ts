import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DisplaytasksService {
  private baseUrl = 'https://localhost:44317/api/task';

  taskDetails!: any[];
  page: string = 'new';
  tasksUpdated: Subject<void> = new Subject<void>();

  constructor(private http: HttpClient) {}

  async getTaskTitles(): Promise<any | null> {
    return new Promise<any | null>((resolve, reject) => {
      this.http.get<any>(`${this.baseUrl}`).subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  deleteTask(id: string): Promise<any | null> {
    return new Promise<any | null>((resolve, reject) => {
      this.http.delete<any>(`${this.baseUrl}/${id}`).subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  getAllPendingTasks(): Observable<any> {
    const url = `${this.baseUrl}/pending`;
    this.page = 'pending';
    return this.http.get<any>(url);
  }

  getAllUpcomingTasks(): Observable<any> {
    const url = `${this.baseUrl}/upcoming`;
    this.page = 'upcoming';
    return this.http.get<any>(url);
  }

  notifyTasksUpdated(): void {
    this.tasksUpdated.next();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class DisplaytasksService {
  private baseUrl = 'https://localhost:44317/api/task';

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
        (data)=>{
          resolve(data)
        },
        (error) =>{
          reject(error)
        }
      )
    })
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchdetService {
  private baseUrl = 'https://localhost:44317/api/task'; 

  constructor(private http: HttpClient) {}

  createTask(taskDetails: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, taskDetails);
  }

  updateTask(id: string, taskDetails: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<any>(url, taskDetails);
  }

  deleteTask(id: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}

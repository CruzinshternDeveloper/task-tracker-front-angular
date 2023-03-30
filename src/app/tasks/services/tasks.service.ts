import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ITask } from '../../shared/interfaces/tasks.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasksBasicUrl = environment.BASIC_URL + '/tasks';

  constructor(private _http: HttpClient) { }

  getAllTasks(payload: any): Observable<ITask[]> {
    let params = new HttpParams().set('startDate', payload);
    return this._http.get<ITask[]>(this.tasksBasicUrl + '/findAllByDate', { params });
  }

  updateTask(task: ITask): Observable<ITask> {
    return this._http.put<ITask>(this.tasksBasicUrl + `/${ task._id }`, task);
  }

  createTask(task: ITask): Observable<ITask> {
    return this._http.post<ITask>(this.tasksBasicUrl + '/create', task);
  }
}

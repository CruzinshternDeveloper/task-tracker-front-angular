import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, tap } from 'rxjs';
import { ITask } from '../../shared/interfaces/tasks.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private _http: HttpClient) { }

  getAllTasks(payload: any): Observable<any[]> {
    let params = new HttpParams().set('startDate', payload);
    return this._http.get<any[]>(environment.BASIC_URL + '/tasks/findAllByDate', { params });
  }

  updateTask(task: ITask) {
    return this._http.put(environment.BASIC_URL + `/tasks/${ task._id }`, task);
  }
}

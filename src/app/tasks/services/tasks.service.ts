import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private _http: HttpClient) { }

  getAllTasks(payload: any): Observable<any[]> {
    let params = new HttpParams().set('startDate', payload);
    return this._http.get<any[]>(environment.BASIC_URL + '/tasks/findOneByDate', { params });
  }
}

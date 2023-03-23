import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ROUTES } from '../../shared/enums/routes.enum';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private _http: HttpClient) { }

  getAllTasks(): Observable<any[]> {
    return this._http.get<any[]>(environment.BASIC_URL + '/' + ROUTES.TASKS);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private dataSource = new BehaviorSubject(['piano','drawing']);

  data = this.dataSource.asObservable();

  constructor() { }


}

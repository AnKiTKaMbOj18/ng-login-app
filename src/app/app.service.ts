import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface myData {
  userId: number;
  id: number;
  title: String;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {
    this.http = http;
  }

  getData():Observable<myData[]> {
    return this.http.get<myData[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }
}

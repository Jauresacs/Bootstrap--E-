import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly apiUrl = 'https://dummyjson.com/test';

  private readonly http: HttpClient = inject(HttpClient);

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

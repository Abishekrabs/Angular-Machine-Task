import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  jsonData = new BehaviorSubject<any>(null);

  fetchJsonData(path: string) {
    this.http.get<any>(path).subscribe(response => {
      if (response && response.length > 0) {
        this.jsonData.next(response);
      }
    })
  }
}

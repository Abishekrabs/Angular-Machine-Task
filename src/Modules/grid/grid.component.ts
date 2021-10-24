import { Component, OnDestroy } from '@angular/core';
import { HttpService } from 'src/Service/http.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  jsonData = [];
 _object = Object;
  constructor(private httpService: HttpService) {
    this.httpService.jsonData.subscribe(data => {
      this.jsonData = data;
    });
   }

}

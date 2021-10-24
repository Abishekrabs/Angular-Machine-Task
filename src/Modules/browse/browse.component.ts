import { Component } from '@angular/core';
import { HttpService } from 'src/Service/http.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent {

  urlValue: string = "";
  isFileInvalid = false;

  constructor(private httpService: HttpService) { }

  fetchData() {
    this.httpService.fetchJsonData(this.urlValue);
  }

  onFileSelected(event: any) {
    const file:File = event.target.files[0];
    if (file.type == 'application/json') {
      this.isFileInvalid = false;
      const blob: any = new Blob([file], {
        type: 'application/json'
      });
      const url = window.URL.createObjectURL(blob);
      this.httpService.fetchJsonData(url);
    } else {
      this.isFileInvalid = true;
    }
  }
}

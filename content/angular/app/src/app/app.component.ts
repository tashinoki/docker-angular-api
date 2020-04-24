import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(
    private httpClient: HttpClient
  ) {}

  request() {
    this.httpClient
      .get('http://localhost:3000/api/')
      .subscribe(
        result => console.log(result),
        error => console.error(error)
        )
  }

}

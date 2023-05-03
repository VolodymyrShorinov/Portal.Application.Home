import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public configData : any;

  constructor (private httpClient: HttpClient) {
    
  }

  ngOnInit() {
    console.log('Loading config...');
    var config = this.getJSON().subscribe(data => {
      console.log(data);
      this.configData = data;
     });
  }

  public getJSON(): Observable<any> {
    return this.httpClient.get("assets/portal-runtime-config.json");
  }

}

import { Component } from '@angular/core';
import data from '../assets/example.json';

interface Items {
  name: String;
}

interface Data {
  name: String;
  items: Items[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'clanedtask3-angularjsonlist';
  list: Data[] = data;
}

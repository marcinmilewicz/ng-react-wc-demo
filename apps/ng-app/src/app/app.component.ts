import { Component } from '@angular/core';

const generateTitles = () =>
  [...Array(Math.floor(30 + Math.random() * 50)).keys()].map(
    (index) => `ng-app-${index}`
  );

@Component({
  selector: 'ng-react-wc-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected titles = generateTitles();

  generate() {
    this.titles = generateTitles();
    console.log(this.titles);
  }
}

import {Component} from '@angular/core';
import {PageDataService} from './services/page-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  language: string;

  constructor(private pageData: PageDataService) {
    this.language = 'ua';
  }

  switchLanguage() {
    if (this.pageData.language === 'en') {
      this.pageData.language = 'ua';
      this.language = 'en';
    } else {
      this.pageData.language = 'en';
      this.language = 'ua';
    }
    this.pageData.reloadData();
  }
}

import {Component, OnInit} from '@angular/core';
import {PageDataService} from '../../services/page-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public pageData: PageDataService) {
  }

  ngOnInit() {
  }

}

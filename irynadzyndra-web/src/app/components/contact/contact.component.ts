import {Component, OnInit} from '@angular/core';
import {PageDataService} from '../../services/page-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public pageData: PageDataService) {
  }

  ngOnInit() {
  }

}

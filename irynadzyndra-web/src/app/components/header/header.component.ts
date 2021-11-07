import {Component, OnInit} from '@angular/core';
import {PageDataService} from '../../services/page-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
showDropdown: boolean = false;

  constructor(public pageData: PageDataService) {

  }

  ngOnInit() {
  }

  dropdownEvent(){
    this.showDropdown = !this.showDropdown;       
}

  hideDropdown(){
  this.showDropdown = false;       
}

}

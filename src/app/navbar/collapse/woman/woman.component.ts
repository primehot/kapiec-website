import { Component, OnInit } from '@angular/core';
import {NavbarCollapseServiceService} from '../../../service/navbar-collapse-service.service';

@Component({
  selector: 'app-navbar-collapse-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.css']
})
export class WomanComponent implements OnInit {

  show = false;

  constructor(private navbarCollapseServiceService: NavbarCollapseServiceService) {
    navbarCollapseServiceService.showWomanCollapse$.subscribe(
      show => {
        this.show = show;
        console.log(`log change ${show}`);
      });
  }

  ngOnInit() {
  }

}

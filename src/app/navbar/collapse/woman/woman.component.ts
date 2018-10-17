import { Component, OnInit } from '@angular/core';
import {NavbarCollapseService} from '../../../service/collapse/navbar.collapse.service';

@Component({
  selector: 'app-navbar-collapse-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.css']
})
export class WomanComponent implements OnInit {

  show = false;

  constructor(private navbarCollapseServiceService: NavbarCollapseService) {
    navbarCollapseServiceService.showWomanCollapse$.subscribe(
      show => {
        this.show = show;
        console.log(`log change ${show}`);
      });
  }

  ngOnInit() {
  }

}

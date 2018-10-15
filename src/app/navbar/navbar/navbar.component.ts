import { Component, OnInit } from '@angular/core';
import {NavbarCollapseServiceService} from '../../service/navbar-collapse-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private navbarCollapseServiceService: NavbarCollapseServiceService) { }

  ngOnInit() {
  }

  navNewsMouseEnter() {
   this.navbarCollapseServiceService.showNewsEvent(true);
  }
  navNewsMouseLeave() {
    this.navbarCollapseServiceService.showNewsEvent(false);
  }

  navDreamsMouseEnter() {
    this.navbarCollapseServiceService.showDreamsEvent(true);
  }
  navDreamsMouseLeave() {
    this.navbarCollapseServiceService.showDreamsEvent(false);
  }

  navWomanMouseEnter() {
    this.navbarCollapseServiceService.showWomanEvent(true);
  }
  navWomanMouseLeave() {
    this.navbarCollapseServiceService.showWomanEvent(false);
  }
}

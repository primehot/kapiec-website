import {Component, OnInit} from '@angular/core';
import {NavbarCollapseServiceService} from '../../../navbar-collapse-service.service';

@Component({
  selector: 'app-navbar-collapse-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  show = false;

  constructor(private navbarCollapseServiceService: NavbarCollapseServiceService) {
    navbarCollapseServiceService.showNewsCollapse$.subscribe(
      show => {
        this.show = show;
        console.log(`log change ${show}`);
      });
  }

  ngOnInit() {
  }

}

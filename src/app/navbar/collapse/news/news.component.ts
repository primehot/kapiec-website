import {Component, OnInit} from '@angular/core';
import {NavbarCollapseService} from '../../../service/collapse/navbar.collapse.service';

@Component({
  selector: 'app-navbar-collapse-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  show = false;
  topics = ['topic1', 'topic 2'];

  twoNews = ['news 1', 'news 2'];

  alsoSee = ['also see 1', 'also see '];

  constructor(private navbarCollapseServiceService: NavbarCollapseService) {
    navbarCollapseServiceService.showNewsCollapse$.subscribe(
      show => {
        this.show = show;
        console.log(`log change ${show}`);
      });
  }

  ngOnInit() {
  }

  newsMouseEnter() {
    console.log('ENTER');
    this.navbarCollapseServiceService.showNewsEvent(true);
  }

  newsMouseLeave() {
    this.navbarCollapseServiceService.showNewsEvent(false);
  }
}

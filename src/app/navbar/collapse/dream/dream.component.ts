import {Component, OnInit} from '@angular/core';
import {NavbarCollapseServiceService} from '../../../service/navbar-collapse-service.service';

@Component({
  selector: 'app-navbar-collapse-dream',
  templateUrl: './dream.component.html',
  styleUrls: ['./dream.component.css']
})
export class DreamComponent implements OnInit {

  show = false;

  constructor(private navbarCollapseServiceService: NavbarCollapseServiceService) {
    navbarCollapseServiceService.showDreamsCollapse$.subscribe(
      show => {
        this.show = show;
        console.log(`log change ${show}`);
      });
  }

  ngOnInit() {
  }

}

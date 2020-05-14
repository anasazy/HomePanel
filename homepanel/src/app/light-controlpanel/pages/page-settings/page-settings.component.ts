import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-settings',
  templateUrl: './page-settings.component.html',
  styleUrls: ['./page-settings.component.css']
})
export class PageSettingsComponent implements OnInit {
  light_src_id;

  constructor(private route: ActivatedRoute, private router: Router) {
      router.events.subscribe((val) => this.setLightSourceID());
   }

  setLightSourceID(){
    this.light_src_id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
  }

}

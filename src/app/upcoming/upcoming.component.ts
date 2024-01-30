import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
})
export class UpcomingComponent {
  constructor(private route: Router, private active: ActivatedRoute) {}
  navigateToHome() {
    // this.route.navigate(['Home'], { relativeTo: this.active });
    // above will append to current active route - relative

    this.route.navigateByUrl('Home');
    // above uses absolute - attaches to root
    // to attach to current route -->
    // this.route.navigateByUrl('Home');
  }
}

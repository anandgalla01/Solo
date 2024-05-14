import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {

  menuItems = [
    { title: "Dashboard", url: "/dashboard", isActive: false },
    { title: "Contacts", url: "/contacts", isActive: false },
    { title: "Tasks", url: "/tasks", isActive: false },
    { title: "Expenses", url: "/expenses", isActive: false },
    { title: "Income", url: "/income", isActive: false },
  ]
  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event: any) => {
      event.url = event.url === '/' ? this.menuItems[0].url : event.url;
      this.menuItems.forEach((item) => {
        item.isActive = item.url.includes(event.url);
      });
    });
  }

}

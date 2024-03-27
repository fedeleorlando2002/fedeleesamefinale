import { Component } from '@angular/core';
import { SidebarService } from 'src/app/shared/service/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
   sidebarVisible: boolean = true; 

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {}

 
  items = [
    {
      label: 'Home',
      routerLink: '/home',
    },
    {
      label: 'Libri',
      routerLink: '/libri',
    },
    {
      label: 'Clienti',
      routerLink: '/clienti',
    },
  ]
}

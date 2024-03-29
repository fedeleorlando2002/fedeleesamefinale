import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
   sidebarVisible: boolean = true; 

  
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

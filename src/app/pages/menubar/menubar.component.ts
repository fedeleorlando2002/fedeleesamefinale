import { Component } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
  items = [
    {
      label: 'Home',
      routerLink: '/home',
    },
    {
      label: 'Clienti',
      routerLink: '/clienti',
    },
    {
      label: 'Libri',
      routerLink: '/libri',
    },
    {
      label: 'Login',
      routerLink: '/login',
    }
  ];
}

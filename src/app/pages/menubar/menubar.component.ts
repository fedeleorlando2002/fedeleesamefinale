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
      icon: 'pi pi-home',
    },
    {
      label: 'Clienti',
      routerLink: '/clienti',
      icon: 'pi pi-user'
    },
    {
      label: 'Libri',
      routerLink: '/libri',
      icon: 'pi pi-book',
    },
  ];
}

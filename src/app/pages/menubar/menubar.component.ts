import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
      label: 'Logout',
      command: () => this.logout()
    }
  ];

  constructor(private router: Router) {}

  logout() {
    // Effettua il logout e reindirizza l'utente alla pagina di login
    this.router.navigate(['/']);
  }
}

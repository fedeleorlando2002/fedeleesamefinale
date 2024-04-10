import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Verifica se le credenziali inserite sono corrette (per ora, accettiamo qualsiasi credenziale)
    if (this.username === 'fedele' && this.password === '2002') {
      // Se le credenziali sono inserite, reindirizza l'utente alla home
      this.router.navigate(['/home']);
    } else {
      // Altrimenti, mostra un messaggio di errore
      console.log('Login fallito. Inserire credenziali valide.');
    }
  }
}

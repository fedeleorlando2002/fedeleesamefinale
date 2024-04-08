import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared/interfaces/cliente.model';
import { ClientiService } from 'src/app/shared/service/clienti.service';
import { LibriService } from 'src/app/shared/service/libri.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  // mostra ultimi clienti
  ultimiClienti: Cliente[] = [];
  clienti: Cliente[] = [];
  loading = true;

  // card
  numberOfClienti: number = 0;
  numberOfLibri: number = 0;

  // grafico
  data: any;
  options: any;

  constructor(
    private libriService: LibriService,
    private clientiService: ClientiService,
  ) { }

  ngOnInit(): void {
    this.clientiService.get().subscribe((data) => {
      this.clienti = data;
      this.loading = false;

      // Seleziona solo gli ultimi 5 clienti
      this.ultimiClienti = this.clienti.slice(-5);

      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();

      let Natiprima1946 = 0;
      let Natitra1946e1975 = 0;
      let Natitra1975e2000 = 0;
      let Natidopo2000 = 0;

      for (let cliente of this.clienti) {
        const birthYear = new Date(cliente.eta).getFullYear();
        if (birthYear < 1946) {
          Natiprima1946++;
        } else if (birthYear >= 1946 && birthYear <= 1975) {
          Natitra1946e1975++;
        } else if (birthYear >= 1975 && birthYear <= 2000) {
          Natitra1975e2000++;
        } else {
          Natidopo2000++;
        }
      }

      this.data = {
        labels: ['Nati prima del 1946', 'Nati tra il 1946 e il 1975', 'Nati tra il 1975 e il 2000', 'Nati dopo il 2000'],
        datasets: [
          {
            data: [Natiprima1946, Natitra1946e1975, Natitra1975e2000, Natidopo2000],
            backgroundColor: ['blue', 'red', 'yellow', 'purple'],
            hoverBackgroundColor: ['blue', 'red', 'yellow', 'purple']
          }
        ]
      };
    });

    this.getLibriCount();
    this.getClientiCount();
  }

  getLibriCount() {
    this.libriService.get().subscribe((libri) => {
      this.numberOfLibri = libri.length; // Ottieni la lunghezza dell'array dei pacchetti
    });
  }

  getClientiCount() {
    this.clientiService.get().subscribe((clienti) => {
      this.numberOfClienti = clienti.length;
    });
  }
}
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
    const queryParams = {
      sort: "desc",
      limit: 5,
    };

    this.clientiService.get().subscribe((data) => {
      this.clienti = data;
      this.loading = false;
    });


    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }
      ]
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };

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

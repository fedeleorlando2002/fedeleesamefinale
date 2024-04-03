import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/shared/interfaces/libro.model';
import { ClientiService } from 'src/app/shared/service/clienti.service';
import { LibriService } from 'src/app/shared/service/libri.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

    // card
    numberOfClienti: number = 0; 
    numberOfLibri: number = 0;

    // grafico
    data: any;
    options: any;
  
    constructor(
        private libriService: LibriService,
        private clientiService: ClientiService,
     ) {}

    ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue(
        '--text-color-secondary'
      );
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
  
      this.data = {
        labels: [
          'Gennaio',
          'Febbraio',
          'Marzo',
          'Aprile',
          'Maggio',
          'Giugno',
          'Luglio',
          'Agosto',
          'Settembre',
          'Ottobre',
          'Novembre',
          'Dicembre',
        ],
        datasets: [
          {
            label: 'Dataset 1',
            fill: false,
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            yAxisID: 'y',
            tension: 0.4,
            data: [65, 59, 80, 81, 56, 55, 10,25,42,60,27,36],
          },
          {
            label: 'Dataset 2',
            fill: false,
            borderColor: documentStyle.getPropertyValue('--green-500'),
            yAxisID: 'y1',
            tension: 0.4,
            data: [28, 48, 40, 19, 86, 27, 90,72,45,53,28,60],
          },
        ],
      };
  
      this.options = {
        stacked: false,
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              drawOnChartArea: false,
              color: surfaceBorder,
            },
          },
        },
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

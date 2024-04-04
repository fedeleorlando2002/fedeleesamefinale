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
      this.clientiService.get().subscribe((data) => {
        this.clienti = data;
        this.loading = false;

    // Aggrega i clienti in base alle fasce di età
    const over65 = this.clienti.filter(cliente => cliente.eta > 65).length;
    const between18And64 = this.clienti.filter(cliente => cliente.eta >= 18 && cliente.eta <= 64).length;
    const under18 = this.clienti.filter(cliente => cliente.eta < 18).length;

    this.data = {
      labels: ['Over 65', '18-64', 'Under 18'],
      datasets: [
        {
          data: [over65, between18And64, under18],
          backgroundColor: ['blue', 'red', 'yellow'],
          hoverBackgroundColor: ['blue', 'red', 'yellow']
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



  // ngOnInit(): void {
  //   const queryParams = {
  //     sort: "desc",
  //     limit: 5,
  //   };

  //   this.clientiService.get().subscribe((data) => {
  //     this.clienti = data;
  //     this.loading = false;
  //   });
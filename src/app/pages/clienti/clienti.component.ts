import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared/interfaces/cliente.model';
import { ClientiService } from 'src/app/shared/service/clienti.service';
import { Router } from '@angular/router';
import { StaticStatoRichiesta, StatoRichiesta } from 'src/app/shared/interfaces/stato.model';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})

export class ClientiComponent implements OnInit {
  stati!: StatoRichiesta[] | undefined;
  statoSelezionato!: StatoRichiesta | undefined;
  
  date: Date | undefined;

  search: any = ''; // Inizializza la ricerca

  clienteForm!: Cliente;
  clienti: Cliente[] = [];
  lbl_header = "";
  label = "clienti";
  loading = true;
  lblBtnSubmit: string = "Salva";
  errorOccurred: boolean = false;
  visibleDialog = false;
  editMode: boolean = false;
  nascondiTastoElimina: boolean = false;
  message: string = "";

  constructor(private clientiService: ClientiService,private router: Router ) {
  }

  ngOnInit() {
    this.stati = StaticStatoRichiesta;
    this.clientiService.get().subscribe((data) => {
      this.clienti = data;
      this.loading = false;
    });
    this.loadClienti();
  }

  loadClienti() {
    this.loading = true; // Imposta il flag di caricamento su true prima di effettuare la chiamata API
    this.clientiService.get().subscribe((data) => {
      // Filtra l'array dei libri in base alla stringa di ricerca
      this.clienti = data.filter(clienti =>
        clienti.nome.toLowerCase().includes(this.search.toLowerCase()) ||
        clienti.cognome.toLowerCase().includes(this.search.toLowerCase()) ||
        clienti.email.toLowerCase().includes(this.search.toLowerCase()) ||
        clienti.telefono.toLowerCase().includes(this.search.toLowerCase()) ||
        clienti.eta.toLowerCase().includes(this.search.toLowerCase())
      );
      this.loading = false; // Imposta il flag di caricamento su false dopo aver ottenuto i dati
    });
  }

  getColoreStato(numeroStato: number): string {
    const statoCorrispondente = this.stati!.find(
      (stato) => stato.stato === numeroStato
    );
    return statoCorrispondente ? statoCorrispondente.colore : "";
  }
  
  convertiStato(numeroStato: number): string {
    const statoCorrispondente = this.stati!.find(
      (stato) => stato.stato === numeroStato
    );
    return statoCorrispondente ? statoCorrispondente.label : "Stato non valido";
  }

  Finestramodale() {
    this.lbl_header = "Inserisci un nuovo Cliente";
    this.visibleDialog = true; //questo serve per aprire il p-dialog
    this.editMode = false; //questo serve per capire se si sta modificando un cliente o se si sta inserendo un nuovo cliente
    this.clienteForm = {} as Cliente; //questo serve per inizializzare il nuovo cliente
    this.statoSelezionato = undefined; // reimposta lo stato selezionato a undefined
    this.lblBtnSubmit = "Salva"; //questo serve per cambiare il testo del bottone
  }

  PrepareFinestraModale(cliente: Cliente) {
    this.lbl_header = `Modifica/Elimina Cliente: ${cliente.nome} ${cliente.cognome}`;
    this.visibleDialog = true;
    this.clienteForm = cliente;
    this.editMode = true;
    this.lblBtnSubmit = "Aggiorna"; //questo serve per cambiare il testo del bottone
    this.nascondiTastoElimina = false;
    this.statoSelezionato = this.stati!.find(
      (stato) => stato.stato === this.clienteForm.stato
    )!;
  }

  salvacliente(_id: string | undefined) {
    if (_id && this.editMode) {
      let cliente: Cliente = { ...this.clienteForm, stato: this.statoSelezionato!.stato, };
      delete cliente._id
      this.clientiService.put(_id, cliente).subscribe((data: Cliente) => {
        console.log(cliente);
        this.visibleDialog = false;
        this.loadClienti(); 
      });
     } else {
      let nuovoCliente: Cliente = { ...this.clienteForm, stato: this.statoSelezionato?.stato ?? 0 };
      this.clientiService.post(nuovoCliente).subscribe((data: Cliente) => {
        console.log(data);
        this.visibleDialog = false;
        this.loadClienti(); 
      });
    }
  }

  eliminacliente(_id: string | undefined) {
    if (!_id) {
      _id = "";
    }
    if (confirm("Sei sicuro di voler eliminare questo pacchetto salute?")) {
      this.clientiService.delete(_id).subscribe(
        () => {
          this.clienti = this.clienti.filter(
            (clienti) => clienti._id !== _id
          );
          this.visibleDialog = false;
        },
        (error) => {
          console.error(
            "Errore durante l'eliminazione del cliente",
            error
          );
          this.errorOccurred = true;
          this.message =
            "Si è verificato un errore durante l'eliminazione del cliente.";
        }
      );
    }
    this.visibleDialog = false;
  }

  annulla() {
    this.visibleDialog = false;
    this.clientiService.get().subscribe((data) => {
      this.clienti = data;
      this.loading = false;
    });
  }
}



   //  else {
    //   this.clientiService.post(this.clienteForm).subscribe((data: Cliente) => {
    //     console.log(data); // Console log della risposta dopo l'inserimento del cliente
    //     this.addClienteToArray(data);
    //     this.visibleDialog = false;
    //   });
    // }
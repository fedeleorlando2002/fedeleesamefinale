import { Component } from '@angular/core';
import { Cliente } from 'src/app/shared/interfaces/cliente.model';
import { ClientiService } from 'src/app/shared/service/clienti.service';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})

export class ClientiComponent {

  search: string = ''; // Inizializza la ricerca

  clienteInTheForm!: Cliente;
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

  constructor(private clientiService: ClientiService) {
  }

  ngOnInit(): void {
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
        clienti.telefono.toLowerCase().includes(this.search.toLowerCase()) 
      );
      this.loading = false; // Imposta il flag di caricamento su false dopo aver ottenuto i dati
    });
  }


  // loadClienti() {
  //   this.clientiService.get().subscribe((data) => {
  //     this.clienti = data;
  //     this.loading = false;
  //   });
  // }

  Finestramodale() {
    this.lbl_header = "Inserisci un nuovo Cliente";
    this.visibleDialog = true; //questo serve per aprire il p-dialog
    this.editMode = false; //questo serve per capire se si sta modificando un cliente o se si sta inserendo un nuovo cliente
    this.clienteInTheForm = {} as Cliente; //questo serve per inizializzare il nuovo cliente
    this.lblBtnSubmit = "Salva"; //questo serve per cambiare il testo del bottone
    this.nascondiTastoElimina = true;
  }

  PrepareFinestraModale(cliente: Cliente) {
    this.lbl_header = `Modifica/Elimina Cliente: ${cliente.nome}${cliente.cognome}`;
    this.visibleDialog = true;
    this.clienteInTheForm = cliente;
    this.editMode = true;
    this.lblBtnSubmit = "Aggiorna"; //questo serve per cambiare il testo del bottone
    this.nascondiTastoElimina = false;
  }


  salvacliente(_id: string | undefined) {
    if (_id && this.editMode) {
      let cliente: Cliente = { ...this.clienteInTheForm };
      delete cliente._id
      this.clientiService.put(_id, cliente).subscribe((data: Cliente) => {
        this.updateClienteArray(data);
        this.visibleDialog = false;
      });
    } else {
      this.clientiService.post(this.clienteInTheForm).subscribe((data: Cliente) => {
        this.addClienteToArray(data);
        this.visibleDialog = false;
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

  // Metodi di aggiornamento dell'array libri
  private updateClienteArray(updatedCliente: Cliente) {
    this.clienti = this.clienti.map(cliente => {
      if (cliente._id === updatedCliente._id) {
        return updatedCliente;
      }
      return cliente;
    });
  }

  private addClienteToArray(newCliente: Cliente) {
    this.clienti.push(newCliente);
  }



  annulla() {
    this.visibleDialog = false;
    this.clientiService.get().subscribe((data) => {
      this.clienti = data;
      this.loading = false;
    });
  }
}

// ngOnInit(): void {
//   this.clientiService.get().subscribe((data) => {
//     this.clienti = data;
//     this.loading = false;
//   });
// }













// <!-- <p-table
//     [value]="libri"
//     [paginator]="true"
//     [rows]="5"
//     [showCurrentPageReport]="true"
//     [tableStyle]="{ 'min-width': '50rem' }"
//     currentPageReportTemplate="Mostra {first} su {last} di {totalRecords} {{
//       label
//     }}"
//     [rowsPerPageOptions]="[10, 25, 50]"
// >
//     <ng-template pTemplate="header">
//         <tr>
//             <th style="width:25%">TITOLO</th>
//             <th style="width:25%">AUTORE</th>
//             <th style="width:25%">PREZZO</th>
//             <th style="width:25%">CATEGORIA</th>
//             <th style="width:25%">AZIONI</th>
//         </tr>
//     </ng-template>
//     <ng-template pTemplate="body" let-libro>
//         <tr>
//             <td>{{ libro.titolo }}</td>
//             <td>{{ libro.autore}}</td>
//             <td>{{ libro.prezzo | currency: 'EUR'}}</td>
//             <td>{{ libro.categoria }}</td>
//             <td class="table-col transp-bord">
//                 <p-button
//                   (click)="viewOrEdit_PrepareFinestraModale(libro)"
//                   icon="pi pi-pencil"
//                   label=""
//                   pRipple
//                   [style]="{
//                     'background-color': '#00a79d',
//                     'border-color': '#00a79d',
//                     color: 'white'
//                   }"
//                 >
//               </p-button>
//               </td>
//             </tr>
//     </ng-template>
// </p-table> -->
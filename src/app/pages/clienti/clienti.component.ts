import { Component } from '@angular/core';
import { Cliente } from 'src/app/shared/interfaces/cliente.model';
import { ClientiService } from 'src/app/shared/service/clienti.service';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent {

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

  constructor(private clientiService: ClientiService ) {
  
  }

  ngOnInit(): void {
    this.clientiService.get().subscribe((data) => {
      this.clienti = data;
      this.loading = false;
    });
  }

  Finestramodale() {
    this.lbl_header = "Inserisci un nuovo Cliente";
    this.visibleDialog = true; //questo serve per aprire il p-dialog
    this.editMode = false; //questo serve per capire se si sta modificando un dottore o se si sta inserendo un nuovo dottore
    this.clienteInTheForm = {} as Cliente; //questo serve per inizializzare il nuovo dottore
    this.lblBtnSubmit = "Salva"; //questo serve per cambiare il testo del bottone
    this.nascondiTastoElimina = true;
  }

  MODIFICA(cliente: Cliente) {
    this.lbl_header = `Modifica/Elimina Cliente: ${cliente.nome}`;
    this.visibleDialog = true;
    this.clienteInTheForm = cliente;
    this.editMode = true;
    this.lblBtnSubmit = "Aggiorna"; //questo serve per cambiare il testo del bottone
    this.nascondiTastoElimina = false;
  }


  salvacliente(_id: string | undefined) {
    if (_id && this.editMode) {
      let cliente: Cliente = { ...this.clienteInTheForm};
      this.clientiService.put(_id, cliente).subscribe((data: Cliente) => {
        this.visibleDialog = false;
      });
    } else {
      this.clientiService.post(this.clientiService).subscribe(() => {
        this.visibleDialog = false;
      });
    }

    this.clientiService.get().subscribe((data) => {
      this.clienti = data;
      this.loading = false;
    });
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
            "Errore durante l'eliminazione del pacchetto salute",
            error
          );
          this.errorOccurred = true;
          this.message =
            "Si è verificato un errore durante l'eliminazione del pacchetto salute.";
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
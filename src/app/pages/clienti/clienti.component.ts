import { Component } from '@angular/core';
import { Cliente } from 'src/app/shared/interfaces/cliente.mdel';
import { ClientiService } from 'src/app/shared/service/clienti.service';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent {

  // clienteInTheForm!: Cliente;
  // clienti: Cliente[] = [];
  // lbl_header = "";
  // label = "clienti";
  // loading = true;
  // lblBtnSubmit: string = "Salva";
  // errorOccurred: boolean = false;
  // showDialog = false;
  // editMode: boolean = false;
  // nascondiTastoElimina: boolean = false;
  // message: string = "";

  // constructor(private clientiService: ClientiService ) {
  
  // }

  // ngOnInit(): void {
  //   this.clientiService.get().subscribe((data) => {
  //     this.clienti = data;
  //     this.loading = false;
  //   });
  // }



  // Finestramodale() {
  //   this.lbl_header = "Inserisci un nuovo Pacchetto Salute";
  //   this.showDialog = true; //questo serve per aprire il p-dialog
  //   this.editMode = false; //questo serve per capire se si sta modificando un dottore o se si sta inserendo un nuovo dottore
  //   this.clienteInTheForm = {} as Cliente; //questo serve per inizializzare il nuovo dottore
  //   this.lblBtnSubmit = "Salva"; //questo serve per cambiare il testo del bottone
  //   this.nascondiTastoElimina = true;
  // }

  // MODIFICA(cliente: Cliente) {
  //   this.lbl_header = `Modifica/Elimina Pacchetto Salute: ${cliente.nome}`;
  //   this.showDialog = true;
  //   this.clienteInTheForm = cliente;
  //   this.editMode = true;
  //   this.lblBtnSubmit = "Aggiorna"; //questo serve per cambiare il testo del bottone
  //   this.nascondiTastoElimina = false;
  // }
}

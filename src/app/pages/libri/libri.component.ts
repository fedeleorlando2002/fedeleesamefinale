import { Component } from '@angular/core';
import { Libro } from 'src/app/shared/interfaces/libro.model';
import { LibriService } from 'src/app/shared/service/libri.service';

@Component({
  selector: 'app-libri',
  templateUrl: './libri.component.html',
  styleUrls: ['./libri.component.css']
})
export class LibriComponent {

  libroInTheForm!: Libro;
  libri: Libro[] = [];
  lbl_header = "";
  label = "Libri";
  loading = true;
  lblBtnSubmit: string = "Salva";
  errorOccurred: boolean = false;
  showDialog = false;
  editMode: boolean = false;
  nascondiTastoElimina: boolean = false;
  message: string = "";

  constructor(private libriService: LibriService) {
  
  }

  // ngOnInit(): void {
  //   this.libriService.get().subscribe((data) => {
  //     this.libri = data;
  //     this.loading = false;
  //   });
  // }


  Finestramodale() {
    this.lbl_header = "Inserisci un nuovo Pacchetto Salute";
    this.showDialog = true; //questo serve per aprire il p-dialog
    this.editMode = false; //questo serve per capire se si sta modificando un dottore o se si sta inserendo un nuovo dottore
    this.libroInTheForm = {} as Libro; //questo serve per inizializzare il nuovo dottore
    this.lblBtnSubmit = "Salva"; //questo serve per cambiare il testo del bottone
    this.nascondiTastoElimina = true;
  }

  MODIFICA(libro: Libro) {
    this.lbl_header = `Modifica/Elimina Pacchetto Salute: ${libro.autore}`;
    this.showDialog = true;
    this.libroInTheForm = libro;
    this.editMode = true;
    this.lblBtnSubmit = "Aggiorna"; //questo serve per cambiare il testo del bottone
    this.nascondiTastoElimina = false;
  }

  SALVA() {
    // if (_id && this.editMode) {
    //   let pacchetto: Pacchetto = { ...this.pacchettoInTheForm };
    //   this.pacchettiService.put(_id, pacchetto).subscribe((data: Pacchetto) => {
    //     this.showDialog = false;
    //   });
    // } else {
    //   this.pacchettiService.post(this.pacchettoInTheForm).subscribe(() => {
    //     this.showDialog = false;
    //   });
    // }

    // this.pacchettiService.get().subscribe((data) => {
    //   this.pacchetti = data;
    //   this.loading = false;
    // });
  }

  ELIMINA() {
  //   if (!_id) {
  //     _id = "";
  //   }
  //   if (confirm("Sei sicuro di voler eliminare questo pacchetto salute?")) {
  //     this.pacchettiService.delete(_id).subscribe(
  //       () => {
  //         this.pacchetti = this.pacchetti.filter(
  //           (pacchetto) => pacchetto._id !== _id
  //         );
  //         this.showDialog = false;
  //       },
  //       (error) => {
  //         console.error(
  //           "Errore durante l'eliminazione del pacchetto salute",
  //           error
  //         );
  //         this.errorOccurred = true;
  //         this.message =
  //           "Si è verificato un errore durante l'eliminazione del pacchetto salute.";
  //       }
  //     );
  //   }
  //   this.showDialog = false;
   }
}
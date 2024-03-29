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
  label = "libri";
  loading = true;
  lblBtnSubmit: string = "Salva";
  errorOccurred: boolean = false;
  showDialog = false;
  editMode: boolean = false;
  nascondiTastoElimina: boolean = false;
  message: string = "";

  constructor(private libriService: LibriService) {
  
  }

  ngOnInit(): void {
    this.libriService.get().subscribe((data) => {
      this.libri = data;
      this.loading = false;
    });
  }

  
  Finestramodale() {
    this.lbl_header = "Inserisci un nuovo Pacchetto Salute";
    this.showDialog = true; //questo serve per aprire il p-dialog
    this.editMode = false; //questo serve per capire se si sta modificando un dottore o se si sta inserendo un nuovo dottore
    this.libroInTheForm = {} as Libro; //questo serve per inizializzare il nuovo dottore
    this.lblBtnSubmit = "Salva"; //questo serve per cambiare il testo del bottone
    this.nascondiTastoElimina = true;
  }

  viewOrEdit_PrepareFinestraModale(libro: Libro) {
    this.lbl_header = `Modifica/Elimina Libro: ${libro.autore}`;
    this.showDialog = true;
    this.libroInTheForm = libro;
    this.editMode = true;
    this.lblBtnSubmit = "Aggiorna"; //questo serve per cambiare il testo del bottone
    this.nascondiTastoElimina = false;
  }

  SALVA(_id: string | undefined) {
   
  }

  elimina(_id: string | undefined) {
  
   }
}
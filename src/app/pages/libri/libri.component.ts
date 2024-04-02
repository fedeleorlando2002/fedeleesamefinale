import { Component } from '@angular/core';
import { Libro } from 'src/app/shared/interfaces/libro.model';
import { LibriService } from 'src/app/shared/service/libri.service';

@Component({
  selector: 'app-libri',
  templateUrl: './libri.component.html',
  styleUrls: ['./libri.component.css']
})

export class LibriComponent{

  libroInTheForm!: Libro;
  libri: Libro[] = [];
  lbl_header = "";
  label = "libri";
  loading = true;
  lblBtnSubmit: string = "Salva";
  errorOccurred: boolean = false;
  visibleDialog = false;
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
    this.lbl_header = "Inserisci un nuovo Libro";
    this.visibleDialog = true; 
    this.editMode = false; 
    this.libroInTheForm = {} as Libro; 
    this.lblBtnSubmit = "Salva"; 
    this.nascondiTastoElimina = true;
  }

  viewOrEdit_PrepareFinestraModale(libro: Libro) {
    this.lbl_header = `Modifica/Elimina Libro: ${libro.titolo}`;
    this.visibleDialog = true;
    this.libroInTheForm = libro;
    this.editMode = true;
    this.lblBtnSubmit = "Aggiorna"; 
    this.nascondiTastoElimina = false;
  }

  salvalibro(_id: string | undefined) {
    if (_id && this.editMode) {
      let libro: Libro = { ...this.libroInTheForm};
      delete libro._id
      this.libriService.put(_id, libro).subscribe((data: Libro) => {
        this.visibleDialog = false;
      });
    } else {
      this.libriService.post(this.libroInTheForm).subscribe(() => {
        this.visibleDialog = false;
      });
    }
    this.libriService.get().subscribe((data) => {
      this.libri = data;
      this.loading = false;
    });
  }

  eliminalibro(_id: string | undefined) {
    if (!_id) {
      _id = "";
    }
    if (confirm("Sei sicuro di voler eliminare questo libro?")) {
      this.libriService.delete(_id).subscribe(
        () => {
          this.libri = this.libri.filter(
            (libro) => libro._id !== _id
          );
          this.visibleDialog= false;
        },
        // (error) => {
        //   console.error(
        //     "Errore durante l'eliminazione del pacchetto salute",
        //     error
        //   );
        //   this.errorOccurred = true;
        //   this.message =
        //     "Si è verificato un errore durante l'eliminazione del pacchetto salute.";
        // }
      );
    }
    this.visibleDialog = false;
  }

  annulla() {
    this.visibleDialog = false;
    this.libriService.get().subscribe((data) => {
      this.libri = data;
      this.loading = false;
    });
  }
}
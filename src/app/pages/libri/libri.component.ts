import { Component } from '@angular/core';
import { Libro } from 'src/app/shared/interfaces/libro.model';
import { LibriService } from 'src/app/shared/service/libri.service';

@Component({
  selector: 'app-libri',
  templateUrl: './libri.component.html',
  styleUrls: ['./libri.component.css'],

})

export class LibriComponent{

  search: string = ''; // Initialize search variable

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
    this.loadLibri();
  }
  
  // loadLibri() {
  //   this.libriService.get().subscribe((data) => {
  //     this.libri = data;
  //     this.loading = false;
  //   });
  // }

  loadLibri() {
    this.loading = true; // Imposta il flag di caricamento su true prima di effettuare la chiamata API
    this.libriService.get().subscribe((data) => {
      // Filtra l'array dei libri in base alla stringa di ricerca
      this.libri = data.filter(libro =>
        libro.titolo.toLowerCase().includes(this.search.toLowerCase()) ||
        libro.autore.toLowerCase().includes(this.search.toLowerCase()) ||
        libro.categoria.toLowerCase().includes(this.search.toLowerCase())
      );
      this.loading = false; // Imposta il flag di caricamento su false dopo aver ottenuto i dati
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

  PrepareFinestraModale(libro: Libro) {
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
      delete libro._id;
      this.libriService.put(_id, libro).subscribe((data: Libro) => {
        this.updateLibroArray(data);
        this.visibleDialog = false;
      });
    } else {
      this.libriService.post(this.libroInTheForm).subscribe((data: Libro) => {
        this.addLibroToArray(data);
        this.visibleDialog = false;
      });
    }
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
        (error) => {
          console.error(
            "Errore durante l'eliminazione del libro",
            error
          );
          this.errorOccurred = true;
          this.message =
            "Si è verificato un errore durante l'eliminazione del libro.";
        }
      );
    }
    this.visibleDialog = false;
  }

   // Metodi di aggiornamento dell'array libri
   private updateLibroArray(updatedLibro: Libro) {
    this.libri = this.libri.map(libro => {
      if (libro._id === updatedLibro._id) {
        return updatedLibro;
      }
      return libro;
    });
  }

  private addLibroToArray(newLibro: Libro) {
    this.libri.push(newLibro);
  }

  annulla() {
    this.visibleDialog = false;
    this.libriService.get().subscribe((data) => {
      this.libri = data;
      this.loading = false;
    });
  }
}




  // ngOnInit(): void {
  //   this.libriService.get().subscribe((data) => {
  //     this.libri = data;
  //     this.loading = false;
  //   });
  // }




// salvalibro(_id: string | undefined) {
//   if (_id && this.editMode) {
//     let libro: Libro = { ...this.libroInTheForm};
//     delete libro._id
//     this.libriService.put(_id, libro).subscribe((data: Libro) => {
//       this.visibleDialog = false;
//     });
//   } else {
//     this.libriService.post(this.libroInTheForm).subscribe(() => {
//       this.visibleDialog = false;
//     });
//   }
//   this.libriService.get().subscribe((data) => {
//     this.libri = data;
//     this.loading = false;
//   });
// }

export interface StatoRichiesta {
    stato: number;
    label: string;
    colore: string;
  }
  
  export const StaticStatoRichiesta: StatoRichiesta[] = [
    { stato: 0, label: "libri acquistati meno di 10", colore: "red" },
    { stato: 1, label: "libri acquistati più di 10", colore: "green" },
    { stato: 2, label: "libri acquistati più di 20", colore: "blue" },
  ];
  
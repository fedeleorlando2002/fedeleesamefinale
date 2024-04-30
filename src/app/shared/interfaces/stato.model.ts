export interface StatoRichiesta {
    stato: number;
    label: string;
    colore: string;
  }
  
  
  export const StaticStatoRichiesta: StatoRichiesta[] = [
    { stato: 0, label: "meno 10 libri", colore: "red" },
    { stato: 1, label: "più 10 libri", colore: "green" },
    { stato: 2, label: "più 20 libri", colore: "blue" },
  ];
  
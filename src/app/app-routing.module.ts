import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("../app/pages/home/home.module").then(
        (m) => m.HomeModule
      ),
  },
  {
    path: "libri",
    loadChildren: () =>
      import("../app/pages/libri/libri.module").then(
        (m) => m.LibriModule
      ), 
  },
  {
    path: "clienti",
    loadChildren: () =>
      import("../app/pages/clienti/clienti.module").then(
        (m) => m.ClientiModule
      ), 
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
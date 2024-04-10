import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MenubarComponent } from './pages/menubar/menubar.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent, // Imposta il componente di login come componente da visualizzare sulla rotta principale
  },
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
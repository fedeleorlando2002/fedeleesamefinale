import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibriComponent } from './pages/libri/libri.component';
import { ClientiComponent } from './pages/clienti/clienti.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';


const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("../app/pages/home/home.module").then(
        (m) => m.HomeModule
      ),
    data: { breadcrumb: "HOME" },
  },
  {
    path: "libri",
    loadChildren: () =>
      import("../app/pages/libri/libri.module").then(
        (m) => m.LibriModule
      ),
    data: { breadcrumb: "Pacchetti Salute" },
 
  },
  {
    path: "clienti",
    loadChildren: () =>
      import("../app/pages/clienti/clienti.module").then(
        (m) => m.ClientiModule
      ),
    data: { breadcrumb: "Richieste WhatsApp" },
  },
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

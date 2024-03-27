import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibriComponent } from './pages/libri/libri.component';

import { ClientiComponent } from './pages/clienti/clienti.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';


const routes: Routes = [
  // { path: '', component: SidebarComponent},
  // { path: 'home', component: HomeComponent },
  // { path: 'libri', component: LibriComponent },
  // { path: 'clienti', component: ClientiComponent},
  {
    path: '',
    redirectTo: '/sidebar',
    pathMatch: 'full',
  },
  {
    path: 'home',
    // loadchildren serve per caricare un modulo in modo asincrono (quindi non appena viene caricata la pagina) e quindi più velocemente
    loadChildren: () =>
      import('./pages/home/home.module').then(
        (m) => m.HomeModule
      ),
    component: HomeComponent,
  },
  {
    path: 'sidebar',
    loadChildren: () =>
      import('./pages/sidebar/sidebar.module').then(
        (m) => m.MySidebarModule
      ),
    component: SidebarComponent,
  },
  {
    path: 'libri',
    loadChildren: () =>
      import('./pages/libri/libri.module').then(
        (m) => m.LibriModule
      ),
    component: LibriComponent,
  },
  {
    path: 'clienti',
    loadChildren: () =>
      import('./pages/clienti/clienti.module').then((m) => m.ClientiModule),
    component: ClientiComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibriComponent } from './pages/libri/libri.component';

import { ClientiComponent } from './pages/clienti/clienti.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';


const routes: Routes = [
  { path: '', component: SidebarComponent},
  { path: 'home', component: HomeComponent },
  { path: 'libri', component: LibriComponent },
  { path: 'clienti', component: ClientiComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

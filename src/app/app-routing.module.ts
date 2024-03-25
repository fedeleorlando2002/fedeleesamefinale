import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibriComponent } from './pages/libri/libri.component';
import { CategorieComponent } from './pages/categorie/categorie.component';
import { ClientiComponent } from './pages/clienti/clienti.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'libri', component: LibriComponent },
  { path: 'categorie', component: CategorieComponent},
  { path: 'cliente', component: ClientiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartModule } from 'primeng/chart';
    
const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes),
    ChartModule
  ],
})
export class HomeModule {}
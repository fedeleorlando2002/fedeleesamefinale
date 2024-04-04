import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';  
import { TableModule } from 'primeng/table';  
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
    ChartModule,
    CardModule,
    ButtonModule,
    TableModule
  ],
})
export class HomeModule {}
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';  
import { TableModule } from 'primeng/table';
import { MyMenuBarModule } from "../menubar/menubar.module";  
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
        TableModule,
        MyMenuBarModule
    ]
})
export class HomeModule {}
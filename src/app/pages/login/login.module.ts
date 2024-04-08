import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { LoginComponent } from "./login.component";
import { CheckboxModule } from 'primeng/checkbox';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent],
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    CommonModule,
    ButtonModule,
    CheckboxModule
  ],

})
export class LoginModule {}
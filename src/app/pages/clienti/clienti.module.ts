import { NgModule } from '@angular/core';
import { ClientiComponent } from './clienti.component';
import { RouterModule, Routes } from "@angular/router";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputNumberModule } from "primeng/inputnumber";
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: ClientiComponent,
  },
];


@NgModule({
  declarations: [ClientiComponent],
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    CommonModule,
    ButtonModule,
    TableModule,
    DialogModule,
    MessagesModule,
    MessageModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,   
  ],

})
export class ClientiModule {}
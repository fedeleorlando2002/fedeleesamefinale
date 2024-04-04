import { NgModule } from "@angular/core";
import { LibriComponent } from "./libri.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputNumberModule } from "primeng/inputnumber";


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: LibriComponent,
  },
];

@NgModule({
  declarations: [LibriComponent],
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
export class LibriModule {}
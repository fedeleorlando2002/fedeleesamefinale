import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// pagine
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LibriComponent } from './pages/libri/libri.component';

// funzioni primeng
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { CategorieComponent } from './pages/categorie/categorie.component';
import { ClientiComponent } from './pages/clienti/clienti.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from "primeng/dialog";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LibriComponent,
    CategorieComponent,
    ClientiComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    ButtonModule,
    TableModule,
    DialogModule,
    MessageModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

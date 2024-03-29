import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// pagine
import { AppComponent } from './app.component';
import { MySidebarModule} from './pages/sidebar/sidebar.module';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MySidebarModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule { }

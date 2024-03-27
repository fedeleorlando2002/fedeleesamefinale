import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// pagine
import { AppComponent } from './app.component';
import { MySidebarModule} from './pages/sidebar/sidebar.module';

// funzioni primeng
// import { ButtonModule } from 'primeng/button';

// import { TableModule } from 'primeng/table';
// import { DialogModule } from "primeng/dialog";
// import { MessagesModule } from "primeng/messages";
// import { MessageModule } from "primeng/message";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MySidebarModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    // ButtonModule,
    // TableModule,
    // DialogModule,
    // MessageModule,
    // MessagesModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

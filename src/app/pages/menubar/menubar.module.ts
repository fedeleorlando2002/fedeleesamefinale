import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenubarComponent } from './menubar.component';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [MenubarComponent],
  imports: [CommonModule, MenubarModule, FormsModule, InputTextModule],
  exports: [MenubarComponent],
})
export class MyMenuBarModule {}

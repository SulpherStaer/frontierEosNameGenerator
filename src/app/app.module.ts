import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { NameCardComponent } from './name-card/name-card.component';
import { InputSelectorComponent } from './input-selector/input-selector.component';
import { ExportScreenComponent } from './export-screen/export-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NameCardComponent,
    InputSelectorComponent,
    ExportScreenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { NameCardComponent } from './name-card/name-card.component';
import { InputSelectorComponent } from './input-selector/input-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    NameCardComponent,
    InputSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
